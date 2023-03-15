#!/usr/bin/node
const convertedFirstArg = parseInt(process.argv[2]);
if (isNaN(convertedFirstArg)) {
        console.log('Missing size');
}
for (let i = 0; i < convertedFirstArg; i++) {
	console.log('X'.repeat(convertedFirstArg));
}
