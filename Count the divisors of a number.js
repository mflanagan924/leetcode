function getDivisorsCnt(n) {
    let ans = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            if (i * i === n) {
                ans++;  // Perfect square
            } else {
                ans += 2;  // i and n/i
            }
        }
    }
    return ans;
}