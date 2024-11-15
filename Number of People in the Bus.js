var number = function(busStops){
    let remain = 0;
    for (let  i = 0; i < busStops.length; i++){
      remain +=busStops[i][0] - busStops[i][1]
    
    }return remain
  }