function angleClock(hour, minutes){
    let minutesAngle = (minutes/60)*360;
    let hourAngle;
    if (hour === 12){
        hourAngle = 0;
    } else {
        hourAngle = (hour/12) * 360;
    }
    let hourAngleAdd = (minutes/60) * 30;
    let hourAngleTotal = hourAngle + hourAngleAdd;
    let diff1 = Math.abs(hourAngleTotal - minutesAngle);
    if (diff1 > 180){
        return 360 - diff1;
    }
    return diff1;
}
