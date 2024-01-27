function kWeakestRows(mat, k){
    let arr = [];
    for (let i = 0; i < mat.length; i++){
        let count = 0;
        let smallArr = [];
        for (let j = 0; j < mat[i].length; j++){
            if (mat[i][j] === 1){
                count++;
            } 
        }
        smallArr.push(count);
        smallArr.push(i);
        arr.push(smallArr);
    }
    arr.sort(function (a, b) {  return a[0] - b[0];  });
    let ans = [];
    for (let i = 0; i < k; i++){
        ans.push(arr[i][1]);
    }
    return ans;
}

