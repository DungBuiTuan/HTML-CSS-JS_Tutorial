//Enhanced object literals trong javascript ES6
var human = {
    name: "dung",
    age: 19,
    eatfunction() {
        console.log("Ăn phá lấu");
    },
    drinkfunction() {
        console.log("uống sữa dừa");
    }
};

human.age;
human["age"]; //text 
human.drinkfunction();
console.log(human.age);
human.eatfunction();
delete human.age;
console.log(human);
// can write many var ***={function}
//Object constructor
function User(name, age) {
    this.name = name;
    this.age = age;
    this.getinfo = function() {
        return `${this.name} ${this.age}`;
    }
}

var a = new User('Dũng', 20);
var b = new User('Dung', 20);
User.prototype.address = 'thanh hoa';
User.prototype.getaddress = function() {
    return this.address;
}

console.log(a.address);
console.log(a.getaddress());
console.log(a.getinfo());

//default values parameters
function name(log, type = 'log') {
    console.log[type](log);
}

name('Hello', 'err');