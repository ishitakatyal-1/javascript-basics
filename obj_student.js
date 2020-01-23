var Student = {
    roll: "01",
    name: "Ishita",
    class: "XII-A",
    gender: "Female",
    func: func1,
    favfunc: function() {
        return this.roll + " " + this.class;
    },
}

var greeting = "Hi,"+ Student.name;


function func1(greeting){
    console.log(greeting);
    return greeting;
}

console.log(Student.roll);
console.log(Student.name);
console.log(Student.class);
console.log(Student.gender);
console.log(Student.func);
console.log(Student.func(greeting));
//gets printed twice
console.log(Student.favfunc);
console.log(Student.favfunc());



