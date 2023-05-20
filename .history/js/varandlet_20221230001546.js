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

//----------------------------------------------------------------
//Spread - array,object..
function person1({ name, age, ...rest }) {
    console.log(name);
    console.log(age);
}

person1({
    name: 'John',
    age: 34,
    address: 'Washington DC',
    Paname: {
        name: 'Johns'
    }
});

//----------------------------------------------------------------
var Pa = {
    name: 'John',
    age: 34,
    address: 'Washington DC'
};
var son = {
    ...Pa,
    name: 'Johns',
    age: 15,

};

console.log(son);

//----------------------------------------------------------------
//Tagged template literals
function getinfo([first, ...strings], ...values) {
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span> `], [first]
    );
};

var names = 'Dũng';
var province = 'Thanh Hoá';

const info = getinfo `I am ${names} and my address is ${province}`;

console.log(info);