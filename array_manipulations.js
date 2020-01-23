var PassThrough = require("stream")

var arr = [1, "two", 3, "4"];
console.log(arr);

arr.push(3.5, "6");
console.log(arr);

arr.pop(3.5);
console.log(arr);

console.log(arr.length);
console.log(arr.join());
console.log(typeof(arr.join()));
console.log(arr.reverse());

var arr2 = [7, "10", 3];
var arr1 = arr + arr2;
console.log(arr1);

console.log(arr2.indexOf("10"));

console.log(arr2.sort());

console.log(arr2.valueOf());

console.log(arr2.concat(arr));
var val;
for (val in arr2){
    console.log(val +" "+ arr2[val] + " " + typeof(arr2[val]));
}
//to check whether an item is present in array or not, use indexOf logic with val == -1 
