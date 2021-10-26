function calculateDayBetweenDates(begin,end) {  //begin and end are javascript Date objects
    var one_day=1000*60*60*24;
    var difference_ms = end.getTime() - begin.getTime();
    var days = Math.round(difference_ms/one_day);
    return days;
    
}
// transform the date to a string in the format dd/mm/yyyy   

exports.calculateDayBetweenDates = calculateDayBetweenDates;