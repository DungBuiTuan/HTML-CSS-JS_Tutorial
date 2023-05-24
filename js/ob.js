class me {
    constructor(model, color) {
        this.model = model;
        this.color = color;
    }
    drive() {
        console.log("you drive ", this.model);
    }
}
/*
function change(car, newcolor) {
  car.color = newcolor;
}
let car1 = new me("ducati", "blue");

change(car1, "red");
console.log(car1.model, car1.color);
*/
let garage = [];
let car1 = new me("mercedes", "blue");
let car2 = new me("ducati", "blue");
let car3 = new me("bwn", "blue");

garage = [car1, car2, car3];
//console.log(garage[0]);
//console.log(garage[1]);
//console.log(garage[2]);

for (i = 0; i < garage.length; i++) {
    //console.log(garage[i]);
    garage[i].drive();
}
//array of function
function jump() {
    console.log("jump");
}

function fly() {
    console.log("fly");
}
let actions = [];
actions = [jump, fly];
/*for (let i = 0; i < actions.length; i++) {
  actions[i]();
}*/
actions.foreach(func => func());