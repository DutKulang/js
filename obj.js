#!/usr/bin/node

/*
how to come with properties of an object, ask the following
-> object_name has ---- properties
a person has a:
name, gender, age, height, height etc
*/

let person = {
    name: "Dut Andrew Kulang",
    gender: "male",
    age: 22,
};

console.log(person["name"].length);

//console.log(person.name.length);
person.age = 12;
//console.log(person.age);
person["name"] = "real name";
console.log(person["name"]);
