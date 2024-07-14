function numberToPower(number, power){
    if (power === 0){
        return 1;
    }
let arr = [];
for (let i = 0; i < power; i++){
    arr.push(number);
}
let ans = 1;
for (let i = 0; i < arr.length; i++){
    ans *= arr[i];
}
return ans;
}