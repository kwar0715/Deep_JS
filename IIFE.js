var foo ="foo";


// without name
(function() {
    console.log("IIFE");
}());

// with name

(function bob(){
    var foo ="doo2";
    console.log(foo);
})();

// with params
(function(bar){
    console.log(bar);
})(foo);


