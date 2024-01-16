
// object literal 
let chinmay = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 12,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.age)
chinmay.display()



let amol = {
    firstName: "amol",
    lastName: "rao",
    age: 33,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
amol.display()

// function constructor 
function Person(fn, ln, age) {
    this.firstName = fn
    this.lastName = ln
    this.age = age
    this.display = function () {
        console.log(this.firstName + this.lastName)
    }
}

let chinmayA = new Person("chinmay", "deshpande", 34)
chinmayA.display()
console.log(chinmayA)

function Vehicle(cl, type) {
    this.color = cl
    this.type = type
}
let audi = new Vehicle("blue", "sedane")

// Es6 class
class PersonD {
    constructor(fn, ln, age) {
        this.firstName = fn
        this.lastName = ln
        this.age = age

    }
    display() {
        console.log(this.firstName + this.lastName)
    }
}

let amolC = new PersonD("amol", "rao", 45)
console.log(amolC.firstName)
console.log(amolC.lastName)
console.log(amolC.age)
amolC.display()


class Bank {
    constructor(fn, bal) {
        this.fullName = fn
        this.balance = bal
        this.transaction = []
    }

    deposit(amt){
        this.balance = this.balance + amt
        this.transaction.push(amt)
        return this.balance
    }

    withdrawl(amt){
        if(amt < this.balance){
            this.balance = this.balance - amt
            this.transaction.push(-amt)
        }
        else{
            console.log("Insuffcient fund")
        }
        return this.balance
    }

    lastThreeTransactions(){
        return this.transaction.slice(-3)
    }
}

let chinmays = new Bank("chinmay deshpande",1000000000)
console.log(chinmays.withdrawl(19000))
chinmays.withdrawl(19000)
chinmays.withdrawl(190)
chinmays.deposit(190)
console.log(chinmays.lastThreeTransactions())










// Object.create 