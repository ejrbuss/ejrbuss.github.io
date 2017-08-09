var colors = require('./config/colors');
var tetris = function (canvas) {
    // Helpers
    var timestamp = function () { return new Date().getTime(); };
    var random = function (min, max) { return min + (Math.random() * (max - min)); };
    var randomChoice = function (choices) { return choices[Math.round(random(0, choices.length - 1))]; };
    // Constants
    var KEY = { ESC: 27, SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };
    var DIR = { UP: 0, RIGHT: 1, DOWN: 2, LEFT: 3, MIN: 0, MAX: 3 };
    var _a = [10, 10], nx = _a[0], ny = _a[1];
    var ctx = canvas.getContext('2d');
    var speed = { start: 0.6, decrement: 0.005, min: 0.1 };
    // Variables
    var dx;
    var dy;
    var blocks;
    var actions;
    var playing;
    var dt;
    var current;
    var next;
    var score;
    var vscore;
    var rows;
    var step;
    var i = { size: 4, blocks: [0x0F00, 0x2222, 0x00F0, 0x4444] };
    var j = { size: 3, blocks: [0x44C0, 0x8E00, 0x6440, 0x0E20] };
    var l = { size: 3, blocks: [0x4460, 0x0E80, 0xC440, 0x2E00] };
    var o = { size: 2, blocks: [0xCC00, 0xCC00, 0xCC00, 0xCC00] };
    var s = { size: 3, blocks: [0x06C0, 0x8C40, 0x6C00, 0x4620] };
    var t = { size: 3, blocks: [0x0E40, 0x4C40, 0x4E00, 0x4640] };
    var z = { size: 3, blocks: [0x0C60, 0x4C80, 0xC600, 0x2640] };
    var eachblock = function (type, x, y, dir, fn) {
        var _a = [0, 0], row = _a[0], col = _a[1];
        for (var bit = 0x8000; bit > 0; bit = bit >> 1) {
            if (type.blocks[dir] & bit) {
                fn(x + col, y + row);
            }
            if (++col === 4) {
                col = 0;
                ++row;
            }
        }
    };
    var occupied = function (type, x, y, dir) {
        var visited = false;
        eachblock(type, x, y, dir, function (x, y) {
            return visited = visited ||
                x < 0 || x >= nx ||
                y < 0 || y >= ny || getBlock(x, y);
        });
        return visited;
    };
    var unoccupied = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return !occupied.apply(void 0, args);
    };
    var pieces = [];
    var randomPiece = function () {
        if (pieces.length == 0) {
            pieces = [i, i, i, i, j, j, j, j, l, l, l, l, o, o, o, o, s, s, s, s, t, t, t, t, z, z, z, z];
        }
        var type = pieces.splice(random(0, pieces.length - 1), 1)[0];
        return { type: type, dir: DIR.UP, x: Math.round(random(0, nx - type.size)), y: 0 };
    };
    function run() {
        playing = true;
        addEvents(); // attach keydown and resize events
        var last = now = timestamp();
        function frame() {
            now = timestamp();
            update(Math.min(1, (now - last) / 1000.0)); // using requestAnimationFrame have to be able to handle large delta's caused when it 'hibernates' in a background or non-visible tab
            draw();
            last = now;
            requestAnimationFrame(frame, canvas);
        }
        resize(); // setup all our sizing information
        reset(); // reset the per-game variables
        frame(); // start the first frame
    }
    function addEvents() {
        document.addEventListener('keydown', keydown, false);
        window.addEventListener('resize', resize, false);
    }
    function resize(event) {
        canvas.width = canvas.clientWidth; // set canvas logical size equal to its physical size
        canvas.height = canvas.clientHeight; // (ditto)
        dx = canvas.width / nx; // pixel size of a single tetris block
        dy = canvas.height / ny; // (ditto)
        invalidate();
        invalidateNext();
    }
    function keydown(ev) {
        var handled = false;
        if (playing) {
            switch (ev.keyCode) {
                case KEY.LEFT:
                    actions.push(DIR.LEFT);
                    handled = true;
                    break;
                case KEY.RIGHT:
                    actions.push(DIR.RIGHT);
                    handled = true;
                    break;
                case KEY.UP:
                    actions.push(DIR.UP);
                    handled = true;
                    break;
                case KEY.DOWN:
                    actions.push(DIR.DOWN);
                    handled = true;
                    break;
                case KEY.ESC:
                    lose();
                    handled = true;
                    break;
            }
        }
        else if (ev.keyCode == KEY.SPACE) {
            play();
            handled = true;
        }
        if (handled)
            ev.preventDefault(); // prevent arrow keys from scrolling the page (supported in IE9+ and all other browsers)
    }
    //-------------------------------------------------------------------------
    // GAME LOGIC
    //-------------------------------------------------------------------------
    function play() { reset(); playing = true; }
    function lose() { setVisualScore(); playing = false; }
    function setVisualScore(n) { vscore = n || score; invalidateScore(); }
    function setScore(n) { score = n; setVisualScore(n); }
    function addScore(n) { score = score + n; }
    function clearScore() { setScore(0); }
    function clearRows() { setRows(0); }
    function setRows(n) { rows = n; step = Math.max(speed.min, speed.start - (speed.decrement * rows)); invalidateRows(); }
    function addRows(n) { setRows(rows + n); }
    function getBlock(x, y) { return (blocks && blocks[x] ? blocks[x][y] : null); }
    function setBlock(x, y, type) { blocks[x] = blocks[x] || []; blocks[x][y] = type; invalidate(); }
    function clearBlocks() { blocks = []; invalidate(); }
    function clearActions() { actions = []; }
    function setCurrentPiece(piece) { current = piece || randomPiece(); invalidate(); }
    function setNextPiece(piece) { next = piece || randomPiece(); invalidateNext(); }
    function reset() {
        dt = 0;
        clearActions();
        clearBlocks();
        clearRows();
        clearScore();
        setCurrentPiece(next);
        setNextPiece();
    }
    function update(idt) {
        if (playing) {
            if (vscore < score)
                setVisualScore(vscore + 1);
            handle(actions.shift());
            dt = dt + idt;
            if (dt > step) {
                dt = dt - step;
                drop();
            }
        }
    }
    function handle(action) {
        switch (action) {
            case DIR.LEFT:
                move(DIR.LEFT);
                break;
            case DIR.RIGHT:
                move(DIR.RIGHT);
                break;
            case DIR.UP:
                rotate();
                break;
            case DIR.DOWN:
                drop();
                break;
        }
    }
    function move(dir) {
        var x = current.x, y = current.y;
        switch (dir) {
            case DIR.RIGHT:
                x = x + 1;
                break;
            case DIR.LEFT:
                x = x - 1;
                break;
            case DIR.DOWN:
                y = y + 1;
                break;
        }
        if (unoccupied(current.type, x, y, current.dir)) {
            current.x = x;
            current.y = y;
            invalidate();
            return true;
        }
        else {
            return false;
        }
    }
    function rotate() {
        var newdir = (current.dir == DIR.MAX ? DIR.MIN : current.dir + 1);
        if (unoccupied(current.type, current.x, current.y, newdir)) {
            current.dir = newdir;
            invalidate();
        }
    }
    function drop() {
        if (!move(DIR.DOWN)) {
            addScore(10);
            dropPiece();
            removeLines();
            setCurrentPiece(next);
            setNextPiece(randomPiece());
            clearActions();
            if (occupied(current.type, current.x, current.y, current.dir)) {
                lose();
            }
        }
    }
    function dropPiece() {
        eachblock(current.type, current.x, current.y, current.dir, function (x, y) {
            setBlock(x, y, current.type);
        });
    }
    function removeLines() {
        var x, y, complete, n = 0;
        for (y = ny; y > 0; --y) {
            complete = true;
            for (x = 0; x < nx; ++x) {
                if (!getBlock(x, y))
                    complete = false;
            }
            if (complete) {
                removeLine(y);
                y = y + 1; // recheck same line
                n++;
            }
        }
        if (n > 0) {
            addRows(n);
            addScore(100 * Math.pow(2, n - 1)); // 1: 100, 2: 200, 3: 400, 4: 800
        }
    }
    function removeLine(n) {
        var x, y;
        for (y = n; y >= 0; --y) {
            for (x = 0; x < nx; ++x)
                setBlock(x, y, (y == 0) ? null : getBlock(x, y - 1));
        }
    }
    // Rendering
    var invalid = {};
    var invalidate = function () { return invalid.court = true; };
    var invalidateNext = function () { return invalid.next = true; };
    var invalidateScore = function () { return invalid.score = true; };
    var invalidateRows = function () { return invalid.rows = true; };
    var draw = function () {
        ctx.save();
        ctx.lineWidth = 1;
        ctx.translate(0.5, 0.5);
        drawCourt();
        ctx.restore();
    };
    var drawCourt = function () {
        if (invalid.court) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (playing) {
                drawPiece(ctx, current.type, current.x, current.y, current.dir);
            }
            for (var y = 0; y < ny; y++) {
                for (var x = 0; x < nx; x++) {
                    if (getBlock(x, y)) {
                        drawBlock(ctx, x, y);
                    }
                }
            }
            invalid.court = false;
        }
    };
    var drawPiece = function (ctx, type, x, y, dir) {
        return eachblock(type, x, y, dir, function (x, y) {
            return drawBlock(ctx, x, y);
        });
    };
    var drawBlock = function (ctx, x, y) {
        ctx.fillStyle = colors.accent;
        ctx.fillRect(x * dx, y * dy, dx, dy);
    };
    // Start
    run();
};
module.exports = tetris;
//# sourceMappingURL=tetris.js.map