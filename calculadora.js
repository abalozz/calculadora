function showResultByLine(numbers) {
    const resultsElement = document.querySelector('#results');

    resultsElement.innerHTML = numbers.map(number => `<div>${Number(number)}</div>`).join('');
}

function showTotal(numbers) {
    document.querySelector('#total').innerHTML = numbers
        .filter(number => !isNaN(number))
        .reduce((total, number) => total + Number(number), 0);
}

function calculate(numbers) {
    showResultByLine(numbers);
    showTotal(numbers);
}

function onKeyUp(event) {
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

textarea.addEventListener('keyup', onKeyUp);
textarea.addEventListener('keypress', onKeyPress);

calculate(textarea.value.split('\n'));
