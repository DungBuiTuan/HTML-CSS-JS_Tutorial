//class, constructor,keyword
class car {
  constructor(year, color) {
    this.year = year;
    this.color = color;
  }
  color() {
    console.log("your car is blue!", this.year);
  }
  size() {
    console.log("so big!", this.year);
  }
  /*explain() {
    return this;
  }*/
}

let p1 = new car(2021, "red");
let p2 = new car(2021, "blue");
/*p1.color();
p2.size();
console.log(p1.year);
console.log(p1.color);
console.log(p2.year);
console.log(p2.color);
console.log(p1.explain());
console.log(p2.explain());*/
console.log(this);
