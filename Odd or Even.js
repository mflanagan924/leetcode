function oddOrEven(array) {
    let ans = 0
     
    for(let i = 0; i < array.length; i++){
      ans += array[i]
    }
    
    if(ans % 2 === 0){
      return 'even'
    } else
      return 'odd'
  }