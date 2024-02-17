function convertTime(current, correct){
    current = current.split(":");
    let currentMinutes = +current[0] * 60 + (+current[1]);
    console.log(currentMinutes)
    correct = correct.split(":");
    let correctMinutes = +correct[0] * 60 + (+correct[1]);
    let ans = 0;
    while (correctMinutes - currentMinutes > 0){
        if (correctMinutes - currentMinutes >= 60){
            correctMinutes -= 60;
            ans++;
        } else if (correctMinutes - currentMinutes >= 15){
            correctMinutes -= 15;
            ans++;
        } else if (correctMinutes - currentMinutes >= 5){
            correctMinutes -= 5;
            ans++;
        } else if (correctMinutes - currentMinutes >= 1){
            correctMinutes -= 1;
            ans++;
        }
    }
    return ans;
}