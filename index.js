/**
 * View logic
 * в данном блоке наша задача - взаимодействие с вью частью, тут мы:
 * 1. получаем элементы со страницы
 * 2. вешаем обработчики событий
 * 3. как то изменяем контент страницы или стили
 */
// 1 . Получаешь элементы со страницы и обновляешь их

const display = document.querySelector("#display");
const aElement = document.querySelector("#a");
const operatorElement = document.querySelector("#operator");
const bElement = document.querySelector("#b");
const resultElement = document.querySelector("#result");
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", onButtonClick);
  allClearButton.addEventListener("click", clear );
  deleteButton.addEventListener("click", deleteOne);
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
let operator = "";
let result = null;

function onButtonClick(event) {
  const value = event.target.dataset.value;

  // 2. Определение что нажали

  // 3 . получение первого числа

  if (isNumber(value)) {
    if (operator === "") {
      if (a === null) {
        clear();
      }

      /**
       * if (a === null) {
         a = value;
        } else {
          a = a + value;
        }
       */
      a = a === null ? value : a + value;
      aElement.textContent = a;
    } else {
      // 3. получение второго числа

      /**
       * if (b === null) {
         b = value;
        } else {
          b = b + value;
        }
       */

      b = b === null ? value : b + value;
      bElement.textContent = b;
    }
    return;
  }

  if (isOperator(value)) {
    // 4. получение оператора
    if (operator === "" && a !== null) {
      operator = value;
      operatorElement.textContent = operator;
    }
    return;
  }

  // 5. получение результата

  if (value === "=") {
    if (a !== null && b !== null && operator !== "") {
      result = calc(Number(a), Number(b), operator);
      resultElement.textContent = `=${result}`;

      a = null;
      b = null;
      operator = "";
      result = null;
    }
  }
}

// 6. Функция очистки ;


function clear() {
  aElement.textContent = "";
  operatorElement.textContent = "";
  bElement.textContent = "";
  resultElement.textContent = "";

  a = null;
  b = null;
  operator = "";
  result = null;
}

/**
 * Что должна делать эта функция:
 * 1. При вводе числа a должен удаляться последний символ
 * 2. При вводе числа b должен удаляться последний символ
 * 3. Если активное число пустое то кнопка DEL ничего не должна делать
 */

function deleteOne() {
  if (operator === ""){

    if (!a) return;
    
 if (a) {
  a = a.toString();
  a = a.slice(0, -1); 
  // Это удаляет последний символ
  aElement.textContent = a;
  if(a == "") {
    a = null;
  }
 }
 return;
 }

  if (operator !== ""){

     if (!b) return;

  if (b) {
  b = b.toString();
  b = b.slice(0, -1); 
  // Это удаляет последний символ
  bElement.textContent = b;
  if(b == "") {
    b = null;
  }
 }
  }
}








function isNumber(value) {
  if (
    value === "0" ||
    value === "1" ||
    value === "2" ||
    value === "3" ||
    value === "4" ||
    value === "5" ||
    value === "6" ||
    value === "7" ||
    value === "8" ||
    value === "9"
  ) {
    return true;
  }

  return false;
}

function isOperator(value) {
  if (value === "+" || value === "-" || value === "*" || value === "/") {
    return true;
  }
  return false;
}

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

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Ошибка";
  }
  return a / b;
}

function calc(a, b, operator) {
  if (operator === "/") {
    return divide(a, b);
  }

  if (operator === "*") {
    return multiply(a, b);
  }

  if (operator === "-") {
    return minus(a, b);
  }

  if (operator === "+") {
    return plus(a, b);
  }
}


