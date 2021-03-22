/*Problem Description

Given an array of strings, names. Find the number of occurrences of every string that exists in the array.
Use Map (named occurrence) data structure to find the number of occurrences.*/

function findOccurrence(names) {
    var counts = {};
    for(var i=0; i<names.length;i++){
        var num = names[i];
        counts[num] = counts[num]?counts[num]+1 : 1;
    }
    console.log(counts)

    var occurence = new Map();
    for(var i=0; i<names.length; i++){
        occurence.set(names[i],counts[names[i]]);
    }
    return occurence;
}

module.exports = findOccurrence;
var Occurence = findOccurrence(['john', 'harvey', 'john', 'mike']);

Occurence.forEach((value,key)=>{
    console.log(key+' => '+value);
})