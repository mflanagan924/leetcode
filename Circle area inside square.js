function squareAreaToCircle(size){
    let radius = (Math.sqrt(size))/2;
    let ans = Math.PI * radius * radius;
    return ans;
  }