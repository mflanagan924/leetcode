function battle(x, y) {
    let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let xScore = 0;
    let yScore = 0;
    for (let i = 0; i < x.length; i++){
      xScore += abc.indexOf(x[i]) + 1;
    }
    for (let i = 0; i < y.length; i++){
      yScore += abc.indexOf(y[i]) + 1;
    }
    if (xScore > yScore){
      return x;
    } else if (yScore > xScore){
      return y;
    } else {
      return "Tie!";
    }
    
  }