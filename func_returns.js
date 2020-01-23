function func1(name, greeting){
    var var1 = "Hello " + name + ".\n";
    var var2 = greeting;
    var var4 = var1 + var2;
    return var4;
}

var name = "Ishita";
var greeting = "Merry X-MAS. ";

var str = func1(name, greeting);
console.log(str);

//\n is used to print next line
