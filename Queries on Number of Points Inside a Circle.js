function countPoints(points, queries){
    //empty array to store final answer
    let answer = [];
    //double for loop to check each querie vs each point making sure the euclidean distance is less than or equal to the radius of each querie
    for (let i = 0; i < queries.length; i++){
        let num = 0;
        for (let j = 0; j < points.length; j++){
            if (Math.sqrt(Math.pow(queries[i][0] - points[j][0], 2) + Math.pow(queries[i][1] - points[j][1], 2)) <= queries[i][2]){
                num += 1;
            }
        }
        answer.push(num);
    }
    return answer;
}