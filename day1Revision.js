class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined
}

let amol  = new Person()
let amol1  = new Person()
let amol2  = new Person()
let amol3  = new Person()


class PersonB {
    constructor(fn,ln,ag,rn){
        this.firstName = fn 
        this.lastName  = ln 
        this.age = ag 
        this.rollNo = rn
    }
}

let amol4 = new PersonB("amol4","rao4",12,44)
let amol5 = new PersonB("amol5","rao5",56,7)


class PersonC {
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setRollNo(rn){
        this.rollNo = rn
    }
    setAge(ag){
        this.age = ag
    }

}

let amol6 = new PersonC()
amol6.setFirstName("chinmay")
amol6.setLastName("deshpande")
amol6.setRollNo(34)
amol6.setAge(34)
console.log(amol6)


// using set and get keyword
let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    firstName:"tanmay"
}
console.log(info)
info.firstName = "sarika"
console.log(info)


// class PersonCD {

//     set firstName(fn){
//         this.first_name =  fn
//     }
//     set lastName(ln){
//         this.last_name =  ln
//     }
//     set sage(ag){
//         this.age =  ag
//     }
//     set srollNo(rn){
//         this.roll =  rn
//     }

//     get firstName(){
//         return this.first_name 
//     }
//     get lastName(){
//         return this.last_name 
//     }
//     get sage(){
//         return this.age 
//     }
//     get srollNo(){
//        return  this.roll 
//     }

// }

// let amolF = new PersonCD()
// amolF.first_name = "chinmay"
// amolF.lastName = "deshpande"
// amolF.sage = 33
// amolF.srollNo = 44
// console.log(amolF)

// console.log(amolF.firstName)
// console.log(amolF.lastName)
// console.log(amolF.sage)
// console.log(amolF.srollNo)

// program 4

class Bank {
    constructor(fn,bal){
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
        amt < this.balance ? this.balance -= amt:"insufficient balance"
        this.transaction.push(-amt)
        return this.balance

    }

    //[34,5,6,22,-56,-66,77,88]
    
    totalDeposit(){
        let td = this.transaction.filter(function(el){
            return el > 0
        }).reduce(function(acc,el){
            return  acc + el;
        },0)

        return td
    }

    totalWithdrawl(){
        let tw = this.transaction.filter(function(el){
            return el < 0
        }).reduce(function(acc,el){
            return  acc + el;
        },0)

        return tw
    }

    lastThreeTransactions(){
        return this.transaction.slice(-3)
    }

}

let chinmay = new Bank("chinmay deshpande",10000000)
chinmay.deposit(1000)
chinmay.deposit(100)
chinmay.deposit(10)
chinmay.deposit(1)
chinmay.deposit(2)

chinmay.withdrawl(1000)
chinmay.withdrawl(100)
chinmay.withdrawl(10)
chinmay.withdrawl(1)
chinmay.withdrawl(2)

console.log(chinmay.totalDeposit())
console.log(chinmay.totalWithdrawl())
console.log(chinmay.lastThreeTransactions())












