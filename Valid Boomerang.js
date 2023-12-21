function isBoomerang(points){
    if (points[0][0] === points[1][0] && points[0][1] === points[1][1]){
        return false;
    }
    if (points[0][0] === points[2][0] && points[0][1] === points[2][1]){
        return false;
    }
    if (points[1][0] === points[2][0] && points[1][1] === points[2][1]){
        return false;
    }
    let rise = Math.abs(points[0][1] - points[1][1]);
    let run = Math.abs(points[0][0] - points[1][0]);
    let slope = rise/run;
    let riseTwo = Math.abs(points[0][1] - points[2][1]);
    let runTwo = Math.abs(points[0][0] - points[2][0]);

    let slopeTwo = riseTwo/runTwo;
    let riseThree = Math.abs(points[1][1] - points[2][1]);
    let runThree = Math.abs(points[1][0] - points[2][0]);
    let slopeThree = riseThree/runThree;
    if (slope === slopeTwo && slope === slopeThree){
        return false;
    }
    return true;
}

