/**
 * View logic
 * в данном блоке наша задача - взаимодействие с вью частью, тут мы:
 * 1. получаем элементы со страницы
 * 2. вешаем обработчики событий
 * 3. как то изменяем контент страницы или стили
 */

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('clicked');
        display.textContent = 'OUCH, clicked!';
    });
});

// 1. нужно получить все кнопки
// 2. нужно повестить обработчик событий на каждую кнопку
// 3. в обработчике событий нужно понять, какая кнопка была нажата
// 4. в зависимости от нажатой кнопки нужно изменить контент дисплея

/**
 * Bind logic
 * в данном блоке наша задача - связать логику и вью, тут мы:
 * 1. получаем данные из вью части (какую кнопку нажали)
 * 2. передаем эти данные в бизнес логику (какую операцию нужно выполнить)
 * 3. получаем результат из бизнес логики и отображаем его на странице
 */

let a = null;
let b = null;
let operator = null;

// function onButtonClick(event) {}
// function isNumber(value) {}
// function isOperator(value) {}
// function updateDisplay(value) {}

/**
 * Business logic
 * в данном блоке наша задача - реализовать основную логику приложения,
 * тут мы (в данном проекте):
 * 1. реализуем все арифметические операции
 * 2. пишем логику калькулятора (связываем операции)
 */

function plus(a, b) {
    return a + b;
}

// function minus() {}
// function divide() {}
// function multiply() {}

function calc(a, b, operator) {
    if (operator === '+') {
        return plus(a, b);
    }
}

// Тест кейсы:
console.log(calc(1, 2, '+')); // 3
console.log(calc(1, 2, '-')); // -1
console.log(calc(1, 2, '*')); // 2
console.log(calc(1, 2, '/')); // 0.5