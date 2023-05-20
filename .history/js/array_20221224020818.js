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
console.log(Name.shift()); //delete the first element of array and return it
console.log(Name.unshift('Hello')); //add 1 or more elements to the first element of array and return index
console.log(Name.splice(1, 2, 'A')); //delete the elements from poiter (splice(x,y,'z')->x is index of pointer, y is number of element, z is inserted in theirs place)
console.log(Name.concat(USD)); //join arrays together

const numbers = [15.5, 2.3, 1.1, 4.4];

function getSum(total, num) {
    return total + Math.round(num);
}

let summary = numbers.reduce(getSum, 0);
console.log(Summary);