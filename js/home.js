var camera, scene, renderer;
var square;
var objects = [];

var mouseX = 0;
var mouseY = 0;
var lastMouseX = 0; 
var lastMouseY = 0;
var mouseDeltaX, mouseDeltaY;
var mouseSpeed = 0;
var time = 0;

init();
animate();

function calculateSpeed() {
	mouseDeltaX = mouseX - lastMouseX;
	mouseDeltaY = mouseY - lastMouseY;

	var distance = Math.sqrt(mouseDeltaX ** 2 + mouseDeltaY **2);

	var now = Date.now();
	var delta = distance / (now - time);

	mouseSpeed = (delta < 0.8) ? delta : 0.8; 
	time = now;
	lastMouseX = mouseX;
	lastMouseY = mouseY;
}

function init() {
	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 500);
	camera.position.z = 200;

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x2973f6);

	var plane_sq = new THREE.PlaneGeometry(800, 800, 8, 8);
	var texture_sq = new THREE.TextureLoader().load('img/1.png');
	var s_met = new THREE.MeshBasicMaterial( { map: texture_sq, transparent: true, color: 0xffffff} );


	var y_pos_name = 225;
	var x_pos = -300;

	for (i = 0; i < 4; i++) {
		square = new THREE.Mesh(plane_sq, s_met);
		scene.add(square);
		objects.push(square);
		square.position.x = x_pos + Math.random(20);
		square.position.y = Math.random() * (400) - 200;
		square.position.z = -10;

		x_pos += 150;
	}

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth , window.innerHeight );

	var selection = document.getElementById("splash");
	selection.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );
}

window.addEventListener('mousemove', function (e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
});

window.onload = function() {
	setInterval(calculateSpeed, 200);
};

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

var offset = 0;
var counter = 0;

function animate() {
	requestAnimationFrame(animate);

	// if (counter % 30 == 0) {
		for (var i = 0; i < objects.length; i++) {
			var square = objects[i]
			square.position.z += Math.random() * 8 - 4;
			// square.position.x += Math.random() * 2 - 1;
		}
	// }

	var center = new THREE.Vector2(0, 0);  
	offset += 0.01 + (0.4 * (mouseSpeed));
	for (var i = 0; i < square.geometry.vertices.length; i++) {
	    var vert = square.geometry.vertices[i];
	    var dist = new THREE.Vector2(vert.x, vert.y).sub(center);
	    vert.z = Math.sin(dist.length()/2 + offset) * 100;
	}
	square.geometry.verticesNeedUpdate = true;
	renderer.render(scene, camera);   

	counter += 1; 
}