//destructuring
var person = {
    name: 'John',
    age: 34,
    address: 'Washington DC',
    Paname: {
        name: 'Johns'
    }
};
// var { name, ...rest } = person;
// var { name, ...newObject } = person;//use to remove a or more properties
var { name, Paname: { name: paname } } = person; //use to remove a or more properties

console.log(paname);
// console.log(newObject); 
// console.log(name);
//console.log(age); if age is not in var { name, ...rest } = person; -> con not use
// console.log(rest);

function count(...args) {
    console.log(arguments);
}

console.log(count(1, 2, 3, 4, 5));