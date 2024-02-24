function findDifferentBinaryString(nums){
    //Iterate through the array, and for each number, check number['index of the number'] and append in ans the opposite of whats there.
    //This way, we will create a unique string which doesn't already exists in the vector.
    //eg:-
    //1101 -- 1011 -- 1000 -- 0110
    //0___-- 01_ -- 011_ -- 0111
    //0111 will be a new string
    let ans = "";
    for (let i = 0; i < nums.length; i++){
        if (nums[i][i] === "1"){
            ans += "0";
        } else {
            ans += "1";
        }
    }
    return ans;
}