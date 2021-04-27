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


//switch statement syntax [conditional]

var value = 1
switch (value) { // data of  value variable is passed to switch statement
    case 1:
        document.write("case 1") //if data matched with case 1 data  ,this block will executes
        break; // if the data matched with case 1 it will break and come out of switch statement
    case 2:
        document.write("case 2") //if data matched with case 2 data  ,this block will executes
        break;
    default:
        document.write("default") //if none of the data matched with any cases data  ,default block will executes
}

//loops

var subs = ["maths", "english", "social"] // assigning array of subjects
var marks = [] //decalring a empty array
var num1 //initializing a variable
for (j = 0; j < subs.length; j++) { // for condition --> iterates from 0 and increments until array completes i.e, 0>1>2 where subs.length is 2
    num1 = parseFloat(prompt("enter" + subs[j]))
    marks[j] = num1 //assigns entered marks to empty array 
}
for (m in marks) { // iterates over each index of array i.e, marks[0],marks[1] ...
    console.log(marks[m]) // shows entered marks 
}