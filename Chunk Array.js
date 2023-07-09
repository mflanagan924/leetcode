function chunk(arr, size){
    //empty array to store answer
    let ans = [];
    //for loop to go through arr, it increases each step by size
    for (let i = 0; i < arr.length; i+=size){
        //empty array to store chunks
        let smallArr = [];
        //for loop to populate the chunks, need to make sure that the size is less than size + i, to keep it moving along th array
        for (let j = i; j < size + i && j < arr.length; j++) {
      if (arr[j] !== null) { // Filter out null values
        smallArr.push(arr[j]);
            }
        }
        ans.push(smallArr);
    }
    return ans;
}