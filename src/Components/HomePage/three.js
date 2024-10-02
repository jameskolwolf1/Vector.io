import * as THREE from "three";


export function modelGlobal(holder){

  
const x = window.innerWidth;
const y = window.innerHeight;
const render = new THREE.WebGLRenderer({ antialias: true });

render.setSize(x, y);
holder.appendChild(render.domElement);
const fov = 85;
const aspect = x / y;
const near = 0.5;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2;
const scene = new THREE.Scene();

const geo = new THREE.DodecahedronGeometry(.4, 1);
const mat = new THREE.MeshStandardMaterial({
  color: 0x000000,
  flatShading: true
});

const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

mesh.getWorldScale.x = 300;

const wireMat = new THREE.MeshBasicMaterial({
  color:0xffffff,
  wireframe: true
})

const wireMesh = new THREE.Mesh(geo, wireMat)
mesh.add(wireMesh);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000);
scene.add(hemiLight);


function animate( t = 0){

  requestAnimationFrame(animate);
  mesh.rotation.y = t * 0.0002;
  mesh.rotation.x = t * 0.0004;
  render.render(scene, camera);
}

animate();

}

