/* Problem Description

Complete the function named subarray() in which you are given an array named arr, 
and two integers start, end. You need to implement the function to return a subarray 
starting from index start and ending on index end.

Note: Use the slice method of Array. */

function subarray(arr, start, end) {
    return arr.slice(start,end+1);
}

module.exports = subarray;

console.log(subarray([0,2,4,6],0,3));

