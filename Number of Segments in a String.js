function countSegments(s){
    //if empty string
    if (s.length === 0){
        return 0;
    }
    //split array by spaces
    let arr = s.split(" ");
    //intialize answer
    let ans = 0;
    //for loop to remove spaces
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== ""){
            ans += 1;
        }
    }
    return ans;
}
