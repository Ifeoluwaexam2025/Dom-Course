// what are objects? 
// an object in js is a variable which houses multiple values or properties.
// objects are denoted by curly braces {} and properties are defined as key value pairs. 
// the key is a string and the value can be any data type including another object.

// how to access object properties
// let akoredeName = AkoredeObject.name;
// console.log(akoredeName); // Output: Akorede
// let akoredeAge = AkoredeObject.age;
// console.log(akoredeAge);
// let JohnName = secondObject.name;
// console.log(JohnName); // Output: John Doe

// console.log(JohnAge); // Output: 30

// how to modify object properties

// console.log(`Akorede is ${akoredeAge} years old.`);

// array of objects
    let  AkoredeObject= {
    name: "Akorede",
    age: 14,
    isStudent: true,
    hobbies: ["coding", "gaming", "reading"]
}

let secondObject = {
    name: " John Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["traveling", "cooking", "swimming"]
}

OperationObjectPrinting(AkoredeObject, secondObject);



function OperationObjectPrinting(Object1, Object2){
      Object1= {

    age: age,
    isStudent: isStudent,
    hobbies: []
}

Object2 = {
 
    age: age,
    isStudent: isStudent,
    hobbies: []
}

let humans= [
    Object1,
    Object2
]

// let humans2= [
//     {name: "Alice", age: 28, isEmployed: false, hobbies: ["painting", "yoga"]},
//     {name: "Bob", age: 35, isEmployed: true, hobbies: ["hiking", "photography"]},
//     {name: "Charlie", age: 22, isEmployed: false, hobbies: ["gaming", "music"]}
// ]

for(let i= 0; i<humans.length; i++){
   return console.log(humans[i].age);
}
}
