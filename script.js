const container = document.querySelector('container');
let number;
let operator;
let secondNumber;

function add(firstNum, secNum) {
    return firstNum + secNum;
}

function subtract(firstNum, secNum) {
    return firstNum - secNum;
}

function multiply(firstNum, secNum) {
    return firstNum * secNum;
}

function divide(firstNum, secNum) {
    return firstNum / secNum;
}

function operate(operator, num, secNum) {
    if (operator === '+') {
        add(num, secNum);
    }
    else if (operator === '-') {
        subtract(num, secNum);
    }
    else if (operator === '*') {
        multiply(num, secNum);
    }
    else if (operator === '/') {
        divide(num, secNum);
    }
}



