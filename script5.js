// Object literal 


let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    display:function(){
        console.log(this.firstName+ this.lastName)
    }
}

let amol = {
    firstName:"amol",
    lastName:"rao",
    display:function(){
        console.log(this.firstName+ this.lastName)
    }
}

// function  constructor 

function Person(fn,ln){
    this.firstName = fn 
    this.lastName = ln 
    // this.display = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}
let sarika = new Person("sarika","pansare")
let poorva = new Person("poorva","vyas")

console.log(sarika)
console.log(poorva)

// Everything in js is object 
// Object__proto__ == Parent.Proptype

console.log(sarika.__proto__ == Person.prototype)
Person.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.lanaguage ="marathi"

sarika.display()
poorva.display()
console.log(poorva.lanaguage)

console.log(poorva instanceof Person)
console.log(poorva.hasOwnProperty('firstName'))
console.log(poorva.hasOwnProperty('language'))

// let names = ["sarika","poorva"]
// console.log(Array.prototype == names.__proto__)
// console.log(names)

// Array.prototype.hello = function(){
//     console.log("hello chinmay")
// }


// Es6 class 



// Object.create