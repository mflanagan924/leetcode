function equableTriangle(a,b,c) {
    let s = (a + b + c)/2
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    if (area === a + b + c){
      return true;
    }
    return false;
  }