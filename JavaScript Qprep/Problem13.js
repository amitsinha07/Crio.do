/*Problem Description

Complete the function distinctCount() to return the number of distinct elements in the input array. */

function distinctCount(array) {
    let mySet = new Set();
    for(let i=0; i<array.length;i++){
        mySet.add(array[i]);
    }
    return mySet.size;
}

module.exports = distinctCount;

console.log(distinctCount([1,2,1,2,1]));