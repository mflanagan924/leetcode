function numberOfAlternatingGroups(colors){
    let ans = 0;
    if (colors[colors.length-1] !== colors[0] && colors[1] !== colors[0]){
        ans++;
    }
    if (colors[0] !== colors[colors.length-1] && colors[colors.length-1] !== colors[colors.length-2]){
        ans++;
    }
    for (let i = 1; i <= colors.length-2; i++){
        if (colors[i] !== colors[i-1] && colors[i] !== colors[i+1]){
            ans++;
        }
    }
    return ans;
}