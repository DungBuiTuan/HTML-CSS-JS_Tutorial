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

console.log(a);

console.log(a.getinfo());