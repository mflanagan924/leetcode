function matrix(array) {
    let x = 0; 
    let y = 0;
    while (y < array.length){
      if (array[x][y] < 0){
        array[x][y] = 0;
        x++;
        y++
      } else {
        array[x][y] = 1;
        x++;
        y++
      }
    }
      return array;
      
  }