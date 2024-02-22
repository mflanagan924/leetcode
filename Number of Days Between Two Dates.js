/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    let milli = 24*60*60*1000;
    return Math.abs(new Date(date1).getTime() - new Date(date2).getTime())/milli;
    
};