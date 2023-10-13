function isValid(s){
    //if s length is odd, will always be false, can't close
    if (s.length%2 > 0){
        return false;
    }
    //initialize an empty stack
    let stack = [];
    //for loop to check each index of s string
    for (let i = 0; i < s.length; i++){
        //checks for open symbols, if they are there push into stack
        if (s[i] === "(" || s[i] === "{" || s[i] === "["){
            stack.push(s[i]);
        //check for ")" closed symbol, check top of stack to make sure that open "(" is there
        } else if (s[i] === ")"){
            if (stack[stack.length - 1] !== "("){
                return false;
            } else {
                stack.pop();
            }
        } 
        //check for "}" closed symbol, check top of stack to make sure that open "{" is there
        else if (s[i] === "}"){
            if (stack[stack.length - 1] !== "{"){
                return false;
            } else {
                stack.pop();
            }
        } 
        //check for "]" closed symbol, check top of stack to make sure that open "[" is there
        else if (s[i] === "]"){
            if (stack[stack.length - 1] !== "["){
                return false;
            } else {
                stack.pop();
            }
        } 
    }
    //stack should have zero length by the end, this means that every parentheses has been closed, if it is still not zero length, then something hasn't been closed
    if (stack.length > 0){
        return false;
    }
    return true;
}