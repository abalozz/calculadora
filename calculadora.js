function showResultByLine(numbers) {
    const resultsElement = document.querySelector('#results');

    resultsElement.innerHTML = numbers.map(number => `<div>${Number(number)}</div>`).join('');
}

function showTotal(total) {
    document.querySelector('#total').innerHTML = total;
}

function calculateTotal(resultsByLine) {
    return resultsByLine.filter(number => !isNaN(number))
        .reduce((total, number) => total + Number(number), 0)
}

function calculateLinesResult(lines) {
    return lines.map(line => calculateLineResult(line));
}

function validateLineCharacters(line) {
    return line.search(/^[0-9\+\-\*\/\(\) \.xbA-F]*$/g) === 0;
}

function calculateLineResult(line) {
    if (!line) {
        return 0;
    }

    if (validateLineCharacters(line)) {
        try {
            return eval(line);
        } catch (e) {
            return NaN;
        }
    }

    return NaN;
}

function calculate(lines) {
    const resultsByLine = calculateLinesResult(lines);
    const total = calculateTotal(resultsByLine);

    showResultByLine(resultsByLine);
    showTotal(total);
}

function onKeyUp(event) {
    localStorage.setItem('input', textarea.value);
    calculate(textarea.value.split(/\r\n|\r|\n/g))
}

function onKeyPress(event) {
    const values = textarea.value.split('\n');

    if (event.keyCode === 13) {
        calculate(values.concat(0));
    } else if (event.keyCode === 8 && !values[values.length - 1]) {
        calculate(values.slice(0, -1));
    } else {
        calculate(values);
    }
}

const textarea = document.querySelector('#input');

if (localStorage.getItem('input')) {
    textarea.value = localStorage.getItem('input');
} else {
    textarea.value = ['2', '-3.2', '2*(3-5)/10', 'No soy un número', '0xA', '0b101'].join('\n');
}

textarea.addEventListener('keyup', onKeyUp);
textarea.addEventListener('keypress', onKeyPress);

calculate(textarea.value.split(/\r\n|\r|\n/g));
