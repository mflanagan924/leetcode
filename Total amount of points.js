function points(games) {
    let arr = [];
    for (let i = 0; i < games.length; i++){
        
        arr.push(games[i].split(":"));
    }
    let ans = 0;
    for (let i = 0; i < arr.length; i++){
        if (+arr[i][0] > +arr[i][1]){
            ans += 3;
        } else if (+arr[i][0] === +arr[i][1]){
            ans++;
        } 
    }
    return ans;
  }