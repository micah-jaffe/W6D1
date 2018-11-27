const Util = {
  inherits: function inherits(childClass, parentClass) {
    childClass.prototype = Object.create(parentClass.prototype);
  }
};

module.exports = Util;