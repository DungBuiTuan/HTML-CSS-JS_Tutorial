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
function Human(name, age) {
    this.name = name;
    this.age = age;
}

var a = Human('Dũng', 20);
var b = Human('Dung', 20);