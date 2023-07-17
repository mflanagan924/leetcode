function dayOfTheWeek(day, month, year) {
    //new Date takes year, month, day as parameters; however, remember that it takes month from 0 - 11
    const d = new Date(year, month-1, day);
    //get the specific day of the week from 0 - 6
    let ans = d.getDay();
    //find the corresponding day
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return week[ans];
}