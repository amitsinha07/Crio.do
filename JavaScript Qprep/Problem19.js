/*Rest Parameter

Problem Description

Create and complete a function minValue() which should return the minimum value of all arguments passed into it.

Note: There can be any number of arguments.*/

function minValue(...args) {
    return Math.min.apply(null,args);
}

module.exports = minValue;

console.log(minValue(1,2,0));