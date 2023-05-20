document.querySelector("#button").mousedown = function() {
    const h1 = document.querySelector("#alo");
    console.log(h1.style);
    h1.style.color = "blue";
    h1.style.backgroundColor = "white";
    h1.style.textAlign = "center";
    h1.style.animation = "turn";
    h1.style.border = "4px solid";
};
//classList
let box = document.querySelector('.box');
// Object.assign(box.style, {
//     width: '50px',
//     height: '50px',
//     backgroundColor: 'black',
//     marginTop: '20px',
// });
// console.log(box.style.backgroundColor);
//----------------------------------------------------------------
// box.classList.add('red');

// setTimeout(() => {
//     box.classList.remove('red');
// }, 3000);

setInterval(() => {
    box.classList.toggle('red');
}, 1000);

console.log(box.classList.contains('red'));