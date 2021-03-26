/*Problem Description

Given an array of strings, use the JavaScript map() function to return an array containing length of string at each index. The input array can be of length 0.

Note

    Return 0 if the string is null or undefined
 */
    function findLength(arr) {
        var a = [];
        arr = arr.map((str) => {
            if(str== null || str==undefined){
                a.push(0);
            }else{
                a.push(str.length);
            }
            
        })
        return a;
    }
    
    module.exports = findLength;
    
    console.log(findLength([null]));