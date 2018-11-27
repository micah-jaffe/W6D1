Function.prototype.inherits = function(parent) {
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject () {}
MovingObject.prototype.move = function(dx, dy) {
  return `you moved ${dx} horizontally and ${dy} vertically`;
};

function Ship () {}
Ship.inherits(MovingObject);
Ship.prototype.sail = function() {
  return 'I\'m sailing!';
};

function Asteroid () {}
Asteroid.inherits(MovingObject);


s = new Ship();
console.log(s.move(1, 3));
console.log(s.sail());


a = new Asteroid();
console.log(a.move(2, 5));
console.log(a.sail());