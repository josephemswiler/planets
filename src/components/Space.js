import React, { Component } from 'react'
import * as THREE from 'three'
import Planets from './Planets'
import NewPlanet from './NewPlanet'
// import mercuryImage from './assets/images/mercury.jpg'
// import posed from 'react-pose'
// import { easing, tween } from 'popmotion'
// import TWEEN from '@tweenjs/tween.js'
// import { Easing, Tween, autoPlay } from 'es6-tween'

export default class Space extends Component {
  constructor (props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
    this.state = {
      position: {
        x: 0,
        y: 0,
        z: 80
      }
    }
  }

  componentDidMount () {
    const width = window.innerWidth
    const height = window.innerHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const cube = new THREE.Mesh(
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
    // const cube = NewPlanet
    // cube.rotation = 0

    camera.position.z = this.state.position.z

    scene.add(cube)
    renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    const light = new THREE.DirectionalLight(0x333333, 1)
    light.position.set(5, 3, 5)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0xffffff))

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    // this.material = material
    this.cube = cube

    this.mount.appendChild(this.renderer.domElement)
    this.start()
    setTimeout(() => {
      this.setState({position: {
        x: 0,
        y: 0,
        z: 15
      }})
      camera.position.z = this.state.position.z
    }, 1000)
  }

  componentDidUpdate () {

  }

  componentWillUnmount () {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start () {
    if (!this.frameId) {
      this.frameId = window.requestAnimationFrame(this.animate)
    }
  }

  stop () {
    window.cancelAnimationFrame(this.frameId)
  }

  animate () {
    this.cube.rotation.x += 0
    this.cube.rotation.y += 0.0001
    // TWEEN.update()
    // this.camera.updateProjectionMatrix()
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene () {
    this.renderer.render(this.scene, this.camera)
  }

  render () {
    return (
      <div ref={(mount) => { this.mount = mount }} />
    )
  }
}
