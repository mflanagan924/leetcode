function destCity(paths){
    //initialize final destination
    let final = paths[0][1];
    //if path length is 1 then return final location
    if (paths.length === 1){
        return final;
    }
    let i = 1;
    //use while loop instead of for loop to reinitialize the loop every time paths[i][0] is equal to final
    while (i < paths.length) {
    if (paths[i][0] === final) {
      final = paths[i][1];
      i = 1; // Reinitialize i to start from the beginning
    } else {
      i++; // Move to the next path
    }
  }
  return final;
}