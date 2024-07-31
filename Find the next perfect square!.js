function findNextSquare(sq) {
    if(Math.floor(Math.sqrt(sq)) === Math.sqrt(sq)) {
      let x = Math.sqrt(sq) + 1;
      return x * x;
    }
     else {return -1;}
   }