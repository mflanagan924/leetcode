function nbYear(p0, percent, aug, p) {
    let ans = 0;
    while (p0 < p){
        ans++;
        p0 = Math.floor(p0 + (p0 * (percent/100)) + aug);
        console.log(p0)
    }
    return ans;
}