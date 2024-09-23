function countSheeps(sheep) {
    let ans = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            ans++;
        }
    }
    return ans
}