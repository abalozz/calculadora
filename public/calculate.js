function operate(number1, operation, number2) {
    switch (operation) {
        case '+': return number1 + number2;
        case '-': return number1 - number2;
        case '*': return number1 * number2;
        case '/': return number1 / number2;
    }

    return NaN;
}

function calculate(operation) {
    let total = operation.shift();

    for (var i = 0; i < operation.length; i += 2) {
        total = operate(total, operation[i], operation[i + 1]);
    }

    return total;
}

module.exports = calculate;
