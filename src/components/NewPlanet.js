import React, { Component } from 'react'
import * as THREE from 'three'
import Planets from './Planets'

let NewPlanet = () => {
  let planet = new THREE.Mesh(
    new THREE.SphereGeometry(
      3,
      50,
      50,
      0,
      Math.PI * 2,
      0,
      Math.PI * 2
    ),
    new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load(Planets.earth.images[0]),
      bumpMap: new THREE.TextureLoader().load(Planets.earth.images[1]),
      bumpScale: 0.1,
      specularMap: new THREE.TextureLoader().load(Planets.earth.images[2]),
      specular: new THREE.Color('grey')
    })
  )
  return planet
}

export default NewPlanet
