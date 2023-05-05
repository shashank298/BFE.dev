// Implement currying

const join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }

 function curry(fn) {
    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this, args)
        }else{
            return curried.bind(this, ...args)
        }
    }
 }

 const curriedJoin = curry(join)
//  console.log(curriedJoin(1, 2, 3))
//  console.log(curriedJoin(1)(2, 3))
//  console.log(curriedJoin(1, 2)(3))



// same prob with placeholders
function placeholderCurry(fn){
    const resultStack = Array(fn.length).fill("-")
    let start = 0
    return function curried(...args){
        start = 0;
        args.forEach((arg)=>{
            while(resultStack[start]!=="-" && start<resultStack.length){
                start++;
            }
            if(resultStack[start] === "-"){
                resultStack[start] = arg
                start++;
            }
        })
         //If result stack doesn't contain placeholder
         if(resultStack.find((result) => result=== "-") === undefined){
            return fn.apply(this, resultStack)
        }else{
            return curried.bind(this, ...[])
        }
    }
}

placeholderCurry.placeholder = "-"

const curriedPlaceholderJoin = placeholderCurry(join)
const _ = placeholderCurry.placeholder

// console.log(curriedPlaceholderJoin(1, 2, 3))
// console.log(curriedPlaceholderJoin(_, 2)(1, 3))
// console.log(curriedPlaceholderJoin("-", "-", "-")(1)("-", 3)(2))

