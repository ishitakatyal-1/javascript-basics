function fun1(){
    console.log("Func-01");
}

function fun2(){
    console.log("Func-02");
}

function fun(fun1, fun2){
    fun1();
    fun2();
}

fun(fun1, fun2);