let age = 25;
console.log(`I am ${age} years old.`); 
age = 26;
console.log(`I am ${age} years old.`);
let koredeAge = 30;
console.log(`Korede is ${koredeAge} years old.`);
koredeAge = 31;
koredeAge = 32;
console.log(`Korede is ${koredeAge} years old.`);
if (koredeAge > age) {
    console.log("Korede is older than me.");
}else if (koredeAge < age) {
    console.log("I am older than Korede.");
}else {
    console.log("Korede and I are the same age.");
}
const action2= eatPizza("eba", "chew");
function eatPizza(food, action ){
    return console.log(`I am eating ${food} by ${action}.`);

}
const myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
    console.log('I am number ' + myArray[i]);
}
