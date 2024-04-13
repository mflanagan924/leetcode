function cookingTime(neededPower, minutes, seconds, power) {
    let totalTime = (minutes * 60) + seconds;
    let divide = (+neededPower.replace('W', ''))/(+power.replace('W', ''));
    let newTime = Math.ceil(totalTime * divide);
    let min = Math.floor(newTime/60);
    let sec = newTime - min * 60;
    return min.toString() + " minutes " + sec.toString() + " seconds";
  }