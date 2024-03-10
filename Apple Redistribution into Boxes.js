function minimumBoxes(apple, capacity){
    capacity.sort(function (a, b) {  return b - a;  });
    let total = apple.reduce((partialSum, a) => partialSum + a, 0);
    let count = 0;
    for (let i = 0; i < capacity.length; i++){
        if (total > 0){
            total -= capacity[i];
            count++;
        }
    }
    return count;
}