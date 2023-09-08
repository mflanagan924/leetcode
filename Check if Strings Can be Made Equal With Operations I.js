function canBeEqual(s1, s2){
    //checks to see if both are initially equal
    if (s1 === s2){
        return true;
    //if not changes indices 0 and 2
    } else {
        let s1FirstChange = s1[2] + s1[1] + s1[0] + s1[3];
        if (s1FirstChange === s2){
            return true;
        //if still not true than changes indices 1 and 3 while the first change is kept
        } else {
            let s1SecondChange = s1FirstChange[0] + s1FirstChange[3] + s1FirstChange[2] + s1FirstChange[1];
            if (s1SecondChange === s2){
                return true;
            //changes from original s1 only indices 1 and 3
            } else {
                let s1FirstChangeSecondPart = s1[0] + s1[3] + s1[2] + s1[1];
                if (s1FirstChangeSecondPart === s2){
                    return true;
                }
            }
        }
    }
    //if none of above than false
    return false;
}