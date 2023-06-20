function findThePrefixCommonArray(A, B){
    //get length of frequency array
    let n = A.length;
    //initialize frequency array
    let freq = [];
    //initialize count
    let count = 0;
    //for loop to populate the initial frequency array
    for (let i = 1; i <= n; i++){
        let smallArr = [];
        smallArr.push(i);
        smallArr.push(0);
        freq.push(smallArr);
    }
    //for loop to push the frequency
    let arr = [];
    //for loop to store the frequency at each step
    let arr2 = [];
    //for loop to find the frequency at each step
    for (let i = 0; i < A.length; i++){
        let x = A[i];
        let y = B[i];
        for (let j = 0; j < freq.length; j++){
            if (freq[j][0] === x){
                freq[j][1] += 1;
            }
            if (freq[j][0] === y){
                freq[j][1] += 1;
            }
        }
        //In this updated code, a new freq array is created for each iteration of the second loop. The JSON.parse(JSON.stringify(freq)) expression is used to create a deep copy of the freq array, ensuring that each iteration of arr.push() adds a separate copy to arr.
        arr.push(JSON.parse(JSON.stringify(freq)));
        arr2.push(arr[arr.length - 1]);
  }
    //initialize the answer
    let ans = [];
    //for loop to find th count at each step
    for (let l = 0; l < arr2.length; l++){
        for (let m = 0; m < arr2[l].length; m++){
            if (arr2[l][m][1] === 2){
                count +=1;
            }
        }
        ans.push(count);
        count = 0;
    }
    return ans;
}