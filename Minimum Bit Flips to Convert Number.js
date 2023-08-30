function minBitFlips(start, goal){
    //returns binary of start
    let startBinary = start.toString(2);
    //return binary of goal
    let goalBinary = goal.toString(2);
    //initialize the difference of length between binaries of start and goal
    let diff = 0;
    //if the length isn't the same, get the length
    if (startBinary.length !== goalBinary.length){
        diff = Math.abs(startBinary.length - goalBinary.length);
    }
    //if start is longer, add leading zeros to goal
    if (startBinary.length > goalBinary.length){
        goalBinary = goalBinary.split("");
        for (let i = 0; i < diff; i++){
            goalBinary.unshift("0");
        }
        goalBinary = goalBinary.join("");
    //if start is shorter, add leading zeros to start
    } else if (startBinary.length < goalBinary.length){
        startBinary = startBinary.split("");
        for (let j = 0; j < diff; j++){
            startBinary.unshift("0");
        }
        startBinary = startBinary.join("");
    }
    //initialize answer
    let ans = 0;
    //for loop to count the number of flips to make the binaries equal
    for (let i = 0; i < startBinary.length; i++){
        if (startBinary[i] !== goalBinary[i]){
            ans += 1;
        }
    }
    return ans;
}