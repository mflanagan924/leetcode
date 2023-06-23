function numberOfWeakCharacters(properties){
    //sorts properties in groups if they have the same attack value then in ascending order based on their defense, if they doen't have the same attack value than in ascending order based on attack
    properties.sort((a,b) => (a[0] == b[0]) ? (a[1]-b[1]) : (b[0]-a[0]));
    //initialize ans and max value to compare
    let ans = 0, max = 0;
    //for loop to check if the defense value is less than max, if true increase answer by one if not change the max value to the defense value of that index
    for (let [_, d] of properties)
    d < max ? ans++ : max = d;
    return ans;
}