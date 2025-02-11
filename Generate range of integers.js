function generateRange(min, max, step){
    let ans  = [];
    for( let i = min; i <= max; i+= step) {
      ans.push(i);
    }
    return ans;
  }