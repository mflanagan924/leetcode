function remainder(n, m){
     
    if (n > m && m !== 0){
      return n%m;
    } else if (n > m && m === 0){
      return NaN;
    }
    if (m > n && n !== 0){
      return m%n;
    } else if (m > n && n === 0){
      return NaN;
    }
    if (n === m && n !== 0){
        return 0;
    } else {
        return NaN;
    } 
    
  }