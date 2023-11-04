
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';


console.log("line 6 in details.js");

document.addEventListener("DOMContentLoaded", function(){
   console.log("content loaded")
   let where1 = document.getElementById("where1");
   let map1 = document.getElementById("map1");
   let where2 = document.getElementById("where2");
   let map2 = document.getElementById("map2");
   let where3 = document.getElementById("where3");
   let map3 = document.getElementById("map3");
   let where4 = document.getElementById("where4");
   let map4 = document.getElementById("map4");
   let close1 = document.getElementById("close1");
   let close2 = document.getElementById("close2");
   let close3 = document.getElementById("close3");
   let close4 = document.getElementById("close4");

   where1.addEventListener("click", function(){
      console.log("where clicked");
      map1.style.display ="flex";
   });

   where2.addEventListener("click", function(){
      map2.style.display = "flex";
   });

   where3.addEventListener("click", function(){
      map3.style.display = "flex";
   });

   where4.addEventListener("click", function(){
      map4.style.display="flex";
   });
   close1.addEventListener("click", function (){
      map1.style.display = "none";
   });

   close2.addEventListener("click", function (){
      map2.style.display ="none";
   });

   close3.addEventListener("click", function (){
      map3.style.display ="none";
   });

   close4.addEventListener("click", function(){
      map4.style.display = "none";
   });
});

function loadItem(path, s1, s2, s3, xPos, yPos, zPos, xRot, yRot, zRot, boxName, background){
   let scene = new THREE.Scene(); 

// Load Camera Perspektive
   let camera = new THREE.PerspectiveCamera( 25, 1, 1, 20000 );
   camera.position.set( 1, 1, 20 );
   
// Load a Renderer
   let renderer = new THREE.WebGLRenderer({ alpha: false });
   renderer.setClearColor(background);
   renderer.setPixelRatio( window.devicePixelRatio );
   renderer.setSize(400, 400);
   let box = document.getElementById(boxName);
   console.log("BOX: " + box);
   box.appendChild(renderer.domElement);

   let controls = new OrbitControls(camera, renderer.domElement);
   console.log("CONTROLS: " + controls);
      
// Load the Orbitcontroller
//var controls = new THREE.OrbitControls( camera, renderer.domElement ); 
           
// Load Light
var ambientLight = new THREE.AmbientLight( 0xfffff0 );
scene.add( ambientLight );
           
var directionalLight = new THREE.DirectionalLight( 0xffffff );
directionalLight.position.set( 0, 1, 1 ).normalize();
scene.add( directionalLight );
    var loadTree = new GLTFLoader();
    loadTree.load(`${path}`, function (gltf){
    var object = gltf.scene;
    object.scale.set(s1, s2, s3);
    object.position.x = xPos;
    object.position.y = yPos;
    object.position.z = zPos;
    object.rotateX(xRot);
    object.rotateY(yRot);
    object.rotateZ(zRot);
    scene.add(object);
   
    function animate() {
      //console.log("in animate");
      requestAnimationFrame( animate );
      controls.update();
      renderer.render(scene, camera);
   }
    animate();

});
   
}

loadItem('/models/pineTree/scene.gltf', .6, .6, .6, -1, -3, 0, 0,0,0, "model1", 0xFFFFFF);
loadItem('/models/aspen/scene.gltf', .4, .4, .4, 0, -5, 0, 0, 180, 0, "model2", 0xFFFFFF);
loadItem('/models/columbine.gltf', 20, 20, 20, 0, -10, 0, 0, 0, 0, "model3", 0xFFFFFF);
loadItem('/models/grass/scene.gltf', 5,5,5,0,-5,0, 0, 0, 0, "model4", 0xFFFFFF);











