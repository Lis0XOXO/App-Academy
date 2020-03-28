const Util = require('./util.js')
const MovingObject = require('./moving_object.js')

const DEFAULTS = { 
  COLOR: 'gray', 
  RADIUS: 20, 
  SPEED: 5
}; 

function Asteroid(options) { 
  MovingObject.call(this, { 
    pos: options['pos'], 
    vel: Util.randomVec(DEFAULTS['SPEED']), 
    color: DEFAULTS['COLOR'], 
    radius: DEFAULTS['RADIUS']
  })
}

Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid; 