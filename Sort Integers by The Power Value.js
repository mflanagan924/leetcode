function getKth(lo, hi, k){
    let arr = [];
    for (let i = lo; i <= hi; i++){
        arr.push(i);
    }
    let arr2 = [];
    for (let i = 0; i < arr.length; i++){
        let smallArr = [];
        smallArr.push(arr[i]);
        let x = arr[i];
        let count = 0;
        while (x > 1){
            if (x%2 === 0){
                x = x/2;
                count++;
            } else {
                x = 3*x+1;
                count++;
            }
        }
        smallArr.push(count);
        arr2.push(smallArr);
    }
    arr2.sort(function (a, b) {  return a[0] - b[0];  });
    arr2.sort(function (a, b) {  return a[1] - b[1];  });
    let ans = [];
    for (let i = 0; i < arr2.length; i++){
        ans.push(arr2[i][0]);
    }
    return ans[k-1];
}