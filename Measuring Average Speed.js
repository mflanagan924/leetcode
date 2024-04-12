function calculateSpeed(distance, time) {
    let newDistance;
    //km conversion
    if (distance[distance.length-2] === "k"){
        newDistance = +distance.replace("km", "")*1000;
    //meter conversion
    } else {
        newDistance = (+distance.replace("m", ""));
    }
    let newTime;
    //minute conversion
    if (time[time.length-1] === "n"){
        newTime = (+time.replace("min", "")) * 60;
    } else {
        newTime = (+time.replace("s", ""));
    }
    let meterPerSec = (newDistance/newTime);
    let mph = Math.round(meterPerSec * 2.23694);
    return mph.toString()+"mph";
    
}

