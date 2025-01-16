function solve(s) {
    //array to store numbers in string
    let arr = [];
    //temperary string to store consecutive numbers
    let temp = "";
    //for loop to check for numbers
    for (let i = 0; i < s.length; i++){
      //checks if not number is false. ie. it is a number
      if (isNaN(s[i]) === false){
        //adds that number to temp
        temp += s[i];
      //if not a number then pushes the integer of the string number to array
      } else if (isNaN(s[i])) {
          arr.push(+temp);
          //resets temp
          temp = "";
      }
    }
    //takes into account if the last number is also integer
    arr.push(+temp);
    //return max int from array
    return Math.max(...arr);
  }