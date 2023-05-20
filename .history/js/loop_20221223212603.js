/*var creditnum = window.prompt("Enter your credit card or something else");
while(creditnum == ""){
    creditnum = window.prompt("your computer have virus");
}
console.log("your computer don't have virus");*/
/* do{
    var creditnum = window.prompt("your computer have virus");
}while(creditnum == "");*/

/*for(let i=0 ;i<10;i++){
    console.log(i);
}*/
/* let i=1;
for(;i>0;){
    console.log(i);
    i++;
}*/

let letters = ["d", "u"];
let car = {
    year: 2021,
    color: "blue"
}
for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}
//for/of
for (let i of letters) {
    console.log(i);
}
for (let i of Object.values(car)) {
    console.log(i);
}
//for/in        
for (let i in letters) {
    console.log(letters[i]);
}
for (let a in car) {
    console.log(car[a]);
}
// var symbol = window.prompt("enter a symbol to use");
// var row = window.prompt("enter # off rows");
// var columns = window.prompt("enter # of columns");

// for(let i =0;i<row;i++){
//     for(let j =0;j<symbol;j++){
//         console.log(symbol);
//         document.getElementById("myrectangle").innerHTML += symbol;
//     }
// }

//while
let array = [
    'dung',
    'tuan'
];

let i = 0;
while (i < array.length) {
    i++;
    console.log(array[i]);
}