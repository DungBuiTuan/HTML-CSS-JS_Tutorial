const { Value } = require("sass");

var num;
//num = Math.round(4.6); value between ... 
// num = Math.floor(1.9); //the smallest value
//num = Math.ceil(3.2); Returns the smallest integer greater than or equal to its numeric argument.
//num = Math.pow(3,4);
//num = Math.sqrt(81);
//num = Math.abs(-5);
//num = Math.min(1,2,3);
//num = Math.max(1,2,3);
//num = Math.PI;
//num = Math.E;
num = Math.floor(Math.random() * 100);
console.log(num);

//Example
var a = window.prompt("enter a");
var b = window.prompt("enter b");
var c;

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log(c);

//Map
const store = new Map([
    ["T-shirt",200],
    ["Jeans",20]
]);

store.get("Jeans");

store.forEach((Value,key)=>console.log(`${key} $${value}`));