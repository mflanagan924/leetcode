function minChanges(s){
    //breaks down into chunks of 2
    const chunkSize = 2;
    //intialize answer
    let ans = 0;
    //for loop that checks each chunk, if "01" or "10" than add 1
    //After noticing the first hint, we can decompose the whole string into disjoint blocks of size 2 and find the minimum number of changes required to make those blocks beautiful.
    for (let i = 0; i < s.length; i += chunkSize) {
        let x = (s.slice(i, i + chunkSize));
        if (x === "01" || x === "10"){
            ans += 1;
        }
    }
    return ans;
}