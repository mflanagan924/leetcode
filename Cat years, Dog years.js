var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;
    if (humanYears === 1){
      catYears += 15;
      dogYears += 15;
    } else if (humanYears === 2){
      catYears += 15 + 9;
      dogYears += 15 + 9;
    } else {
      let y = 15 + 9;
      let x = humanYears - 2;
      catYears += y + (x * 4);
      dogYears += y + (x * 5);
    }
    return [humanYears, catYears, dogYears];
  }