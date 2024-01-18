function firstMissingPositive(nums){
    const numSet = new Set(nums);

    let number = 1;
    while (numSet.has(number)) {
        number++;
    }

    return number;
}