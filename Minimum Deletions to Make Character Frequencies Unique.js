function minDeletions(s){
    //split string into array of letters
    let arr = s.split("");
    //find all unique letters
    let unique = [... new Set(arr)];
    //empty array to hold the frequency of each letter
    let freq = [];
    //for loop to find the frequency of each letter
    for (let i = 0; i < unique.length; i++){
        let smallArr = [];
        let count = 0;
        for (let j = 0; j < arr.length; j++){
            if (arr[j] === unique[i]){
                count += 1;
            }
        }
        smallArr.push(unique[i]);
        smallArr.push(count);
        freq.push(smallArr);
    }
    //arrange the frequency array in descending order
    freq.sort(function(a,b){return b[1]-a[1]});
    //initialize the answer
    let count = 0;
    //for loop to check if frequency of letters are the same, if so, decrease the number frequency by one and increase the count by one
    for (let i = 1; i < freq.length; i++){
        //takes into account that numbers after current index also need to be decreased
        if (freq[i][1] >= freq[i-1][1]){
            //saves the original value
            let x = freq[i][1];
            //changes it to one less than previous
            freq[i][1] = freq[i-1][1] - 1;
            //increases count by difference from original to current
            count += x - freq[i][1];
        }
    }
    //for loop to correct for when there is a negative freq
    for (let i = 0; i < freq.length; i++){
        if (freq[i][1] < 0){
            count += freq[i][1];
        }
    }
    //return the count or the minium number of character needed to delete to make s good
    return count;
}