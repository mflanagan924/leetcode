function findMinimumOperations(s1, s2, s3){
    let common = "";
    for (let i = 0; i < s1.length; i++){
        if (s1[i] === s2[i] && s1[i] === s3[i]){
            common += s1[i];
        } else{
            break;
        }
    }
    if (common.length === 0){
        return -1;
    }
    return Math.abs(s1.length - common.length) + Math.abs(s2.length - common.length) + Math.abs(s3.length - common.length);
}