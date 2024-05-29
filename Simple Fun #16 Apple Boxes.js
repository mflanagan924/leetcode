function appleBoxes(k) {
    let even = 0;
    let odd = 0;
    for (let i = 1; i <= k; i++){
        if (i%2 > 0){
            odd += i * i;
        } else if (i%2 === 0){
            even += i * i;
        }
    }
    return even - odd;
  }
