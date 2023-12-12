function minOperations(n){
    let arr = [];
    for (let i = 0; i < n; i++){
        arr.push((2*i)+1);
    }
    console.log(arr)
    const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum)
    let target = sum/arr.length;
    console.log(target)
    let a;
    if (arr.length%2 === 0){
        a = arr.length/2;
    } else {
        a = Math.ceil(arr.length/2 - 1);
    }
    let ans = 0;
    for (let i = 0; i < a; i++){
        ans += target - arr[i];
    }
    return ans;
}