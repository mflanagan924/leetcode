function rearrangeCharacters(s, target){
    //split target string into array of letters
    let targetArray = target.split("");
    //find unique letters in target
    let uniqueTarget = [... new Set(targetArray)];
    //empty array to store frequency of letters in target
    let uniqueTargetFreq = [];
    //for loop to find frequency of letters in target
    for (let i = 0; i < uniqueTarget.length; i++){
        let smallArr = [];
        smallArr.push(uniqueTarget[i]);
        let freq = 0;
        for (let j = 0; j < target.length; j++){
            if (uniqueTarget[i] === target[j]){
                freq += 1;
            }
        }
        smallArr.push(freq);
        uniqueTargetFreq.push(smallArr);
    }
    //empty array to store frequency of target letters in "s" string
    let sTargetFreq = [];
    //for loop to find the frequency of target letters in "s" string
    for (let i = 0; i < uniqueTarget.length; i++){
        let smallArr = [];
        smallArr.push(uniqueTarget[i]);
        let freq = 0;
        for (let j = 0; j < s.length; j++){
            if (uniqueTarget[i] === s[j]){
                freq += 1;
            }
        }
        smallArr.push(freq);
        sTargetFreq.push(smallArr);
    }
    //empty array to store dividend of copies
    let divide = [];
    //for loop to find th dividend of copies
    for (let i = 0; i < uniqueTargetFreq.length; i++){
        let x = Math.floor(sTargetFreq[i][1]/uniqueTargetFreq[i][1]);
        divide.push(x);
    }
    //find the minimum dividend which is the maximum number of copies of target in s
    return Math.min(...divide);
}