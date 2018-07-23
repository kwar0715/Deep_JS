"use strict"
var foo = "bar"

function bar(){
    var foo ="baz";
}

bar();

function baz(foo){
    foo ="bam";
    bam = "yay";
    console.log(bam);
}

baz(foo);
