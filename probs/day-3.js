// =======================================================================================================
// =======================================================================================================

// Private variables in constructor function
const Car = function(_color){
    console.log(this)
    this.setColor = function(color){
        _color= color
    }
    this.getColor = function(){
        return _color
    }
}

// let redCard = new Car("red")
// console.log(redCard.getColor())

// =======================================================================================================
// =======================================================================================================

// Implement inheritance using functions & classes

function Animal(legs){
    this.legs = legs
}

Animal.prototype.walk = function(){
    console.log(`walking on ${this.legs} legs`)
}

function Bird(legs){
    Animal.call(this, legs)
}

// Old way of adding prototype
// Bird.prototype = Object.create(Animal.prototype)
// Bird.prototype.constructor = Bird

// new way
Object.setPrototypeOf(Bird.prototype, Animal.prototype)



Bird.prototype.fly = function(){
    console.log("It's flying")
}

let pigeon = new Bird(2)

// pigeon.fly()
// pigeon.walk()
// console.dir(Bird)

class Animal1 {
    constructor(legs){
        this.legs = legs
    }
    walk(){
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird1 extends Animal1{
    constructor(legs){
        super(legs)
    }
    fly(){
        console.log('flying');
    }
}

let bird = new Bird1(2);

// bird.walk();
// bird.fly();

// =======================================================================================================
// =======================================================================================================

// Implement Queue using Array in JS - https://www.javascripttutorial.net/es6/javascript-inheritance/

class Queue extends Array{
    enQueue(val){
        super.push(val)
    }
    deQueue(){
        return super.shift()
    }
    empty(){
        return this.length === 0
    }
}

const queue1 = new Queue()

// queue1.enQueue(1)
// queue1.enQueue(2)
// queue1.enQueue(3)
// queue1.deQueue()
// queue1.enQueue(4)
// console.log(queue1)

// =======================================================================================================
// =======================================================================================================



class Animal2{
    constructor(legs){
        this.legs = legs
    }
    walk(){
        console.log(`walking with ${this.legs} legs`)
    }
}

class Bird2 extends Animal2{
    constructor(legs){
        super(legs)
    }
    fly(){
        console.log("Flying...")
    }
}


const parrot = new Bird2(2)

// parrot.fly()
// parrot.walk()

function Animal3(legs){
    this.legs = legs
}

Animal3.prototype.walk = function(){
    console.log(`walking with ${this.legs} legs`)
}


function Bird3(legs){

    Animal3.call(this,legs)
}

Bird3.prototype.fly=function(){
    console.log("Flying...")
}

Object.setPrototypeOf(Bird3.prototype,Animal3.prototype)

const crow = new Bird3(2)
console.log(crow)
crow.fly()
crow.walk()

