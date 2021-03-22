/*Problem Description

The getX(x) function returns its parameter x normally under all conditions but throws an error if x equals 5. This must error must be "caught" by the errorHandler() function.
Complete the errorHandler() function such that:

 1.   errorHandler() function should call the function getX()

 2.   Input to getX() should be x ie. getX(x),

 3.   Return the result obtained from getX() function, if error occurs catch and return the error.*/



    function errorHandler(x) {
        return getX(x);
    }
    
    function getX(x) {
        if(x == 5) {
            return new Error("Error Occured");
        }
        return x;
    }
    
    module.exports = errorHandler;
    
    console.log(errorHandler(5));