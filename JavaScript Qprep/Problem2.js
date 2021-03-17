//Problem Description
//Complete the add(), subtract(), multiply() and divide() functions for the corresponding mathematical operation.

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function divide(a, b) {
    return a/b;
}

function multiply(a, b) {
    return a*b;
}

module.exports = {add, subtract, divide, multiply};

console.log(add(0,1));
console.log(subtract(0,1));
console.log(multiply(0,1));
console.log(divide(0,1));