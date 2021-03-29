/*Problem Description

Create an arrow function named modify() which takes an integer array as input and modify the array as follows -

    If an element of the array is prime, then add one to the element

    If an element of the array is not prime, then multiply the element by 2.


Return the modified array.

Tip:

    You can use following function to check if a number is prime or not */

    let modify = (array) => {

        for(let i=0; i<array.length; i++){
            if(isPrime(array[i])){
                array[i]++;
            } else {
                array[i] *= 2;
            }
        }
        return array;
    }
    
    
    function isPrime(n) {
    
    if(n == 0 || n == 1) {
    
        return false;
    
    }
    
    for(let i = 2 ; i*i <= n ; i++) {
    
        if(n%i == 0) {
    
            return false;
    
        }
    
    }
    
    return true;}
    
    module.exports = modify;
    
    console.log(modify([1,2,3,4,5]));