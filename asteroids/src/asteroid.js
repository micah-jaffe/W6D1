const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');

function Asteroid(options) {
  const COLOR = 'gray';
  const RADIUS = 20;
  
  MovingObject.call(this, {
    pos: options.pos, 
    vel: Util.randomVec, 
    radius: RADIUS, 
    color: COLOR
  });
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;