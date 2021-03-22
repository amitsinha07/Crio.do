/*Problem Description

Given a character X you need to find whether X is an alphabet or not.
If yes, return a string "Yes" or otherwise throw an error with the message "Not Alphabet".
Please use the following code snippet to check if X is an alphabet or not.*/


function checkAlphabet(X) {

	let n = X.charCodeAt(0);

	let strStartsWithALetter = (n>=65 && n < 91) || ( n>=97 && n<123);

    if (strStartsWithALetter) {
	    return true;
    } else {
	    return false;
    } 
}

function isAlphabet(X) {

    if(checkAlphabet(X))
        return "Yes";
    else 
        throw "Not Alphabet";
   
}

module.exports = isAlphabet;



console.log(isAlphabet('A'));