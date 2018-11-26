function sum() {
  const array = Array.from(arguments);
  return array.reduce((acc, el) => acc += el);
}

function sum2(...args) {
  return args.reduce((acc, el) => acc += el);
}

Function.prototype.myBind = function(ctxObj, ...args1) {
  return (...args2) => {
    this.apply(ctxObj, args1.concat(args2));
  };
};

function curriedSum(numArgs) {
  const numbers = [];
  return _curriedSum;
  
  function _curriedSum(n) {
    numbers.push(n);
    
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, el) => acc += el);
    } else {
      return _curriedSum;
    }    
  }
}

Function.prototype.curry = function(numArgs) {
  const args = [];
  const that = this;
  
  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply(null, args);
    } else {
      return _curry;
    }
  }
  
  return _curry;
};

Function.prototype.currySpread = function(numArgs) {
  const allArgs = [];
  const that = this;
  return _curry;
  
  function _curry(...args) {
    allArgs.push(...args);
    if (allArgs.length === numArgs) {
      return that.apply(null, allArgs);
    } else {
      return _curry;
    }
  }
  
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}

console.log(sumThree.curry(3)(1)(2)(3));
console.log(multiplyThree.currySpread(3)(1, 3)(3));

