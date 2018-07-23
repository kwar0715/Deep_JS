var foo ="bar";

function bar(){
    var foo ="baz";

    function baz(foo){
        foo="bam";
        bam="yay";
        console.log(bam);
        function inner(){
            console.log("inner");
        }
    }
    baz();
}

bar();
foo;
console.log(bam);
baz(); // Error : no Baz Found
