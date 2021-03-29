/*Problem Description

Given an array of objects having properties, name and city. Use JavaScript filter() function to return an array containing objects having either Bangalore or Hyderabad as their city property value.

Note: City name can be in lower case too. ex - bangalore, gwalior.

Tip:

    As input string can be Bangalore or bangalore or BangaLORE, it’s alway better to convert the input string into lowercase and match lowercase with lowercase.

    You can convert a string into lowercase using following Javascript code

 */

    function filterByCity(arr) {
        var array = [];
        array = arr.filter((obj)=>{
            return obj.city.toLowerCase() == 'bangalore' || obj.city.toLowerCase() == 'hyderabad' ;
            
        })
        
        return array;
    }
    
    module.exports = filterByCity;
    
    var arr = [
    
    {name: "John", city: "delhi" },
    
    {name: "Peter", city: "bangalore" },
    
    {name: "Mike", city: "Bangalore" },
    
    {name: "Rachel", city: "Hyderabad" }
    
    ];
    
    console.log(filterByCity(arr));