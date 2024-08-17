function whatCentury(year) {
    year = +year;
    let cent = 0;
    let count = 0;
    while (year > cent){
      cent += 100;
      count += 1;
    }
    count = count.toString();
    if (count[1] === "1" && count[0] !== "1"){
        return count + "st";
    } else if (count [1] === "2" && count[0] !== "1"){
        return count + "nd";
    } else if (count [1] === "3" && count[0] !== "1"){
        return count + "rd";
    } else {
        return count + "th";
    }
  }