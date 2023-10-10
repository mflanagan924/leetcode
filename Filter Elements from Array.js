function filter(arr, fn) {
    //empty array to store answer
    let ans = [];
    //for loop to check truthiness of each arr[i]
    for (let i = 0; i < arr.length; i++) {
        //only push true answers
        if (fn(arr[i], i)) {
            ans.push(arr[i]);
        }
    }
    return ans;
}