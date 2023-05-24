class animal {
  constructor() {
    this.alive = true;
  }
  eat() {
    console.log("this creator is eating");
  }
}
class rabit extends animal {
  run() {
    console.log("rabbit is running");
  }
}
class bird extends animal {
  fly() {
    console.log("bird is flying");
  }
}
let Rabit = new rabit();
let Bird = new bird();

Rabit.run();
Bird.fly();
