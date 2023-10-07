function maxWidthOfVerticalArea(points){
    //sort points array in ascending order based on x value
    points.sort(function (a, b) {  return a[0] - b[0];  });
    //initialize answer
    let ans = 0;
    //for loop to check if the widest vertical area (only need to check the difference between x values)
    for (let i = 1; i < points.length; i++){
        if (points[i][0] - points[i-1][0] > ans){
            ans = points[i][0] - points[i-1][0];
        }
    }
    return ans;
}