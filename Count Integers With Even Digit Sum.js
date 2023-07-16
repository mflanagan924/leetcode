function countEven(num){
    //empty array to store all numbers from 1 to num
    let arr = [];
    //for loop to push all numbers from 1 to num as seperated string integers
    for (let i = 1; i <= num; i++){
        arr.push(i.toString().split(""));
    }
    //empty array to store the digit sums
    let arrSum = [];
    //for loop to get the digit sums
    for (let i = 0; i < arr.length; i++){
        let sum = 0;  
        for (let j = 0; j < arr[i].length; j++){
            sum += +arr[i][j];  
        }
        arrSum.push(sum);
    }
    //intialize answer
    let ans = 0;
    //for loop to find all even digit sums
    for (let i = 0; i < arrSum.length; i++){
        if (arrSum[i]%2 === 0){
            ans += 1;
        }
    }
    return ans;
}