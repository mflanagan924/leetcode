function replaceElements(arr){
    //checks for the case where there in only one element in array
    if (arr.length === 1){
        arr[0] = -1;
        return arr;
    }
    //initialize the greatest number
    let greatest = arr[arr.length - 1];
    //temperary array to store the greatest numbers
    let temp = [];
    //for loop to loop at the greatest number from right to left
    for (let i = arr.length - 2; i >= 0; i--){
        if (arr[i+1] > greatest){
            greatest = arr[i+1];
            temp.push(greatest);
        } else {
            temp.push(greatest);
        }
    }
    //reverse the temp array so that it is inline with the original arr
    temp.reverse();
    //set the last index of the array
    arr[arr.length - 1] = -1;
    //for loop to change each index
    for (let i = 0; i < temp.length; i++){
        arr[i] = temp[i];
    }
    return arr;
}