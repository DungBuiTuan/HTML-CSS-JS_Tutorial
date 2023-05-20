// template string
// let fname = 'bui';
// let lname = 'dung';
// let age = prompt("guess age");

// let result = `${fname} ${lname} is ${age} years old`;
// alert(result)

// Default parameter
// function welcome(user = 'Dung', massage = 'Good bye') {
//     alert(`Hello ${user}, ${massage}`);
// }

// welcome();

// Arrow function
// let blog = (title, body) => {
//     if (!title) {
//         throw new Error('empty title');
//     }
//     if (!body) {
//         throw new Error('empty body');
//     }

//     return alert(`${title} - ${body}`);

// };

// blog('dung', 'dep ');


// Arrow function and this keyword
// let dung = {
//     performance: ['handsome', 'good brain'],
//     printWithDash: function() {
//         setTimeout(() => console.log(this.performance.join(' - ')), 3000);
//     }
// };

// dung.printWithDash();


//Destructuring object and arrays

let [, , a] = ['Dung', 'dep', 'trai'];
console.log(a);
let student = ({ name, university }) => {
    console.log(`${name} from ${university}`);
};

student({
    name: 'Dung',
    university: 'FPT university'
});


//  Restructuring