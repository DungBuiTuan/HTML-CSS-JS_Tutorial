// function displayDOM(output) {
//     document.getElementById("alo").innerHTML = output;
// }

// function displayconsole(output) {
//     console.log(output);
// }


// function set(text, callBack) {
//     console.log(text);
//     callBack(text);
// }
// set("dung", displayDOM);
function greeting(name) {
    alert(`Hello, ${name}`);
}

function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
}

processUserInput(greeting);

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}

function alertFinished() {
    console.log('Finished my homework');
}

doHomework('math', alertFinished);

/*
function successCallback() {
    // Do something
}
​
​function successCallback() {
    // Do something
}
​
​function completeCallback() {
    // Do something
}
​
​function errorCallback() {
    // Do something
}
​
$.ajax({
    url     :"google.com",
    success :successCallback,
    complete:completeCallback,
    error   :errorCallback
});
*/

const person = (f,l)=>({
    f:first,
    l:last
    }
    )