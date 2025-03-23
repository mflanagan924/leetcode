function calculator(a,b,sign){
    let signs = ["+", "-", "*", "/"];
  if (isNaN(a) || isNaN(b)){
    return "unknown value";
  }
  if (signs.indexOf(sign) < 0){
    return "unknown value";
  }
  if (sign === "+"){
    return a + b;
  }
    if (sign === "-"){
      return a - b;
    }
    if (sign === "*"){
      return a * b;
    }
    else {
      return a/b;
    }
  }