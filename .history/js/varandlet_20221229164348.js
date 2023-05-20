//destructuring
var person = {
    name: 'John',
    age: 34,
    address: 'Washington DC'
};
var { name, ...rest } = person;

console.log(name);
//console.log(age); if age is not in var { name, ...rest } = person; -> con not use
console.log(rest);