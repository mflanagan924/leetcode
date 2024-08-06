function missingNo(nums) {
    nums.sort(function (a, b) {  return a - b;  });
    for (let i = 0; i <= 100; i++){
        if (i !== nums[i]){
            return i;
        }
    }
  }