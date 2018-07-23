// return function
function foo(){
    var bar = "bar";

    return function(){
        console.log(bar);
    }
}

foo()();

// time out function

function foo1(){

    var bar=1;

    setTimeout(function(){
        console.log(bar++);
    },100);

    setTimeout(function(){
        console.log(bar++);
    },200);
}

foo1();


