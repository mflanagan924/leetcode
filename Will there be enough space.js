function enough(cap, on, wait) {
    let diff = cap - on
    if (diff >= wait){
      return 0
    } else {
      return wait - diff
    }
  }