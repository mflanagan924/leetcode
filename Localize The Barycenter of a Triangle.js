function barTriang(p1, p2, p3){
    let xZero = ((p1[0] + p2[0] + p3[0])/3).toFixed(4);
    let yZero = ((p1[1] + p2[1] + p3[1])/3).toFixed(4);
    return [+xZero, +yZero];
  }