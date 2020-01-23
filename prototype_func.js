var first = "Ishita";
var last = "Katyal";

function name(first, last) {
    first = first;
    last = last;
    //return first +" " +last;
}

name.prototype = {
   getfullname: function() {
       return this.first + " " + this.last;
    }
};


//console.log(name(first, last));
console.log(name.prototype);
console.log(name.prototype.getfullname);
console.log(name.prototype.getfullname());