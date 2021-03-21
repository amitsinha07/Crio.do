/*Problem Description

Write a method which returns an array without the listed values*/

function removeListedValues(arr, without) {

    var newArr=[];
    for(let i=0;i<arr.length;i++){
        var j;
        for(j=0; j<without.length; j++){
            if(arr[i] == without[j]){
                break;
            }   

        }

         if(j == without.length)
            newArr.push(arr[i]);
        
    }
    return newArr;
    
}

module.exports = removeListedValues;

var a = [1,2,2,3,1,2];
var b = [2,3];

console.log(removeListedValues(a,b));