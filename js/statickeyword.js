//static keyword
class car {
  static numofcar = 0;
  static youhave() {
    console.log("you have");
  }
  constructor(model) {
    this.model = model;
    car.numofcar += 1;
  }
}
let p1 = new car("big");
let p2 = new car("small");

console.log(car.numofcar);
car.youhave(); //class.

//super keyword
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class students extends person {
  constructor(name, age, gpa) {
    super(name, age);
    this.gpa = gpa;
  }
  hello() {
    console.log("hello", this.name);
    console.log("you are", this.age, "years old");
    console.log("your gpa is", this.gpa);
  }
}
class teacher extends person {
  constructor(name, age, idclass) {
    super(name, age);
    this.idclass = idclass;
  }
  hello() {
    console.log("hello", this.name);
    console.log("you are", this.age, "years old");
    console.log("your idclass is", this.idclass);
  }
}
let student = new students("Dung", 19, 4.0);
let teachers = new teacher("Tuan", 29, "ENT10");

/*console.log(student.name);
console.log(student.age);
console.log(student.gpa);
console.log(teachers.name);
console.log(teachers.age);
console.log(teachers.idclass);*/
student.hello();
teachers.hello();
