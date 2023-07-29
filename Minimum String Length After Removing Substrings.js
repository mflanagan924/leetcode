function minLength(s){
    //by going back and forth you can eventually remove all cases of "AB" or "CD"
    //while loop to find "AB" or "CD" and remove them
    while (s.indexOf("AB") >= 0 || s.indexOf("CD") >= 0){
        s = s.split("AB").join("");
        s = s.split("CD").join("");
        //while loop to find "CD" or "AB" and remove them
        while (s.indexOf("CD") >= 0 || s.indexOf("AB") >= 0){
        s = s.split("CD").join("");
        s = s.split("AB").join("");
        }
    }
    return s.length;
}