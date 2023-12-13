function sumOfThree(num){
    let ans = [];
    if (num%3 === 0){
        ans.push(num/3 - 1);
        ans.push(num/3);
        ans.push(num/3 + 1);
    }
    return ans;
}