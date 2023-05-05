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

// ===============================================================================================
//  PROTOTYPES
// ===============================================================================================

Array.prototype.customMap = function(callbackFn){
    const arr = []
    for(let i=0; i<this.length;i++){
        arr.push(callbackFn(this[i],i))
    }
    return arr;
}

Array.prototype.customFilter = function(callbackFn){
    const arr = []
    for(let i=0; i<this.length;i++){
        if(callbackFn(this[i],i)){
            arr.push(this[i])
        }
    }
    return arr;
}

Array.prototype.customReduce = function(callbackFn,initialValue){
    
    if(this.length===0) return []

    let accumulator = initialValue ? initialValue : this[0]

    for(let i=0; i<this.length;i++){
        accumulator = callbackFn(accumulator,this[i],i)
    }
    return accumulator;
}

Array.prototype.customFlat = function(depth=1){
    const array = this
    function flat(arr, d){
        return arr.customReduce((acc,item)=>{
            if(Array.isArray(item) && d){
                acc.push(...flat(item, d-1))
            }else{
                acc.push(item)
            }

            return acc;
        },[])
    }
    return flat(array,depth)
}

// console.log([1, 2, 3, [4,[5,[6,[7]]]]].customFlat(1))

Function.prototype.customCall = function(context, ...args){
   // context is obj
   // this is a fun
   context.callbackFn = this
   return context.callbackFn(...args)
}

Function.prototype.customApply = function(context, args){
   // context is obj
   // this is a fun
   context.callbackFn = this
   return context.callbackFn(args)
}

Function.prototype.customBind = function(context, ...args){
   // context is obj
   // this is a fun
   // return a copy of that function
   context.callbackFn = this
    return function(...otherArgs){
        return context.callbackFn(...args,...otherArgs)
    }
}



