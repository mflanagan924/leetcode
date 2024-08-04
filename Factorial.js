function factorial(n)
{
  if (n < 0 || n > 12){
    throw new RangeError;
  }
  if (n === 0){
    return 1;
  }
  let ans = 1;
  while (n > 0){
    ans *= n;
    n--;
  }
  return ans;
}