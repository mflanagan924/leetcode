var ownedCatAndDog = function(catYears, dogYears) {
    let catAge = 0;
    while (catYears > 0){
      if (catAge < 1){
        catAge += 1;
        catYears -= 15;
      } else if (catAge < 2){
        catAge += 1;
        catYears -= 9;
      } else {
        catAge += 1;
        catYears -= 4;
      }
    }
    let dogAge = 0;
    while (dogYears > 0){
      if (dogAge < 1){
        dogAge += 1;
        dogYears -= 15;
      } else if (dogAge < 2){
        dogAge += 1;
        dogYears -= 9;
      } else {
        dogAge += 1;
        dogYears -= 5;
      }
    }
    return [catAge, dogAge];
  }