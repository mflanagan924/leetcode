function twoSum(numbers, target){
    //intialize answer
    let ans = [];
    //double for loop to find the zero index of 2 numbers that add up to target
    for (let i = 0; i < numbers.length; i++){
        for (let j = i + 1; j < numbers.length; j++){
            if (numbers[i] + numbers[j] === target){
                //add the 1 index position of these numbers
                ans.push(i+1);
                ans.push(j+1);
                return ans;
            }
        }
    }
}