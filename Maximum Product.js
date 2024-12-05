function adjacentElementsProduct(array) {
    let arr = [];
    for (let i = 1; i < array.length; i++) {
      arr.push(array[i]*array[i-1])
    }
    return Math.max(...arr)
  }