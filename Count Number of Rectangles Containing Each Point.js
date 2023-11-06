function countRectangles(rectangles, points){
    //intialize answer
    let ans = [];
    //double for loop to check if each point (x & y) are less than or equal to the rectangle
    for (let i = 0; i < points.length; i++){
        let num = 0;
        for (let j = 0; j < rectangles.length; j++){
            if (points[i][0] <= rectangles[j][0] && points[i][1] <= rectangles[j][1]){
                num += 1;
            }
        }
        ans.push(num);
    }
    return ans;
}