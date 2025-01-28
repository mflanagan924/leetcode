const findSquares = num => {
    let first = 1;
    let second = 2;
      while ((second*second) - (first*first) !== num){
        first++;
        second++;
      }
      console.log(first)
      console.log(second)
      let ans = (second*second).toString() + '-' + (first*first).toString();
      return ans;
    };