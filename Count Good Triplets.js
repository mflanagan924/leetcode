function countGoodTriplets(arr, a, b, c){
    //initialize answer
    let ans = 0;
    //for loop to check 0 <= i < j < k < arr.length |arr[i] - arr[j]| <= a |arr[j] - arr[k]| <= b |arr[i] - arr[k]| <= c
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            for (let k = j + 1; k < arr.length; k++){
                if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <=c){
                    ans += 1;
                }
            }
        }
    }
    return ans;
}