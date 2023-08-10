#!/usr/bin/env node

// console.log(process.argv);
const argv = require("yargs/yargs")(process.argv.slice(2)).argv;

console.log("out:", argv.x + argv.y);
