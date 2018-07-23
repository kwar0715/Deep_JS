function a(){
    var result =1;  
    for(var i=0;i<10;i++){  // i can access over the scope
        result += 10;
    }
    console.log(i);
    console.log(result);
}

a();

function b(){
    var result =1;  
    for(let i=0;i<10;i++){ 
        result += 10;
    }
    console.log(i);// I cant access. because it s in the scope
    console.log(result);
    
}

b();


var a =10;
console.log(a++);

const bb =10;
console.log(bb++);  // Error

const c=[2];
c[0]++;
console.log(c[0]); // No error