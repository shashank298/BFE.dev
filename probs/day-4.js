// Modular pattern, It's a design pattern which helps us to achieve data abstraction. we can make properties & methods as private && expose only public function

// https://plainenglish.io/blog/data-hiding-with-javascript-module-pattern-62b71520bddd

var module = (
    function(){
        var name= "Mayank";
        var age = 30;
        var designation = "Developer";
        function privateMethod(){
            console.log("private")
        }

        return {
            name: name,
            publicMethod:function(){
                console.log(name)
            }
        }
    }
)()

// module.publicMethod()

// =======================================================================================================
// =======================================================================================================

// Create a function to run only once - once polyfill

function once(func){
    let count = 1;
    return function(...args){
        if(count && func){
            func.apply(this, args)
            count = 0
        }
    }
}

const hello = once((...args)=>console.log("Called only once",...args))

// hello(12)
// hello(14)
// hello(16)
// hello(14)

// =======================================================================================================
// =======================================================================================================

// Implement memoization in JS

function memoize(func){
    const result={}

    return function(...args){
        const key = JSON.stringify(args)
        if(!result[key]){
            result[key] = func.apply(this, args)
        }
        return result[key];
    }
}

function heavyCalc(a,b){
    for(let i=0;i<7789723239;i++){}
    return a*b;
}

const memoizedHeavyCalc = memoize(heavyCalc)
// console.time("a")
// memoizedHeavyCalc(12321,21323)
// console.timeEnd("a")

// console.time("b")
// memoizedHeavyCalc(12321,21323)
// console.timeEnd("b")

// =======================================================================================================
// =======================================================================================================

// convert a normal function into curried function

// add(1,2,3) to add(1)(2)(3)

const sum = (a,b,c) => a+b+c

function curry(func){
    return function curried(...args){
        if(args.length >= func.length){
            return func.apply(this, args)
        }else{
           return curried.bind(this, ...args)
        }
    }
}

const curriedSum = curry(sum)
// console.log(curriedSum(1)(2)(3))
