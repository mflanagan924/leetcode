function kthDistinct(arr, k){
    //find unique values in arr
    let unique = [... new Set(arr)];
    //empty array to store frequency of unique values
    let freq = [];
    //for loop to find frequency of unique values
    for (let i = 0; i < unique.length; i++){
        let smallArr = [];
        let num = 0;
        for (let j = 0; j < arr.length; j++){
            if (unique[i] === arr[j]){
                num += 1;
            }
        }
        smallArr.push(unique[i]);
        smallArr.push(num);
        freq.push(smallArr);
    }
    //empty array to store distinct values
    let distinctArr = [];
    //for loop to find unique values that only appear once (distinct)
    for (let i = 0; i < freq.length; i++){
        if (freq[i][1] === 1){
            distinctArr.push(freq[i][0]);
        }
    }
    //find the kth ditinct string, if doesn't exist return empty string
    if (distinctArr.length>= k){
        return distinctArr[k - 1];
    }
    return "";
}