function findPeaks(mountain){
    //empty array to store answer
    let ans = [];
    //check array from index 1 to length - 1
    for (let i = 1; i < mountain.length - 1; i++){
        //if current index is greater than neighbors
        if (mountain[i] > mountain[i-1] && mountain[i] > mountain[i+1]){
            ans.push(i);
        }
    }
    return ans;
}