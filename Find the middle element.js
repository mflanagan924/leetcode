function gimme (triplet) {
    let max = Math.max(...triplet);
    let min = Math.min(...triplet);
    for (let i = 0; i < triplet.length; i++) {
      if (triplet[i] !== max && triplet[i] !== min) {
        return i;
      }
    }
  }