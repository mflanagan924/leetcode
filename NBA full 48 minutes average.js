function pointsPer48(ppg, mpg) {
    if (ppg === 0){
      return 0;
    }
    let num = (48/mpg)*ppg
  return Math.round(num * 10) / 10;
  }