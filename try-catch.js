var x = -1;
try{
    x = Number(x);
    if(x > 0){
        console.log(x+1);
    }
    else{
        throw "Too small";
    }
}
catch(err){
    console.log(err.name + err.message);
}