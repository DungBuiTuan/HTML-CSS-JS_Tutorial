//event
const div = document.querySelector("#alo");
Object.assign(div.style, {
    backgroundColor: "yellow",
    width: "500px",
    height: "50px"
});

const div1 = document.querySelector(".myc");

Object.assign(div1.style, {
    backgroundColor: "yellow",
    width: "500px",
    height: "50px"
})

div.addEventListener("click", (e) => {
    console.log("click");
    div.style.backgroundColor = "blue";
});
div.addEventListener("mousedown", (e) => {
    console.log("holding");
    div.style.backgroundColor = "green";
});
div.addEventListener("mouseup", (e) => {
    console.log("let go up");
    div.style.backgroundColor = "purple";
});
div.addEventListener("dblclick", (e) => {
    console.log("double click");
    div.style.backgroundColor = "pink";
});
// div.addEventListener("mouseover", (e) => {
//     console.log("enter square");
//     div.style.backgroundColor = "white";
// });
// div.addEventListener("mouseleave", (e) => {
//     console.log("let go up");
//     div.style.backgroundColor = "black";
// });
//mousemove

//PreventDefault and StopPropagation

let el = document.links;

for (let index = 0; index < el.length; index++) {
    el[index].onclick = function(e) {
        if (!e.target.href.startsWith('https://www.youtube.com/watch?v=4ZnQur6rewg&list=PL_-VfJajZj0VgpFpEVFzS5Z-lkXtBe-x5&index=80')) {
            e.preventDefault();
        }
    }

}

//----------------------------------------------------------------
let els = document.querySelector('ul');
els.onmousedown = function(q) {
    q.preventDefault();
};

els.onClick = function(q) {
    console.log(q.target);
};

//----------------------------------------------------------------
function func1(event) {
    alert("DIV 1");
    if (document.getElementById("check").checked) {
        event.stopPropagation();
    }
}

function func2() {
    alert("DIV 2");
}

//----------------------------------------------------------------
//JSON,Parse and Stringify

const json = '{ "name": "dung", "age": "20" }';
const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const myArr = JSON.parse(text); //convert json to JavaScript array
const json2 = JSON.parse(json); //convert json to object
console.log(json2);
console.log(myArr);

const text3 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const objs = JSON.parse(text3, function(key, value) { //Convert a string into a date, using the reviver function
    if (key == "birth") {
        return new Date(value);
    } else {
        return value;
    }
});
console.log(objs.name + ", " + objs.birth);

const text1 = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
const obj = JSON.parse(text1); //Convert a string into a function
obj.age = eval("(" + obj.age + ")");
console.log(obj.name + ", " + obj.age());
//must be a string before run stringify function
//----------------------------------------------------------------
//promise
//promise.resolve-promise.reject-promise.all
let promise = new Promise(function(resolve) {
    setTimeout(function() {
        resolve(['La']);
    }, 1000);
});

let promise1 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve(['Ly']);
    }, 2000);
});

let promise2 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve(['Day']);
    }, 2000);
});

Promise.all([promise, promise1, promise2]).then(function(result) {
    let re1 = result[0];
    let re2 = result[1];
    let re3 = result[2];
    console.log(re1.concat(re2).concat(re3));
});