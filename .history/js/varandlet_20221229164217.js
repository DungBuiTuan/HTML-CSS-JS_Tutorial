//destructuring
var person = {
    name: 'John',
    age: 34,
    address: 'Washington DC'
};
var { name, ...rest } = person;

console.log(name);
console.log(age);
console.log(rest);