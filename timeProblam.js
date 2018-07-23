// closure 2

for(var i=1;i<=5;i++){
    setTimeout(()=>{
        console.log(i);
    },1000*i)
}

// print 6666666
// scope issure

// effi

for(var i=1;i<=5;i++){
    (function(i){setTimeout(()=>{
        console.log(i);
    },1000*i)})(i);
}

// block scoping

for(var i=1;i<=5;i++){
    let j =i;
    setTimeout(()=>{
        console.log(j);
    },1000*j);
}

// let key

for(let i=1;i<=5;i++){
    setTimeout(()=>{
        console.log(i);
    },1000*i);
}



