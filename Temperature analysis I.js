function lowestTemp(t) {
    if (t === ""){
        return null;
    }
  let arr = t.split(" ");
  let min = 0;
  for (let i = 0; i < arr.length; i++){
      if (+arr[i] < min){
          min = +arr[i];
      }
  }
  return min;
}