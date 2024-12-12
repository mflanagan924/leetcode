function dotCalculator (equation) {
    if (equation.indexOf("+") > 0){
        equation = equation.split(" + ");
        let first = equation[0].length;
        let second = equation[1].length;
        let ans = first + second;
        let finalAns = "";
	while (ans > 0){
	    finalAns += ".";
	    ans--;
	}
	return finalAns;
    } else if (equation.indexOf("-") > 0){
        equation = equation.split(" - ");
        let first = equation[0].length;
        let second = equation[1].length;
        let ans = first - second;
        let finalAns = "";
        while (ans > 0){
	    finalAns += ".";
	    ans--;
	}
	return finalAns;
    } else if (equation.indexOf("*") > 0){
        equation = equation.split(" * ");
        let first = equation[0].length;
        let second = equation[1].length;
        let ans = first * second;
        let finalAns = "";
        while (ans > 0){
	    finalAns += ".";
	    ans--;
	}
	return finalAns;
    } else if (equation.indexOf("//") > 0){
        equation = equation.split(" // ");
        let first = equation[0].length;
        let second = equation[1].length;
        let ans = Math.floor(first / second);
        let finalAns = "";
        while (ans > 0){
	    finalAns += ".";
	    ans--;
	}
	return finalAns;
    }
    
}