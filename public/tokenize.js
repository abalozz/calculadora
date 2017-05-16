function tokenize(input) {
    const regex = /^\s*([0-9]+|[+-\/\*\(\)])\s*/;
    let matches = [];
    do {
        match = regex.exec(input);

        if (!match) {
            return matches;
        }

        matches.push(match[1]);
        input = input.replace(match[0], '');
    } while (input);

    return matches;
}

module.exports = tokenize;
