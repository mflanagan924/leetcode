function map(arr, fn){
    //empty array to store answer
    let ans = [];
    //for loop to push function into answer
    for (let i = 0; i < arr.length; i++){
        ans.push(fn(arr[i], i));
    }
    return ans;
}