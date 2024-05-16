function withoutLast(arr) {
    // Fix it
    arr = [...arr];
    arr.pop(); // removes the last element
    return arr;
  }