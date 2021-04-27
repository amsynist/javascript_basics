// operators - arithematic,string,comparision,assignment etc...

console.log(2 - 1) //subtract
console.log(2 * 2) //multi
console.log(2 / 2) //div
console.log(2 % 2) //mod

var num = 15 - 10
console.log("diff :" + num)
num++ //increment the var
console.log("diff :" + num)
num-- //deccrement the var
console.log("diff :" + num)

//assignment-operators
var s = 15
s -= 8 // s = s-8
console.log(s)
s += 8 // s = s+8 
console.log(s)

// //comparision-operators ==,===,>=,<=,>,<

// if (condition) {
// if condtion true executes this block
// } 
// else {
// if condtion is not true executes this block
// }
var a = 2
var b = 2
if (a == b) { // == if a and b are equal values, === if a and b  equal and same data type values
    console.log("Equal")
} else {
    console.log("Not Equal")
}

//Boolean Operators  &&(and), ||(or) , |(not)
var a = 2
var b = 2
if (a == b && a == 3) { // && --> return true if a == b and a value should be 3 or  returns false
    // ||(or) --> return true if any one of the condition satisfied or returns false
    console.log("Equal")
} else {
    console.log("Not Equal")
}

//Ternary Operator '?'

console.log(1 > 2 ? 1 + 2 : 2 + 2) // '?' seperates condition and result,where ':' seperates true[left] and false[right]