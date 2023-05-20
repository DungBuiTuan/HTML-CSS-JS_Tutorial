var Name = "Tuan Dung";
var street = "dt505";
var city = "Thanh Hoa";
var phone = "0984043008";
var money = 20.02;

console.log(Name.length);
console.log(Name.charAt(0)); //Returns the Unicode value of the character at the specified location.
console.log(Name.indexOf(" ")); //The nearest space
console.log(Name.lastIndexOf("n")); //The farest space
console.log(Name.trim()); //Removes the leading and tailing white space and line terminator characters from a string.
console.log(Name.toUpperCase()); //Converts all the alphabetic characters in a string to uppercase.
console.log(Name.toLowerCase()); //Converts all the alphabetic characters in a string to lowercase.
console.log(Name.toString()); //Returns a string representation of a string.
console.log(Name.split('')); //split the same common characteristics
console.log(Name.charAt(0)); //get the value of index in the string (console.log(Name[0]));
console.log(money.toFixed()); // round up if >=.5 ,round down if <0.5 and toFixed(number) take the decimal as you want 

//var firstname = Name.slice(0,6);
var firstname = Name.slice(0, Name.indexOf(" ")); //character closest to space

console.log(firstname);

var lastname = Name.slice(Name.lastIndexOf(" ") + 1); //character farthest from space

console.log(lastname);

var address = street.concat(" ", city);

console.log(address);

Myphone = phone.replaceAll(" ");

console.log(Myphone);
console.log(city.replace(/h/g, "r"));
//forEach
Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
};

var A = new Array(1000);

A.push('D', 'E');
console.log(A);
A.forEach2(function(num, index, array) {
    console.log(num, index, array);
})

//filter
Array.prototype.filter2 = function(callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
};