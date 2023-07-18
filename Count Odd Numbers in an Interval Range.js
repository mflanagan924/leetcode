function countOdds(low, high) {
    //initialize answer
    let ans = 0;
    //for loop to check if the number is odd
    for (let i = low; i <= high; i++){
        if (i%2 > 0){
            ans += 1;
        }
    }
    return ans;
}