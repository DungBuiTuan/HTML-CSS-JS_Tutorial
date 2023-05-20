var Name = "Tuan Dung";
var street = "dt505";
var city = "Thanh Hoa";
var phone = "0984043008";

console.log(Name.length);
console.log(Name.charAt(0));//Returns the Unicode value of the character at the specified location.
console.log(Name.indexOf(" "));//The nearest space
console.log(Name.lastIndexOf("n"));//The farest space
console.log(Name.trim());//Removes the leading and trailing white space and line terminator characters from a string.
console.log(Name.toUpperCase());//Converts all the alphabetic characters in a string to uppercase.
console.log(Name.toLowerCase());//Converts all the alphabetic characters in a string to lowercase.
console.log(Name.toString());//Returns a string representation of a string.

//var firstname = Name.slice(0,6);
var firstname = Name.slice(0, Name.indexOf(" "));//character closest to space

console.log(firstname);

var lastname = Name.slice(Name.lastIndexOf(" ") +1);//character farthest from space

console.log(lastname);

var address = street.concat(" ", city);

console.log(address);

Myphone = phone.replaceAll(" ");

console.log(Myphone);