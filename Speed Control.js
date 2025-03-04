function gps(s, x) {
    if (x.length <= 1) return 0;
      let arr = [];
      for (let i = 1; i < x.length; i++){
      let delta_distance = x[i] - x[i-1];
      arr.push(Math.floor((3600 * delta_distance) / s));
      }
      return Math.max(...arr);
  }