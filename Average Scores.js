function average(scores) {
    let total = scores.reduce((partialSum, a) => partialSum + a, 0);
  return Math.round(total/scores.length);
}