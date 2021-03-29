/* Home

    QPrep JavaScript

High order functions: Reduce

Notifications

Hints
Problem Description

Given an array of people having property, name and age. Use JavaScript reduce() function and group peoples by age.*/

function groupByAge(objectArray) {

    newObject = objectArray.reduce( (accumulator, currentValue) => {
      if(!accumulator[currentValue.age]){
        //var currentAge = currentValue.age;
        //accumulator.currentAge = currentValue;
        accumulator[currentValue.age] = [];
      }
      accumulator[currentValue.age].push(currentValue);
      return accumulator;
    },{}
    );
    return newObject;
}

module.exports = groupByAge;

var arr = [

  { name: 'John', age: 21 },

  { name: 'Mike', age: 20 },

  { name: 'Harvey', age: 20 }

];

console.log(groupByAge(arr));