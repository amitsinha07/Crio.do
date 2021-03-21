/*Problem Description

Given an input N, complete the function evenNumbers() to return all even numbers in the range [0, N] in the form of an Array.
Tip:
    You can use the Mod(%) operator to check if a number is odd or even.
    Checkout following code to see how Mod operator works in Javascript*/

    function evenNumbers(n) {
      var ans = [];
      for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
          ans.push(i);
        }
      }
      return ans;
    }
    module.exports = evenNumbers;

    console.log(evenNumbers(6));