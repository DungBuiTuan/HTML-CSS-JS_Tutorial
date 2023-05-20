var tempe = 30;
if (tempe >= 50) {
    console.log("so hot");
}
if (tempe > 0 && tempe < 50) {
    console.log("normal");
} else {
    console.log("so cold");
}
var time = 10;
if (time > 18 || time < 6) {
    console.log("dark");
} else {
    console.log("light");
}

var iname = window.prompt("enter name");
if (!(iname == "")) {
    console.log("hello", iname);
} else {
    console.log("u didn't enter your name");
}

//ternary operators

var number = {
    nu1: 1,
    nu2: 2
}

let nu3 = number.nu2 > 0 ? `${number.nu2} abc` : `${'none'}`;
console.log(nu3);