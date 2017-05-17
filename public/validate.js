const rules = {
    'number': ['operator'],
    'operator': ['number'],
};

function getTypeOfToken(token) {
    if (isFinite(token)) {
        return 'number';
    }

    if (['+', '-', '*', '/'].includes(token)) {
        return 'operator';
    }

    return null;
}

function canBeFollowedBy(token, nextToken) {
    return rules[getTypeOfToken(token)].includes(getTypeOfToken(nextToken));
}

function validate(tokens) {
    let token = tokens[0];

    if (getTypeOfToken(tokens[0]) !== 'number' || getTypeOfToken(tokens[tokens.length - 1]) !== 'number') {
        return false;
    }

    for (nextToken of tokens.slice(1)) {
        if (!canBeFollowedBy(token, nextToken)) {
            return false;
        }

        token = nextToken;
    }

    return true;
}

module.exports = validate;
