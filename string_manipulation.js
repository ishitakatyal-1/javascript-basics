var str1 = "Hi! How are you? My name is IShita Katyal. I hope you are sailing in the same boat";

var len = str1.length;
console.log("The len of string is:",len);
var char = str1.charAt(0);
console.log(char);
var ind = str1.indexOf("are");
console.log(ind);
var slic = str1.slice(23, 42);
console.log(slic);
var splt = str1.split(".");
console.log(splt);
var substr = str1.substring(2, 26);
console.log(substr);
var upper = str1.toUpperCase();
console.log(upper);

var str2 = ".";
console.log(str1.concat(str2));

console.log(str1.replace("you", "YOU"));

//console.log(str1.re)
//no reverse for string

//console.log(str1.slice(-1, 0));