function countOperations(num1, num2){
    //initialize answer
    let ans = 0;
    //while loop to continue until num1 or num2 equal 0
    while (num1 && num2 !== 0){
        num1 > num2 ? (num1 -= num2) : (num2 -= num1);
        ans++;
    }
    return ans;
}
