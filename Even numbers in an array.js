function evenNumbers(array, number) {
    let ans = [];
    let count = 0;
    for (let i = array.length-1; i >= 0; i--){
            if (count < number && array[i]%2 === 0){
                ans.push(array[i]);
                count++;
          
        }
            
            
        
    }
    return ans.reverse();
  }