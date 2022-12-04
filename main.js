#!/usr/bin/node
let gre = require('./sa');
let b =1;
function myFunction(a){
    console.log(a + b);
    b = a;
    
}
myFunction(3);
myFunction(4);
gre("Simon")
