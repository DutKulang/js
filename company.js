#!/usr/bin/node

let company = {
    company_name: "yazol",
    activities: "software development",
    address: {
	street: "2nd street",
	number: "123",
	zipcode: "4567",
	city: "Juba",
	country: "South Sudan"
    },
    year: 2010
};

console.log(company["address"]["street"]);
//console.log(company.address.street);
