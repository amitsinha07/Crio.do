/* ForEach in Javascript

There are various ways to loop through an array in Javascript. The forEach() method calls the provided function once for each element of the array. 
The provided function may perform any kind of operation on the elements of the given array.


Problem Description

Write a method to replace all elements of an array by (i + 1) * arr[i], where i is the position of an element in the array.

Note: We are following a 0 based indexing.*/

function convertArray(arr) {
    var array = [];
    arr.forEach(function(el,index){
        array.push((index+1)*el);
    })
    return array;
}

module.exports = convertArray;

console.log(convertArray([1,2,2,3,1,2]));