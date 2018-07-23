var foo =(function(){

    var o={bar:"bar"};

    return{
        bar:function(){
            console.log(o.bar);
        }
    }
})();

foo.bar();

// define loader

define("foo1",function(){

    var o={bar:"bar"};

    return{
        bar:function(){
            console.log(o.bar);
        }
    }
});

