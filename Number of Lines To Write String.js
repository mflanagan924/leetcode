function numberOfLines(widths, s){
    let lines = 1;
    let remainder = 0;
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < s.length; i++){
        let index = abc.indexOf(s[i]);
        if (remainder + widths[index] <= 100){
            remainder = remainder + widths[index];
        } else {
            lines += 1;
            remainder = widths[index];
        }
    }
    return [lines, remainder];
}