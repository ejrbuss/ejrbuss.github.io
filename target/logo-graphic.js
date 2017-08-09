var colors = require('./config/colors');
var T = require('three');
require('./lib/anaglyph-effect');
var config = {
    fov: 60,
    factor: 50,
    divisions: 2,
    explode: 12000,
    offset: 200,
};
var camera;
var scene;
var group;
var renderer;
var effect;
var _a = [0, 0, 0], mouseX = _a[0], mouseY = _a[1], dist = _a[2];
var screenStats = function (w) {
    if (w === void 0) { w = window; }
    return ({
        width: w.innerWidth,
        height: w.innerHeight,
        hwidth: w.innerWidth / 2,
        hheight: w.innerHeight / 2,
        aspect: w.innerWidth / window.innerHeight
    });
};
var zeroClamp = function (value) {
    if (value > 0) {
        return value;
    }
    return 0;
};
var _b = screenStats(), hwidth = _b.hwidth, hheight = _b.hheight;
var init = function (container) {
    var _a = screenStats(), width = _a.width, height = _a.height, aspect = _a.aspect;
    var f = config.factor / config.divisions;
    // Camera
    camera = new T.PerspectiveCamera(config.fov, aspect, 1, 10000);
    camera.position.z = 500;
    // Scene
    scene = new T.Scene();
    scene.fog = new T.Fog(0xffffff, 1, 3000);
    var ambLight = new T.AmbientLight(0x222222);
    var dirLight1 = new T.DirectionalLight(0xddaaaa, 1);
    var dirLight2 = new T.DirectionalLight(0xddaaaa, 1);
    dirLight1.position.set(2, 2, 2).normalize();
    dirLight2.position.set(-2, -2, 4).normalize();
    scene.add(ambLight);
    scene.add(dirLight1);
    scene.add(dirLight2);
    // Geometry
    var geo = new T.BoxGeometry(f, f, f);
    var mat = new T.MeshStandardMaterial({ color: colors.accent });
    var lineMat = new T.LineBasicMaterial({ color: colors.accent });
    group = new T.Group();
    var cubeHelper = function (x, y, z) {
        var geoLine = new T.Geometry();
        var cube = new T.Mesh(geo, mat);
        var f2 = f / 2;
        cube.position.set(x, y, z);
        geoLine.vertices.push(new T.Vector3(x + f2, y + f2, z + f2), new T.Vector3(x + f2, y + f2, z + f2));
        var line = new T.Line(geoLine, lineMat);
        var xr = Math.random() - 0.5;
        var yr = Math.random() - 0.5;
        var zr = Math.random() - 0.5;
        cube.ray = function (t) { return cube.position.set(x + xr * t, y + yr * t, z + zr * t); };
        line.ray = function (t) { return (line.geometry.vertices[1].set(cube.position.x + f2, cube.position.y + f2, cube.position.z + f2), line.geometry.verticesNeedUpdate = true); };
        group.add(cube);
        group.add(line);
    };
    var cube = function (x, y, z) {
        if (z === void 0) { z = 0; }
        x *= config.factor;
        y *= config.factor;
        z *= config.factor;
        cubeHelper(x, y, z);
        cubeHelper(x + f, y, z);
        cubeHelper(x + f, y + f, z);
        cubeHelper(x + f, y + f, z + f);
        cubeHelper(x + f, y, z + f);
        cubeHelper(x, y + f, z);
        cubeHelper(x, y + f, z + f);
        cubeHelper(x, y, z + f);
    };
    // Left       // Bottom     // Right     // Top      // Inner
    cube(-2, 2);
    cube(-1, -2);
    cube(2, -1);
    cube(1, 2);
    cube(0, 0);
    cube(-2, 1);
    cube(0, -2);
    cube(2, 0);
    cube(0, 2);
    cube(0, 1);
    cube(-2, 0);
    cube(1, -2);
    cube(2, 1);
    cube(-2, -1);
    cube(2, -2);
    cube(2, 2);
    cube(-2, -2);
    scene.add(group);
    // Renderer
    renderer = new T.WebGLRenderer({ antialias: true });
    effect = new T.AnaglyphEffect(renderer);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    effect.setSize(width, height);
    // Handlers
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('touchstart', onDocumentMouseMove, false);
    return renderer.domElement;
};
var onWindowResize = function () {
    var _a = screenStats(), width = _a.width, height = _a.height, aspect = _a.aspect;
    hwidth = width / 2;
    hheight = height / 2;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
};
var onDocumentMouseMove = function (e) {
    if (e.type == 'touchstart') {
        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        e.clientX = touch.pageX;
        e.clientY = touch.pageY;
    }
    mouseX = (e.clientX - hwidth) * 10;
    mouseY = (e.clientY - hheight) * 10;
    var delta = Math.abs(mouseX) + Math.abs(mouseY);
    dist = zeroClamp((delta * delta / config.explode) - config.offset);
};
var render = function () {
    var len = group.children.length;
    for (var i = 0; i < len; i++) {
        group.children[i].ray(dist);
    }
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    effect.render(scene, camera);
};
var animate = function () { return (requestAnimationFrame(animate), render()); };
module.exports = { init: init, animate: animate };
//# sourceMappingURL=logo-graphic.js.map