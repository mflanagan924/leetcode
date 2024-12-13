function catMouse(x) {
    
    let count = 0;
    for (let i = 1; i < x.length; i++) {
      if (x[i] === '.') {
        count++;
      }
    }
    if (count > 3) {
      return "Escaped!";
    } else {
      return "Caught!";
    }
  }