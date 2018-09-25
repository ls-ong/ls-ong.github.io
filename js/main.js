var camera, scene, renderer;
var hcd, name, first;
var objects = [];
var texts = [];

var mouseX = null;
var mouseY = null;
var lastMouseX = 0; 
var lastMouseY = 0;
var mouseDeltaX, mouseDeltaY;
var mouseSpeed = 0;
var time = 0;
var offset = 0;
var nameSpeed = 8;
var nameSpeedIncrease = true;

init();
function init() {

	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 500);
	camera.position.z = 200;

	scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );

	var plane_sq = new THREE.PlaneGeometry(200, 200, 8, 8);
	var texture_sq = new THREE.TextureLoader().load('img/green.png');
	texture_sq.anisotropy = renderer.getMaxAnisotropy();
	var s_met = new THREE.MeshBasicMaterial( { map: texture_sq, transparent: true, color: 0xffffff} );

	for (i = 0; i < 2; i++) {
		var name = new THREE.Mesh(plane_sq, s_met);
		// scene.add(name);
		// objects.push(name);
		name.position.x = Math.random() * 500 - 200;
		name.position.y = Math.random() * 300 - 300;
	}

	var texture_sq_small = new THREE.TextureLoader().load('img/a111.png');
	texture_sq_small.anisotropy = renderer.getMaxAnisotropy();
	var s_met_small = new THREE.MeshBasicMaterial( { map: texture_sq_small, transparent: true, color: 0xffffff} );
	var plane_sq_small = new THREE.PlaneGeometry(200, 200, 8, 8);

	var x_pos = -280;

	var top = true;
	for (i = 0; i < 12; i++) {
		var desc = new THREE.Mesh(plane_sq_small, s_met_small);
		desc.material.side = THREE.DoubleSide;

		if (x_pos > 100 & x_pos < 100) {
			x_pos += 20 + Math.random() * 10;
			continue;
		}
		else {
			desc.position.x = x_pos;
			if (top == true) {
				desc.position.y = Math.random() * 30 + 90;
				top = false;
			} else {
				desc.position.y = Math.random() * 120 + -150;
				top = true;
			}
		}
		desc.position.z = Math.random() * 40 - 10;
		desc.rotation.z = Math.PI / -26;
		desc.rotation.x = Math.PI / -12;
		x_pos += 100 + Math.random() * 20;

		scene.add(desc);
		objects.push(desc);
	}

	renderer.setClearColor(0x000000, 0);
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth , window.innerHeight );

	var selection = document.getElementById("pix");
	selection.appendChild(renderer.domElement);

	window.addEventListener('resize', onWindowResize, false);

	animate();
	function animate() {
		requestAnimationFrame(animate);
		var center = new THREE.Vector2(name.position.x - plane_sq.parameters.width / 2, name.position.y - plane_sq.parameters.height / 2);  
		offset += 0.04 + (0.3 * (mouseSpeed));
		for (var j = 0; j < objects.length; j++) {
			for (var i = 0; i < objects[j].geometry.vertices.length; i++) {
			    var vert = objects[j].geometry.vertices[i];
			    var dist = new THREE.Vector2(vert.x, vert.y).sub(center);
			    vert.z = Math.sin(dist.length()/32 + offset) * nameSpeed;
			}
			objects[j].geometry.verticesNeedUpdate = true;
		}
		renderer.render(scene, camera);    
	}
}

window.onload = function(e) {
	setInterval(calculateSpeed, 100);
};

function calculateSpeed() {
	if (mouseX == null) {
		return;
	}
	mouseDeltaX = mouseX - lastMouseX;
	mouseDeltaY = mouseY - lastMouseY;
	var distance = Math.sqrt(mouseDeltaX ** 2 + mouseDeltaY **2);
	var now = Date.now();
	var delta = distance / (now - time);
	mouseSpeed = delta;
	time = now;
	lastMouseX = mouseX;
	lastMouseY = mouseY;
}

window.addEventListener('mousemove', function (e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
});

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

var proj = document.querySelector("#project-section");
var pix = document.querySelector("#pix");
var fired = false;

window.addEventListener("wheel", function (e) {
	if (e.deltaY > 1 && fired == false) {
		setTimeout(function() {
			fired = true;
			pix.style.top = "-110vh";
		}, 100);
	}

	if (document.querySelector("#front-page").getBoundingClientRect().top == 0 && e.deltaY < 0 && fired == true) {
		setTimeout(function() {
			fired = false;
			pix.style.top = "0vh";
		}, 0);
	}
});

