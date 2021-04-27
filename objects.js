// object is an entity with properties and where each property has certain method/functionalities

//object creation 
// we can access a property of object by '.' ,ex: person.age,person.name 
//creating object with 'new' keyword 
var person3 = new Object()
person3.name = "zeroned"
person3.age = 29
person3.year = 1978
console.log("age :" + person3.age, "name :" + person3.name, "Year :" + person3.year)

//creating object with set of properties with [] 
var person = {}
person['name'] = "zero"
person['age'] = 20
person['year'] = 1998

console.log("age :" + person.age, "name :" + person.name)

//creating object with set of properties with {}
var person1 = {
    username: "one",
    age: 24,
    dob: 1997
}
console.log("age :" + person1.age, "name :" + person1.username, "DOB :" + person1.dob)