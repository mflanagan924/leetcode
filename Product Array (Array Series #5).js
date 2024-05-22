function productArray(numbers){
    let ans = [];
    for (let i = 0; i < numbers.length; i++){
        let product = 1;
        for (let j = 0; j < numbers.length; j++){
            if (i !== j){
                product *= numbers[j];
            }
        }
        ans.push(product);
    }
    return ans;
  }