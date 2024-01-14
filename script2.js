// program1 

// class Student {
//     constructor(fn,ln,rollNo){
//         this.firstName = fn 
//         this.lastName  = ln 
//         this.rollNo = rollNo
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher {
//     constructor(fn,ln,rollNo,sl){
//         this.firstName = fn 
//         this.lastName  = ln 
//         this.rollNo = rollNo
//         this.salary = sl
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let amolT = new Teacher("amolT","Raoo",7,12)
// console.log(amolT.firstName)
// console.log(amolT.lastName)
// console.log(amolT.rollNo)
// console.log(amolT.salary)

// amolT.salary()
// amolT.displayName()

// let amol = new Student("chinmay","deshpande",7)
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.rollNo)
// amol.displayName()


// program 2
// class Student {
//     constructor(fn,ln,adharNo){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.adharNo = adharNo
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Teacher extends Student{
//     salary = 10000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let chinmayT = new Teacher("chinmayT","deshpandeT",123)
// console.log(chinmayT.firstName)
// console.log(chinmayT.lastName)
// console.log(chinmayT.adharNo)
// console.log(chinmayT.salary)
// chinmayT.displayName()
// chinmayT.displaySalary()

// program 3

// class StudentB{

//     constructor(fn,ln,adharNo){
//         this.firstName = fn
//         this.lastName = ln 
//         this.adharNo = adharNo
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// class TeacherB extends StudentB{
//     constructor(fn,ln,adharNo,salary){
//         super(fn,ln,adharNo)
//         this.salary = salary
//     }

//     displaySalary(){
//         console.log(this.salary)
//     }

// }
// let amolB = new TeacherB("amolB","raoB",34,543534)
// console.log(amolB.firstName)
// console.log(amolB.lastName)
// console.log(amolB.adharNo)
// console.log(amolB.salary)
// amolB.displayName()
// amolB.displaySalary()


// program 4
// class GrandFather{
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln 
//     }
//     displayGName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Father extends GrandFather {
//     constructor(fn,ln,ffn){
//         super(fn,ln)
//         this.fname = ffn
//     }
//     displayFName(){
//         console.log(this.fname + this.lastName)
//     }
// }
// class Son extends Father {
//     constructor(fn,ln,ffn,ssn){
//         super(fn,ln,ffn)
//         this.sname = ssn
//     }
//     displaySName(){
//         console.log(this.sname  + this.lastName)
//     }
// }
// let  amolS = new Son("manohar","deshpande","shirish","chinmay")
// console.log(amolS.firstName)
// console.log(amolS.lastName)
// console.log(amolS.fname)
// console.log(amolS.sname)

// amolS.displayFName()
// amolS.displaySName()
// amolS.displayGName()

// program 5


class Mother {
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }

    displayMname() {
        console.log(this.firstName + this.lastName)
    }

}

class Son extends Mother {
    constructor(fn, ln, sn) {
        super(fn, ln)
        this.sname = sn
    }

    displaySName(){
        console.log(this.sname + this.lastName)
    }

}

class Daughter extends Mother {
    constructor(fn, ln, dn) {
        super(fn, ln)
        this.dname = dn
    }

    displayDName(){
        console.log(this.dname + this.lastName)
    }

}


let chinmayS = new Son("kanchan","deshpande","chinmay")
let gauriS = new Daughter("kanchan","deshpande","gauri")

console.log(chinmayS.firstName)
console.log(chinmayS.lastName)
console.log(chinmayS.sname)

chinmayS.displayMname()
chinmayS.displaySName()

console.log(gauriS.firstName)
console.log(gauriS.lastName)
console.log(gauriS.dname)

chinmayS.displayMname()
chinmayS.displayDName()































