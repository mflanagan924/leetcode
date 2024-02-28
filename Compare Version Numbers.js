function compareVersion(version1, version2){
    let v1 = version1.split(".");
    let v2 = version2.split(".");
    console.log(v1)
    console.log(v2)
    let length = Math.max(v1.length, v2.length);
    let lengthDiff = Math.abs(v1.length - v2.length);
    console.log(lengthDiff)
    if (v1.length > v2.length){
        for (let i = 0; i < lengthDiff; i++){
            v2.push("0");
        }
    }
    if (v1.length < v2.length){
        for (let i = 0; i < lengthDiff; i++){
            v1.push("0");
        }
    }
    for (let i = 0; i < length; i++){
        if (+v1[i] < +v2[i]){
            return -1;
        } else if (+v1[i] > +v2[i]){
            return 1;
        }
    }
    return 0;
}