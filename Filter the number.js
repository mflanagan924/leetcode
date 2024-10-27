function filterString(value) {
    let ans = "";
    for (let i = 0; i < value.length; i++){
      if (isNaN(value[i]) === false){
        ans += value[i];
      }
    }
    return +ans;
  }