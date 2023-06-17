function countSeniors(details){
    //empty array to store age
    let age = [];
    //for loop to extract the age
    for (let i = 0; i < details.length; i++){
        let num = details[i][11]+details[i][12]
        age.push(+num);
    }
    //initialize answer
    let ans = 0;
    //for loop to find all who are strictly older than 60
    for (let i = 0; i < age.length; i++){
        if (age[i] > 60){
            ans += 1;
        }
    }
    return ans;
}