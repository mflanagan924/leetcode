function maxMultiple(divisor, bound){
  
    while (bound%divisor > 0){
      bound = bound-1;
    }
    if (bound%divisor === 0){
      return bound;
    } 
  }