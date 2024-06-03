function minimumChairs(s){
    let arr = [];
    let count = 0;
    for (let i = 0; i < s.length; i++){
        if (s[i] === "E"){
            count++;
            arr.push(count);
        } else if (s[i] === "L"){
            count--;
            arr.push(count);
        }
    }
    return Math.max(...arr);
}