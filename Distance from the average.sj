function distancesFromAverage(arr){
  const sum = arr.reduce((a, b) => a + b, 0);
  const avg = (sum / arr.length) || 0;
  let ans = [];
  for (let i = 0; i < arr.length; i++){
      let x = avg - arr[i];
      ans.push(Math.round(x * 100) / 100);
  }
  return ans;
}