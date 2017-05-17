const rules = {
    'number': ['operator', 'close parenthesis'],
    'operator': ['number', 'open parenthesis'],
    'open parenthesis': ['number', 'open parenthesis'],
    'close parenthesis': ['operator', 'close parenthesis'],
};

function getTypeOfToken(token) {
    if (isFinite(token)) {
        return 'number';
    }

    if (token === '(') {
        return 'open parenthesis';
    }

    if (token === ')') {
        return 'close parenthesis';
    }

    if (['+', '-', '*', '/'].includes(token)) {
        return 'operator';
    }

    return null;
}

function canBeFollowedBy(token, nextToken) {
    return rules[getTypeOfToken(token)].includes(getTypeOfToken(nextToken));
}

function firstAndLastTokensAreValid(tokens) {
    if (!['number', 'open parenthesis'].includes(getTypeOfToken(tokens[0]))) {
        return false;
    }

    if (!['number', 'close parenthesis'].includes(getTypeOfToken(tokens[tokens.length - 1]))) {
        return false;
    }

    return true;
}

function validate(tokens) {
    if (!firstAndLastTokensAreValid(tokens)) {
        return false;
    }

    let token = tokens[0];

    for (nextToken of tokens.slice(1)) {
        if (!canBeFollowedBy(token, nextToken)) {
            return false;
        }

        token = nextToken;
    }

    return true;
}

module.exports = validate;
