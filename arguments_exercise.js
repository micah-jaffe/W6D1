function sum() {
  const array = Array.from(arguments);
  return array.reduce((acc, el) => acc += el);
}

function sum2(...args) {
  return args.reduce((acc, el) => acc += el);
}

Function.prototype.myBind = function(ctx, ...args1) {
  return (...args2) => {
    this.apply(ctx, args1.concat(args2));
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


const newSum = curriedSum(4);
console.log(newSum(5)(30)(20)(1)); // => 56