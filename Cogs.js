function cogRpm(cogs) {
    let gearRatio = -cogs[0]/cogs[1];
    if (cogs.length === 2){
      return gearRatio;
    }
    let arr = [];
    for (let i = 0; i < cogs.length-1; i++){
        arr.push(cogs[i]/cogs[i+1]);
    }
    let ans = -arr[0];
    for (let i = 1; i < arr.length; i++){
        ans *= -arr[i];
    }
    return ans;
  }
  
  