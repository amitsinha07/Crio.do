/*Problem Description

You are given a date in the form of "DD/MM/YYYY". Calculate the number of days between the given date and today's date.

Today's day is the date when the program is executed.

Note

    Sample I/O considers today's date as 28/08/2020

    You may assume all the dates in the input are correct and in the given format

    The given date is in the past as compared to today

    JavaScript new Date() constructor takes in date in the "MM/DD/YYYY" format

    Use let todaysDate = new Date() to get today’s date

    Use Split() function to split the input date string 10/08/2020 where you can pass "/" as a deluminator. You can check the reference link given below to know how to use Split() function.

    Keep in mind, input strings format is "DD/MM/YYYY" and the JavaScript new Date() constructor take date in the “MM/DD/YYYY” format.
 */

    function getNumberOfDays(date) {
        var prevDate = new Date(Date_format(date));
        let myDate = new Date();
    
        var Difference_In_Time = myDate.getTime() - prevDate.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
        return Math.floor(Difference_In_Days);
        
    }
    
    function Date_format(date){
    
        var dd = date.slice(0,2);
        var mm = date.slice(3,5);
        var yy = date.slice(6,10);
        var mmddyy = mm + "/" + dd + "/" + yy;
        return mmddyy;
    }
    
    module.exports = getNumberOfDays;
    //var prevDate = new Date(Date_format("10/02/2020"));
    var output = getNumberOfDays("01/01/1999");
    console.log(output);