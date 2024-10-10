function countPositivesSumNegatives(input) {
    let posCount = 0;
    let negSum = 0;
    if (input === null || input.length === 0) {
      return [];
    }
    for (let i = 0; i < input.length; i++){
      if (input[i] > 0){
        posCount++;
      } else if (input[i] < 0){
        negSum += input[i];
      }
    }
    if (posCount === 0 && negSum === 0){
      return [];
    } else {
      return [posCount, negSum];
    }
  }