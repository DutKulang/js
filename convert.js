#!/usr/bin/node

function greet(x){

    switch(typeof x){

    case "number":
	return `${x} is a number`;
    case "string":
	return `${x} is a string`;
    }

}

console.log(greet('123'));
