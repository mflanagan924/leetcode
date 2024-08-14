function stackHeight2d(layers) {
    if (layers === 0){
      return 0;
    }
  if (layers === 1){
    return 1;
  } else {
    return 1 + (.5 * Math.sqrt(3) * (layers -1));
  }
}