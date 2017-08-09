const colors = require('./config/colors');
const T      = require('three');

require('./lib/anaglyph-effect');

const config = {
    fov:       60,
    factor:    50,
    divisions: 2,
    explode:   12000, // bigger is smaller
    offset:    200,
};

let camera;
let scene;
let group;
let renderer;
let effect;

let [mouseX, mouseY, dist] = [0, 0, 0];

const screenStats = (w=window) => ({
    width:   w.innerWidth,
    height:  w.innerHeight,
    hwidth:  w.innerWidth  / 2,
    hheight: w.innerHeight / 2,
    aspect:  w.innerWidth  / window.innerHeight
});

const zeroClamp = value=> {
    if(value > 0) { return value; }
    return 0;
};

let { hwidth, hheight } = screenStats();

const init = container => {

    const { width, height, aspect } = screenStats();
    const f = config.factor / config.divisions;

    // Camera
    camera            = new T.PerspectiveCamera(config.fov, aspect, 1, 10000);
    camera.position.z = 500;

    // Scene
    scene           = new T.Scene();
    scene.fog       = new T.Fog(0xffffff, 1, 3000);
    const ambLight  = new T.AmbientLight(0x222222);
    const dirLight1 = new T.DirectionalLight(0xddaaaa, 1);
    const dirLight2 = new T.DirectionalLight(0xddaaaa, 1);
    dirLight1.position.set(2, 2, 2).normalize();
    dirLight2.position.set(-2, -2, 4).normalize();
    scene.add(ambLight)
    scene.add(dirLight1);
    scene.add(dirLight2);

    // Geometry
    const geo     = new T.BoxGeometry(f, f, f);
    const mat     = new T.MeshStandardMaterial({ color:colors.accent });
    const lineMat = new T.LineBasicMaterial({ color:colors.accent });
    group         = new T.Group();

    const cubeHelper = (x, y, z) => {
        const geoLine = new T.Geometry();
        const cube    = new T.Mesh(geo, mat);
        const f2      = f / 2;
        cube.position.set(x, y, z);
        geoLine.vertices.push(
            new T.Vector3(x + f2, y + f2, z + f2),
            new T.Vector3(x + f2, y + f2, z + f2)
        );
        const line = new T.Line(geoLine, lineMat);
        const xr   = Math.random() - 0.5;
        const yr   = Math.random() - 0.5;
        const zr   = Math.random() - 0.5;
        cube.ray = t => cube.position.set(
            x + xr * t,
            y + yr * t,
            z + zr * t
        );
        line.ray = t => (line.geometry.vertices[1].set(
            cube.position.x + f2,
            cube.position.y + f2,
            cube.position.z + f2
        ), line.geometry.verticesNeedUpdate = true);
        group.add(cube);
        group.add(line);
    };

    const cube = (x, y, z = 0) => {
        x *= config.factor;
        y *= config.factor;
        z *= config.factor;
        cubeHelper(x,     y,     z    );
        cubeHelper(x + f, y,     z    );
        cubeHelper(x + f, y + f, z    );
        cubeHelper(x + f, y + f, z + f);
        cubeHelper(x + f, y,     z + f);
        cubeHelper(x,     y + f, z    );
        cubeHelper(x,     y + f, z + f);
        cubeHelper(x,     y,     z + f);
    };

    // Left       // Bottom     // Right     // Top      // Inner
    cube(-2,  2); cube(-1, -2); cube(2, -1); cube(1, 2); cube(0, 0);
    cube(-2,  1); cube( 0, -2); cube(2,  0); cube(0, 2); cube(0, 1);
    cube(-2,  0); cube( 1, -2); cube(2,  1);
    cube(-2, -1); cube( 2, -2); cube(2,  2);
    cube(-2, -2);
    scene.add(group);

    // Renderer
    renderer = new T.WebGLRenderer({ antialias: true });
    effect   = new T.AnaglyphEffect(renderer);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    effect  .setSize(width, height);

    // Handlers
    window  .addEventListener('resize',     onWindowResize,      false);
    document.addEventListener('mousemove',  onDocumentMouseMove, false);
    document.addEventListener('touchstart', onDocumentMouseMove, false);

    return renderer.domElement;
};

const onWindowResize = () => {
    let { width, height, aspect } = screenStats();
    hwidth  = width  / 2;
    hheight = height / 2;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
};

const onDocumentMouseMove = e => {
    mouseX      = (e.clientX - hwidth)  * 10;
    mouseY      = (e.clientY - hheight) * 10;
    const delta = Math.abs(mouseX) + Math.abs(mouseY);
    dist        = zeroClamp((delta * delta / config.explode) - config.offset);
};

const render = () => {
    let len    = group.children.length;
    for (var i = 0; i < len; i++) { group.children[i].ray(dist); }
    camera.position.x += ( mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    effect.render(scene, camera);
};

const animate = () => (requestAnimationFrame(animate), render());

module.exports = { init, animate };