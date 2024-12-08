function digitize(n) {
    let string = n.toString().split("").reverse();
    for (let i = 0; i < string.length; i++){
      string[i] = +string[i];
    }
    return string;
  }