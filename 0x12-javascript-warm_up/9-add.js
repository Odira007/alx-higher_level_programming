#!/usr/bin/node
let firstArg = parseInt(process.argv[2]);
let secondArg = parseInt(process.argv[3]);

function add(a, b) {
	return a + b;
}
console.log(add(firstArg, secondArg));

