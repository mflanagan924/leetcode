function getSmallestString(s) {
    let arr = [s];
    s = s.split("").map(Number);  // Convert each character to a number
    let x = s;
    for (let i = 0; i < s.length - 1; i++) {
        let first = s[i];
        let second = s[i + 1];
        let firstNum = s[i] % 2;
        let secondNum = s[i + 1] % 2;
        if (firstNum === secondNum) {
            s[i] = second;
            s[i + 1] = first;          
            arr.push([...s].join(""));  // Create a copy of s and push it into arr
            s[i] = first;
            s[i + 1] = second;
        }
    }
    arr.sort();
    if (arr.length === 0){
        return s.join("");
    }
    return arr[0];
}