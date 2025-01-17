function minimumSteps(numbers, value){
    //sort array in ascending order
    numbers = numbers.sort(function (a, b) {  return a - b;  });
    //intialize count
    let count = 0;
    //initialize sum as the first number in array
    let sum = numbers[0];
    //if the first number is greater than or equal return count
    if (sum >= value){
      return count;
    }
    //for loop to keep adding number until the sum is greater than or equal to value
    //in each loop add one to count
    for (let i = 1; i < numbers.length; i++){
      count++;
      sum += numbers[i];
      if (sum >= value){
        return count;
      }
    }
  }