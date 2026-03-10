const app = document.querySelector('#V0');

app.innerHTML = `
        <div class="display">
            <span id="a">1</span>
            <span id="operator">+</span>
            <span id="b">4</span>
            <span id="result">=5</span>
        </div>
        <div class="buttons">
            <button class="button" data-value="1">1</button>
            <button class="button" data-value="2">2</button>
            <button class="button" data-value="3">3</button>
            <button class="button" data-value="-">-</button>

            <button class="button" data-value="4">4</button>
            <button class="button" data-value="5">5</button>
            <button class="button" data-value="6">6</button>
            <button class="button" data-value="+">+</button>


            <button class="button" data-value="7">7</button>
            <button class="button" data-value="8">8</button>
            <button class="button" data-value="9">9</button>
            <button class="button" data-value="*">*</button>

            <button class="button two-colums" data-value="0">0</button>
            <button class="button" data-value="=">=</button>
            <button class="button" data-value="/">/</button>
        </div>
`;


const aElement = document.querySelector('#a');
const operatorElement = document.querySelector('#operator');
const bElement = document.querySelector('#b');
const resultElement = document.querySelector('#result');

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', onButtonClick);
});

// calc
let a = null;
let b = null;
let operator = '';
let result = null;

function onButtonClick(event) { // 4
    if (isNumber(event.target.dataset.value)) {
        // 1. получение первого числа
        if (a === null) {
            clear();
            a = Number(event.target.dataset.value);
            aElement.textContent = a;
        }

        // 3. получение второго числа
        if (b === null && operator !== '') {
            b = Number(event.target.dataset.value);
            bElement.textContent = b;
        }

        return;
    }

    if (isOperator(event.target.dataset.value)) {
        // 2. получение оператора
        if (operator === '' && a !== null) {
            operator = event.target.dataset.value;
            operatorElement.textContent = operator;
        }

        return;
    }

    // 4. получение результата
    if (event.target.dataset.value === '=') {
        if (a !== null && b !== null && operator !== '') {
            result = calculate(a, b, operator);
            resultElement.textContent = `=${result}`;

            a = null;
            b = null;
            operator = '';
            result = null;
        }
    }
}

function clear() {
    aElement.textContent = '';
    operatorElement.textContent = '';
    bElement.textContent = '';
    resultElement.textContent = '';
}

function isNumber(value) {
    if (
        value === '0' ||
        value === '1' ||
        value === '2' ||
        value === '3' ||
        value === '4' ||
        value === '5' ||
        value === '6' ||
        value === '7' ||
        value === '8' ||
        value === '9'
    ) {
        return true;
    }

    return false;
}

function isOperator(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        return true;
    }
    return false;
}

function calculate(a, b, operator) {
    if (operator === '+') {
        return a + b;
    }
    if (operator === '-') {
        return a - b;
    }
    if (operator === '*') {
        return a * b;
    }
    if (operator === '/') {
        return a / b;
    }
}
