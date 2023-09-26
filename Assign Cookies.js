function findContentChildren(g, s){
    //initialize answer
    let ans = 0;
    //sort g and s in ascending order
    g.sort(function (a, b) {  return a - b;  });
    s.sort(function (a, b) {  return a - b;  });
    //initialize counter of s array
    let j = 0;
    //initialize counter of g array
    let h = 0;
    //while loop to check if s[j] >= g[h]
    while (j < s.length){
        //if true than add one to answer and move both j and h up by one
        if (s[j] >= g[h]){
            ans += 1;
            j++;
            h++;
        //if not true than only move j up by one
        } else {
            j++;
        }
    }
    return ans;
}