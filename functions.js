// 
//  -->functions are set of statements which are defined somewhere in scope 
//           and invoked by calling them by thier functionname ,it should have a return value <-

//    -->funtion syntax 
//                      funtion nameofthefunction
//                      (parameters / arguments) {
//                         --> funtion body --<
//                       }

// Types --> Named functions,Self invoking functions,Anonymous functions and constructors

//Named functions
function adder(a, b) { //defining a function and 'adder' is the name of  function,a and b are parameters
    result = a + b //statemets and function body ,adds a and b parameters which are passed
    return result // return result of above statements
}
document.write(adder(1, 8)) //adder(1,9)--> is calling the defined function by passing 1 and 8 as parameters of a and b


//Anonymous functions (there is no name of the function )
var now = function (z, y) { // declaring a variable with a anonymous function with no name
    return z + y
}
document.write(now(4, 22)) // calling the variable by passing actual parameters in brackets --> now -->now(4,22)

//another anonymous function type
setTimeout(function () {
    console.log("called anonymous func after 3000ms")
}, 3000) //here 3000 is delay in ms which says to call the function after certain delay

//constructors
// are called when an object is created using 'new' keyword
var cons = new Function("a", "b", "console.log('constructors');return a+b;");
// Function("parameters","parameters","function body should be last parameter")
console.log(cons(1, 3))

//selfinvoking functions --> anonymous functions which are invoked right after they defined

(function () { // defining function  by opening bracket (
    alert("self invoked") //  function body  inside ' { } '
}()) // invoking the function by appending () and closing bracket )