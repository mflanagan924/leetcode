function validateWord(s){
    s = s.toLowerCase();
    console.log(s)
    const frequency = [];
    
    for (const char of s) {
        let index = frequency.findIndex(item => item[0] === char);
        if (index !== -1) {
            frequency[index][1]++;
        } else {
            frequency.push([char, 1]);
        }
    }
    
    let check = frequency[0][1];
    for (let i = 1; i < frequency.length; i++){
        if (frequency[i][1] !== check){
            return false;
        }
    }
    return true;
}