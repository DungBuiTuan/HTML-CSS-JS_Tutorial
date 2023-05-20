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
delete age;
// can write many var ***={function}