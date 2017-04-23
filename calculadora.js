function showResultByLine(numbers) {
    const resultsElement = document.querySelector('#results');

    resultsElement.innerHTML = numbers.map(number => `<div>${Number(number)}</div>`).join('');
}

function showTotal(numbers) {
    document.querySelector('#total').innerHTML = numbers
        .filter(number => !isNaN(number))
        .reduce((total, number) => total + Number(number), 0);
}

function calculate() {
    const numbers = textarea.value.split('\n');

    showResultByLine(numbers);

    showTotal(numbers);
}

const textarea = document.querySelector('#input');

textarea.addEventListener('keyup', calculate);
calculate();
