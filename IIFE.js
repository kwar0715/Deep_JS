var foo ="bob"


(function iife(){
    var foo ="doo2";
    console.log(foo);
})();

console.log(foo);