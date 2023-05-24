date = new Date(0);
date = new Date();
date = new Date(2021,2,3,18,1,2,3);//Date(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
date = new Date("april 20,2021,00:05:05");

 

let year = date.getFullYear();
let month = date.getMonth();
let week = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

/*console.log(year);
console.log(month);
console.log(week);
console.log(hours);
console.log(minutes);
console.log(seconds);*/
date.setFullYear(2021);
date.setMonth(5);
date.setDate(5);

console.log(date);