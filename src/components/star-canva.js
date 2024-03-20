import * as THREE from 'three';

var renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#star-background')
});

// Créer la scène
var scene = new THREE.Scene();

// Créer la géométrie de la sphère
var geometry = new THREE.SphereGeometry(1, 32, 32);

// Créer le matériau de la sphère
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

// Créer la sphère
var sphere = new THREE.Mesh(geometry, material);

// Ajouter la sphère à la scène
scene.add(sphere);

// Rendre la scène
renderer.render(scene, camera);