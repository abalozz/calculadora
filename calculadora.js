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
    textarea.value = ['2', '-3.2', 'No soy un número', '0xA', '0b101'].join('\n');
}

textarea.addEventListener('keyup', onKeyUp);
textarea.addEventListener('keypress', onKeyPress);

calculate(textarea.value.split(/\r\n|\r|\n/g));
