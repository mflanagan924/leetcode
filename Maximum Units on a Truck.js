function maximumUnits(boxTypes, truckSize){
    //sorts boxTypes in descending order
    boxTypes.sort(function(a, b) {
  return b[1] - a[1];
});
    //empty array to store original number of boxes
    let num = [];
    //for loop to save the original number of boxes
    for (let i = 0; i < boxTypes.length; i++){
        num.push(boxTypes[i][0]);
    }
    //for loop to remove boxes from truck starting with the boxes that contain the most items taking into account the truck size
    for (let i = 0; i < boxTypes.length; i++){
        if (boxTypes[i][0] <= truckSize){
            truckSize = truckSize - boxTypes[i][0];
            boxTypes[i][0] = 0;
        } else if (boxTypes[i][0] > truckSize){
            boxTypes[i][0] -= truckSize;
            truckSize = truckSize - truckSize;
        }
    }
    //initialize answer
    let ans = 0;
    //for loop to find out how many boxes were taken of each size and multiply it by their content to find total items
    for (let i = 0; i < num.length; i++){
        ans += ((num[i]-boxTypes[i][0])*boxTypes[i][1]);
    }
    return ans;
}