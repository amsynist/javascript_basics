// object is an entity with properties and where each property has certain method/functionalities

//object creation 
// we can access a property of object by '.' ,ex: person.age,person.name 
//creating object with 'new' keyword 
var person3 = new Object()
person3.name = "zeroned" // assigning attributes/properties to person3 object
person3.age = 29
person3.year = 1978
//accesing individual properties/attributes by '.' 
console.log("age :" + person3.age, "name :" + person3.name, "Year :" + person3.year)

//creating object with set of properties with [] 
var person = {}
person['name'] = "zero" // assigning properties by [] with single quotes 
person['year'] = 1998

console.log("age :" + person.age, "name :" + person.name)

//creating object with set of properties with {}
var person1 = {
    username: "one", //assigning properties by LHS:RHS , where LHS is property name and RHS is property value
    age: 24,
    dob: 1997
}
console.log("age :" + person1.age, "name :" + person1.username, "DOB :" + person1.dob)


// creating an object inside a function 
function create() { //defining fucntion named create
    var person4 = {}
    person4['name'] = "zero"
    person4['age'] = 20
    person4['year'] = 1998
    return person4 //return the created object properties 

}
var pravs = create() //assigning pravs with create() fucntion
alert("age : " + pravs.age + "name : " + pravs.name + "DOB : " + pravs.year)
//accessing the properties by pravs.propertyname,as we assigned create() to pravs variable


//Creating object with object.create() method --> duplicates and object with prototype object

var Eadables = {
    type: "vegetables",
    displaytype: function () {
        alert("This are  " + this.type) // 'this' is keywowrd to refer current object in the fuction 
    }
}
var mango = Object.create(Eadables) // duplicates Eadables with prototype object
mango.type = "fruits" //changes the type of property of prototype object
mango.displaytype() //we can access Eadables method as this is a prototype of Eadables


//Deleting a Object Property

var Tutor = {
    name: "RAD",
    teaches: ["C++", "Python"],
    age: 30
}
//listing all properties before deletion
var properties = " " // initializing a empty var/string
for (props in Tutor) { // for each property in Tutor

    properties += props + "    " //add property to the empty string

}
console.log(properties) //list all properties 

//deleting a property of an object by using 'delete' keyword
delete Tutor.age //deletes age property in Tutor
properties = " "
for (props in Tutor) {

    properties += props + "    "


}
console.log(properties) //list all properties after deletion 