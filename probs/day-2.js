// ======================================================================================================
// =======================================================================================================

/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/
var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

const findPath = (obj, keys) => {
  const keysArr = keys.split(".");
  return keysArr.reduce((acc, key) => {
    if (acc === undefined || acc[key] === undefined) return undefined;
    acc = acc[key];
    return acc;
  }, obj);
};

// console.log(findPath(obj, 'a.b.c')); // 12
// console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
// console.log(findPath(obj, 'a.b.d')); // undefined
// console.log(findPath(obj, 'a.c')); // undefined
// console.log(findPath(obj, 'a.b.c.d')); // undefined
// console.log(findPath(obj, 'a.b.c.d.e')); // undefined
// console.log(findPath(obj, 'a.b.j')); //false
// console.log(findPath(obj, 'a.b.j.k')); //undefined
// console.log(findPath(obj, 'a.k')); //null

// =======================================================================================================
// =======================================================================================================

// args can be array, single value or multiple values
function mul(...args) {
  if (!args || !args.length) return 0;

  if (args.length === 3) {
    return args[0] * args[1] * args[2];
  }

  if (Array.isArray(args[0])) {
    return args[0].reduce((acc, item) => acc * item, 1);
  } else {
    return mul.bind(this, ...args);
  }
}

// console.log(mul(1)(2)(4))
// console.log(mul([2,3,4]))
// console.log(mul(2,3,4))

// =======================================================================================================
// =======================================================================================================

function multiply(a) {
  return function (b) {
    return b ? multiply(a * b) : a;
  };
}

// console.log(multiply(2)(3)(4)(5)(10)());

// =======================================================================================================
// =======================================================================================================

//Flat the array based on the depth

let arr = [[1, 2, 3], [4, 5, [6, 7, 8, [1, 2, 3], 9]], [10, 11, 12], 13, 14];

function flattenArray(arr, depth = 1) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item) && depth) {
      acc.push(...flattenArray(item, depth - 1));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

// console.log(flattenArray(arr,5))

// =======================================================================================================
// =======================================================================================================

// Implement cal(2).add(3).add(1).sub(3).mul(2).val()

function cal(a) {
  let result = a;
  return {
    add: function (val) {
      result = result + val;
      return this;
    },
    sub: function (val) {
      result = result - val;
      return this;
    },
    mul: function (val) {
      result = result * val;
      return this;
    },
    div: function (val) {
      result = result / val;
      return this;
    },
    val: function () {
      return result;
    },
  };
}

// console.log(cal(2).add(3).add(1).sub(1).mul(2).val())

// =======================================================================================================
// =======================================================================================================

// Implement a pipe() function, which chains multiple functions together to create a new function.
const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;



function pipe(fnsArr){
    return function(x){
       return fnsArr.reduce((acc, fun)=>fun.call(this, acc),x)
    }
}

const twice = pipe([times(2)]); // equivalent to (x) => x * 2
const increment = pipe([plus(1)]); // equivalent to (x) => x + 1
const multiplyAndAdd = pipe([times(2), plus(3)]); // equivalent to (x) => x * 2 + 3
const subtractAndDivide = pipe([subtract(3), divide(4)]); // equivalent to (x) => (x - 3) / 4
const multiplySubtractAndDivide = pipe([times(2), subtract(2), divide(4)]); // // (x * 2 - 2) / 4

// console.log(twice(3)); // output: 6
// console.log(increment(3)); // output: 4
// console.log(multiplyAndAdd(3)); // output: 9
// console.log(subtractAndDivide(3)); // output: 0
// console.log(multiplySubtractAndDivide(5)); // output: 2

// =======================================================================================================
// =======================================================================================================

