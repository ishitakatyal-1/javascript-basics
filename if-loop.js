var x = 5;
if (x==6){
    console.log("Correct.")
}
else{
    console.log("Incorrect.")
}

var a = 9, b = 16, c = 7;
var d;
if(a < b && a < c){
    d = a;
}
else if(b < a && b < c){
    d = b;
}
else{
    d = c;
}
console.log(d + " is the smallest.")
