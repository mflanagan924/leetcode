function findRestaurant(list1, list2){
    //empty array to store words and index sum
    let arr = [];
    //empty array to store index sum
    let arrIndexSum = [];
    //for loop to find the similar words and their index sum
    for (let i = 0; i < list1.length; i++){
        let smallArr = [];
        if (list2.indexOf(list1[i]) >= 0){
            smallArr.push(list1[i]);
            arrIndexSum.push(i+list2.indexOf(list1[i]));
            smallArr.push(i+list2.indexOf(list1[i]));
            arr.push(smallArr);
        }
    }
    //find minimum index sum
    let min = Math.min(...arrIndexSum);
    //empty array to store answer
    let ans = [];
    //for loop to find words with the minimum index sum
    for (let i = 0; i < arr.length; i++){
        if (arr[i][1] === min){
            ans.push(arr[i][0]);
        }
    }
    return ans;
}