function removeOccurrences(s, part){
    //while loop to check if part is in s
    while (s.indexOf(part) >= 0){
        //if so remove the first occurance of part in s
        s = s.replace(part, '');
    }
    return s;
}