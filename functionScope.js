var foo = "bar"
global.age=10;      // globle valiable

console.log(foo);

function bar(){
    console.log(foo);   // this will get undefined because foo doent initializes
    console.log(age);// access global varialble
    var foo ="baz";
    console.log(foo);
}

bar();

function baz(foo){
    foo ="bam";
    bam = "yay";
    console.log(bam);
}

console.log(foo);

baz(foo);

console.log(foo);
// access globle


