function nearestSq(n){
    let lower = Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n));
    let higher = Math.ceil(Math.sqrt(n)) * Math.ceil(Math.sqrt(n));
    if (Math.abs(n - lower) < Math.abs(n - higher)){
        return lower;
    } else if (Math.abs(higher - n) < Math.abs(n- lower)){
        return higher;
    } else {
        return higher;
    }
}