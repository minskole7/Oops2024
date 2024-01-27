
// for and while 


// for(initialization ; conditionCheck ; increment/decrement){
//     // statements
// }

// print 1 to 3 


for (let i = 1; i <= 3; i++) { // 2 // 3 // 4
    console.log(i) // 1 // 2 // 3
}

// print hello three times
for (let i = 1; i <= 3; i++) { // 2 // 3
    //console.log(i)
    console.log('hello') // "hello" // "hello" // "he;;o"
}

// print 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

// print 5 to 1 
for (let i = 5; i >= 1; i--) { // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}

// print table of 3 
for (let i = 2; i <= 20; i = i + 2) { // 4 // 6 -----------22
    console.log(i) // 2 // 4 --------------20
}

// print table of 5 in reverse 
for (let i = 50; i >= 5; i = i - 5) { // 45  // 40 --------- 0
    console.log(i) // 50 // 45 -------------5
}

// for with break 

// for (let i = 1; i <= 5; i++) { // 2 // 3
//     console.log(i) //1 // 2 // 3
//     if (i == 3) { 
//         break
//     }

// }

// for(let i = 5 ; i >= 0  ; i--){ // 4 // 3
//     if(i == 3){
//         break
//     }
//     console.log(i) // 5 // 4
// }

// for(let i = 0 ; i <= 5 ; i++){ // 1 // 2 // 3 // 4 // 5 // 6
//     if(i == 3){
//         continue
//     }
//     console.log(i) /// 0 // 1 // 2 // 4 // 5
// }

// for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
//     if(i == 3){
//         continue
//     }
//     console.log(i) // 5 // 4 // 2 // 1
// }


// while loop

// initialization 
// while(condition){
    //statement
    // increment / decrement
//}

let i1 = 1
while(i1 <= 3){
    console.log(i1) // 1 // 2 // 3
    i1 ++ // 2 // 3 // 4
}

let i2 = 1
while(i2 <= 3){
    console.log("hello")
    i2 = i2 + 1
}


let i3 = 1
while(i3 <= 5){
    console.log(i3)
    i3 = i3 + 1
}


let i4 = 5
while(i4 >= 1){
    console.log(i4)
    i4 --
}

let i5 = 20
while(i5 >= 2){
    console.log(i5)
    i5 = i5 - 2
}

let i6 = 50
while(i6 >= 5){
    console.log(i6)
    i6 = i6 - 5
}

let i7 =1
while(i7 <= 3){
    console.log(i7) // 1 // 2
    if(i7 == 2){
        break
    }
    i7 = i7 + 1 // 2
}









