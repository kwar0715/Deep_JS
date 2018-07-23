// static scoping
function foo(){

    var x=10;

    function bar(){
        console.log(x);
    }

    bar();
}

foo();

// dynamic scoping

function foo1(){

    console.log("foo1");
}

function bar1(){
    foo1();
}

bar1();