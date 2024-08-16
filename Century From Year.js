function century(year) {
    let cent = 0;
    let count = 0;
    while (year > cent){
      cent += 100;
      count += 1;
    }
    return count;
  }