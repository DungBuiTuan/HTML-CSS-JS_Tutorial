//destructuring
var person = {
    name: 'John',
    age: 34,
    address: 'Washington DC'
};
// var { name, ...rest } = person;
var { name, ...newObject } = person;


console.log(newObject); //use to remove a or more properties
console.log(name);
//console.log(age); if age is not in var { name, ...rest } = person; -> con not use
console.log(rest);