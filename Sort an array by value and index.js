function sortByValueAndIndex(array)
{
  let arr = [];
  for (let i = 0; i < array.length; i++){
    let product = (i+1)*array[i];
    let smallArr = [];
    smallArr.push(product);
    smallArr.push(array[i]);
    arr.push(smallArr);
  }
  arr = arr.sort(function (a, b) {  return a[0] - b[0];  });;
  let ans = [];
  for (let i = 0; i < arr.length; i++){
    ans.push(arr[i][1]);
  }
  return ans;
}