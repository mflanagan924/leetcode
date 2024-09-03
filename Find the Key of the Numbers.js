function generateKey(num1, num2, num3){
    let num1Arr = num1.toString().split("");
    if (num1Arr.length < 4){
        let diff = 4 - num1Arr.length;
        while (diff > 0){
            diff--;
            num1Arr.unshift("0");
        }
    }
    let num2Arr = num2.toString().split("");
    if (num2Arr.length < 4){
        let diff = 4 - num2Arr.length;
        while (diff > 0){
            diff--;
            num2Arr.unshift("0");
        }
    }
    let num3Arr = num3.toString().split("");
    if (num3Arr.length < 4){
        let diff = 4 - num3Arr.length;
        while (diff > 0){
            diff--;
            num3Arr.unshift("0");
        }
    }
    let zero = [num1Arr[0], num2Arr[0], num3Arr[0]];
    let first = [num1Arr[1], num2Arr[1], num3Arr[1]];
    let second = [num1Arr[2], num2Arr[2], num3Arr[2]];
    let third = [num1Arr[3], num2Arr[3], num3Arr[3]];
    return +(Math.min(...zero).toString() + Math.min(...first).toString() + Math.min(...second).toString() + Math.min(...third).toString())
}