var obj1 = {
    name:"Ishita",
    designation:"Software developer",
    status:"Active"
}

obj1.name = "Harshit";
console.log(obj1["name"]);

var x = "3";
obj1[x+"ABC"] = "Hello";

console.log(obj1.name);
console.log(obj1.designation);
console.log(obj1.status);

console.log(obj1);