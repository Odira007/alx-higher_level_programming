#!/usr/bin/node
const convertedFirstArg = parseInt(process.argv[2]);
if(isNaN(convertedFirstArg)) {
	console.log("Missing number of occurencies");
}
for (let i = 0; i < convertedFirstArg; i++) {
	console.log("C is fun");
}
