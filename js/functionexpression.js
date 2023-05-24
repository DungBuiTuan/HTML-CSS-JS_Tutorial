//Function express
/*hello();
function hello() {
  console.log("hello");
}
*/
/*let say = function () {
  document.getElementById("alo").innerHTML;
};

output(say);*/

let say = "hello";
outputconsole(say);

function outputconsole(x) {
    console.log(x);
}

function outputweb(x) {
    document.getElementById("alo").innerHTML = x;
}

//nested function

function login() {
    let username = "Dung";
    let massage = 0;

    function displayusername() {
        console.log("Hello", username);
    }

    function displaymassage() {
        console.log("you have", massage, "massage");
    }
    displayusername();
    displaymassage();
}
login();

//anonymous function

(function() {
    document.getElementById("alo").innerHTML = "Dung ne!";
})();
setTimeout(function() {
    document.getElementById("alo").innerHTML = "time!";
}, 1000);

//arrow function
let hello;
let x = "say ";
let y = "<3";
/*hello = (x, y) => x + "Hello!!!" + y;
console.log(hello(x, y));*/
hello = (x, y) => {
    console.log(x);
    console.log(y);
};
hello(x, y);

let usd = [1, 2, 3];
let euro;
euro = usd.map((value) => ((value *= 0), 84));
console.log(euro);


var sum = (x, y) => { return x + y };
console.log(sum(2, 3));