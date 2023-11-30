function countPrimeSetBits(left, right){
    //initialize final answer
    let ans = 0;
    //store all primes
    let prime = [2, 3, 5, 7, 11, 13, 17, 19];
    //for loop to check all numbers from left to right
    for (let i = left; i <= right; i++){
        //initialize binary of current number
        let num = i.toString(2);
        //initialize the bit count of current number
        let count = 0;
        //for loop to find the number of "1"s in current binary represenetation of number
        for (let i = 0; i < num.length; i++){
            if (num[i] === "1"){
                count++;
            }
        }
        //check if that number has a prime number of bits
        if (prime.indexOf(count) >= 0){
            ans++;
        }
    }
    return ans;
}