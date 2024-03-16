function average(salary){
    //Get the total sum and subtract the minimum and maximum value in the array. Finally divide the result by n - 2.
    let sum = salary.reduce((partialSum, a) => partialSum + a, 0);
    return (sum - Math.max(...salary) - Math.min(...salary))/(salary.length - 2);
}