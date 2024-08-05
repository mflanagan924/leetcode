function highAndLow(numbers){
    let arr = numbers.split(" ");
    let arr2 = [];
    for (let i = 0; i < arr.length; i++){
        let x = parseInt(arr[i]);
        arr2.push(x);
    }
    let min = Math.min(...arr2);
    let max = Math.max(...arr2);
    return max.toString() + " " + min.toString();
  }