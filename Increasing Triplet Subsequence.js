function increasingTriplet(nums) {
    //This function uses two variables, firstMin and secondMin, to keep track of the two smallest numbers encountered so far while iterating through the nums array. If it finds a number greater than both firstMin and secondMin, it means you've found a triplet that satisfies the condition, and it returns true. If it doesn't find such a triplet after looping through the entire array, it returns false.
    let firstMin = Infinity;
    let secondMin = Infinity;

    for (const num of nums) {
        if (num <= firstMin) {
            firstMin = num;
        } else if (num <= secondMin) {
            secondMin = num;
        } else {
            return true; // Found a triplet (firstMin < secondMin < num)
        }
    }

    return false;
}
