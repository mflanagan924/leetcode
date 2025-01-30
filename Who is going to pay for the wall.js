function whoIsPaying(name){
    let ans = [name];
    if (name.length <=2){
      return ans;
    }
    let trun = "";
    for (let i = 0; i < 2; i++){
      trun += name[i];
    }
    ans.push(trun);
    return ans;
  }