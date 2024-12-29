function uniTotal(string) {
    let total = 0;
    for (let i = 0; i < string.length; i++) {
      total += string.codePointAt(i);
    }
    return total;
  }