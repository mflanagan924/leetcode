function frogContest(n) {
    let chris = 0;
    for (let i = 1; i <= n; i++){
        chris += i;
    }
    let tomN = Math.floor(chris/2);
    let tom = 0;
    for (let i = 1; i <= tomN; i++){
        tom += i;
    }
    let catN = chris + tom;
    let cat = 0;
    for (let i = 0; i <= catN; i++){
        cat += i;
    }
    return "Chris ate " + chris +" flies, Tom ate " + tom + " flies and Cat ate " + cat + " flies"
}

