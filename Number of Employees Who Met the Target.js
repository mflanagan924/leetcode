function numberOfEmployeesWhoMetTarget(hours, target){
    //initialize answer
    let ans = 0;
    //for loop to find employees who have worked equal to or greater than target hours
    for (let i = 0; i < hours.length; i++){
        if (hours[i] >= target){
            ans += 1;
        }
    }
    return ans;
}