function evalRPN(tokens) {
    let operators = ['+', '-', '*', '/'];
    let i = 0;

    while (tokens.length > 1) {
        if (operators.indexOf(tokens[i]) < 0) {
            i++;
        } else if (tokens[i] === '+') {
            let number = +tokens[i - 2] + (+tokens[i - 1]);
            tokens[i - 2] = number;
            tokens.splice(i - 1, 2);
            i = 0;
        } else if (tokens[i] === '*') {
            let number = +tokens[i - 2] * (+tokens[i - 1]);
            tokens[i - 2] = number;
            tokens.splice(i - 1, 2);
            i = 0;
        } else if (tokens[i] === '-') {
            let number = +tokens[i - 2] - (+tokens[i - 1]);
            tokens[i - 2] = number;
            tokens.splice(i - 1, 2);
            i = 0;
        } else if (tokens[i] === '/') {
            let divisor = +tokens[i - 1];
            let dividend = +tokens[i - 2];
            if (divisor === 0) {
                // Handle division by zero
                tokens[i - 2] = 0;
            } else {
                let number = Math.trunc(dividend / divisor);
                tokens[i - 2] = number;
            }
            tokens.splice(i - 1, 2);
            i = 0;
        }
    }
    return tokens[0];
}

