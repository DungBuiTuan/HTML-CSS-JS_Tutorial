let total = 0;
let number = [1, 2, 3, 4];

function checkout(element) {
    total += element;
}
number.forEach(checkout);
console.log("your total is $", +total);

let USD = [1, 2, 3, 4];

function toeuros(value) {
    value *= 0.85;
    return value;
}

let Euro = USD.map(toeuros);
console.log(USD);
console.log(Euro);

let teenagers = [15, 16, 17, 18];

function checkage(age) {
    if (age >= 16) {
        return age;
    }
}
let youngcow = teenagers.filter(checkage);
console.log(youngcow);

let Name = ["D", "U", "N", "G"];

function combinename(total, nextletter) {
    return total + nextletter
}
let word = Name.reduce(combinename);
console.log(word);

console.log(Name.join(' - ')); //join elements 
console.log(Name.pop()); //delete the last element of array and return it
console.log(Name.push('Hello')); //add 1 or more elements to the last element of array and return index
console.log(Name.shift());