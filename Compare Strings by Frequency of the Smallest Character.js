function numSmallerByFrequency(queries, words){
    //empty array to store smallest character in queries
    let queriesSmall = [];
    //for loop to find the smallest character in queries
    for (let i = 0; i < queries.length; i++){
        let x = queries[i].split("").sort();
        queriesSmall.push(x[0]);
    }
    //empty array to store frequency of smallest letter
    let queriesSmallFreq = [];
    //for loop to find the frequency of smallest letter
    for (let i = 0; i < queries.length; i++){
        let freq = 0;
        for (let j = 0; j < queries[i].length; j++){
            if (queries[i][j] === queriesSmall[i]){
                freq += 1;
            }    
        }
        queriesSmallFreq.push(freq);
    }
    //empty array to store the smallest character in words
    let wordsSmall = [];
    //for loop to find the smallest character in words
    for (let i = 0; i < words.length; i++){
        let x = words[i].split("").sort();
        wordsSmall.push(x[0]);
    }
    //empty array to store frequency of smallest letter
    let wordsSmallFreq = [];
    //for loop to find the frequency of smallest letter
    for (let i = 0; i < words.length; i++){
        let freq = 0;
        for (let j = 0; j < words[i].length; j++){
            if (words[i][j] === wordsSmall[i]){
                freq += 1;
            }    
        }
        wordsSmallFreq.push(freq);
    }
    //empty array to store the answer
    let ans = [];
    //for loop to find f(queries[i]) < f(W)
    for (let i = 0; i < queriesSmallFreq.length; i++){
        let num = 0;
        for (let j = 0; j < wordsSmallFreq.length; j++){
            if (wordsSmallFreq[j] > queriesSmallFreq[i]){
                num += 1;
            }
        }
        ans.push(num);
    }
    return ans;
}