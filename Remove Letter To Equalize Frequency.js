function equalFrequency(word){
    //splits string into array of letters
    let arr = word.split("");
    //finds all unique letters
    let unique = [...new Set(arr)];
    //empty array to store the frequency of each letter
    let freqArr = [];
    //for loop to find the frequency of each letter
    for (let i = 0; i < unique.length; i++){
        let smallArr = [];
        smallArr.push(unique[i]);
        let count = 0;
        for (let j = 0; j < arr.length; j++){
            if (arr[j] === unique[i]){
                count += 1;
            }
        }
        smallArr.push(count);
        freqArr.push(smallArr);
    }
    //sorts freqArr in descending order
    freqArr.sort(function(a,b){return b[1] - a[1]});
    //checks if the last letter has frequency of 1 and all of the other letters don't
    if (freqArr[freqArr.length-1][1] === 1 && freqArr[freqArr.length - 2][1] > 1){
        freqArr[freqArr.length-1][1] = freqArr[freqArr.length-1][1] - 1;
    } else {
    //removes one letter from highest frequency letter
    freqArr[0][1] = freqArr[0][1] - 1;
    }
    //takes into account if the first letter now has frequency of zero
    if (freqArr[0][1] === 0){
        freqArr.shift();
    }
    //takes into account if the last letter now has frequency of zero
    if (freqArr[freqArr.length -1][1] === 0){
        freqArr.pop();
    }
    //makes this letter's new frequency the comparison
    let compare = freqArr[0][1];
    //initialize the answer as true
    let answer = true;
    //for loop to check if every letter in the frequency array appears the same number of times
    for (let i = 0; i < freqArr.length; i++){
        if (freqArr[i][1] !== compare){
            answer = false;
        }  
    }
    return answer;
}