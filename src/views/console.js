"use strict";
exports.__esModule = true;
exports.askQuestion = exports.clear = exports.print = void 0;
var readline = require("node:readline");
function print(str) {
    console.log(str);
    console.log();
}
exports.print = print;
function clear(addTopBorder) {
    console.clear();
    if (addTopBorder) {
        print('------------------------------------');
    }
}
exports.clear = clear;
// NOTE: this "createInterface" function is built into node and is referring to the console interface - NOT a TypeScript interface!
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// this function allows us to prompt the user with a question, and call a callback function with whatever string has been input
function askQuestion(question, callback) {
    reader.question("\u2753 ".concat(question, " \uD83D\uDC49 "), callback);
}
exports.askQuestion = askQuestion;
