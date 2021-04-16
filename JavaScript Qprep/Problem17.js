/*Promises in Javascript

A promise is an object that may produce a single value some time in the future: 
either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). 
A promise may be in one of 3 possible states: fulfilled, rejected, or pending. 
Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.*/

function getLastNames(firstName, people) {
    return new Promise((resolve, reject) => {
        let arr = []
        people.map(person => {
            if (person.firstName === firstName) {
                arr.push(person.lastName)
            }
        })
        arr.length != 0 ? arr.sort() : null;
        (arr.length != 0) ? resolve(arr) : reject('Invalid')
    })
}
console.log(getLastNames('David', [
    {
        firstName: 'David',
        lastName: 'Dobrick'
    },
    {
        firstName: 'David',
        lastName: 'Beckham'
    },
    {
        firstName: 'Chris',
        lastName: 'Lee'
    },
    {
        firstName: 'James',
        lastName: 'Bond'
    },
]))
module.exports = getLastNames;