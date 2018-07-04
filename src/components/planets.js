import mercuryImage from './assets/images/mercury.jpg'
import venusImage from './assets/images/venus.jpg'
import earthImage from './assets/images/earth.jpg'
import earthBumpImage from './assets/images/earth-bump.jpg'
import earthWaterImage from './assets/images/earth-water.jpg'
import earthCloudsImage from './assets/images/earth-clouds.png'
import moonImage from './assets/images/moon.jpg'
import marsImage from './assets/images/mars.jpg'
import jupiterImage from './assets/images/jupiter.jpg'
import saturnImage from './assets/images/saturn.jpg'
import saturnRingImage from './assets/images/saturn-ring.png'
import uranusImage from './assets/images/uranus.jpg'
import neptuneImage from './assets/images/neptune.jpg'
import starsImage from './assets/images/stars.png'

let planets = {
  mercury: {
    name: 'mercury',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: [mercuryImage],
    position: {
      x: 3,
      y: 2.5,
      z: 32
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  },
  venus: {
    name: 'venus',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: [venusImage],
    position: {
      x: -0.75,
      y: -3,
      z: 20
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  },
  earth: {
    name: 'earth',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: [
      earthImage,
      earthBumpImage,
      earthWaterImage
    ],
    position: {
      x: 0,
      y: 0,
      z: 9
    },
    rotation: {
      x: 0,
      y: 0.001
    }
  },
  earthClouds: {
    name: 'earth-clouds',
    type: 'clouds',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: [
      earthCloudsImage,
    ],
    position: {
      x: 0,
      y: 0,
      z: 9
    },
    rotation: {
      x: 0,
      y: 0.001
    }
  },
  moon: {
    name: 'moon',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: [
      moonImage
    ],
    position: {
      x: -0.5,
      y: 2.25,
      z: 3
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  },
  mars: {
    name: 'mars',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: [
      marsImage
    ],
    position: {
      x: 10,
      y: 5,
      z: -20
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  },
  jupiter: {
    name: 'jupiter',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: [
      jupiterImage
    ],
    position: {
      x: -0.5,
      y: -5,
      z: -60
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  },
  saturn: {
    name: 'saturn',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: [
      saturnImage
    ],
    position: {
      x: 1,
      y: -15,
      z: -100
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  },
  saturnRing: {
    name: 'saturn-ring',
    type: 'rings',
    mesh: null,
    radiusRatio: 1.5,
    segments: 2,
    images: [
      saturnRingImage
    ],
    position: {
      x: 1,
      y: -15,
      z: -100
    },
    rotation: {
      x: 0,
      y: 0
    }
  },
  uranus: {
    name: 'uranus',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: [
      uranusImage
    ],
    position: {
      x: -2.25,
      y: 4,
      z: -120
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  },
  neptune: {
    name: 'neptune',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: [
      neptuneImage
    ],
    position: {
      x: -10,
      y: -10,
      z: -140
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  },
  stars: {
    name: 'stars',
    type: 'stars',
    mesh: null,
    radiusRatio: 1,
    segments: 64,
    images: [
      starsImage
    ],
    position: {
      x: 0,
      y: 0,
      z: -100
    },
    rotation: {
      x: 0,
      y: 0
    }
  }
}

export default planets