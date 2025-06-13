const container = document.querySelector('container');
let number = null;
let operator = 0;
let secondNumber = null;

const display = document.querySelector('placeholder')
const buttons = document.querySelectorAll('button');
const clear = document.querySelector('.clear')

buttons.forEach((button => {
    button.addEventListener('click', () => {
        let val = button.textContent;
        
        //functionality for the clear button
        clear.addEventListener("click", () => {
        number = null;
        operator = 0;
        secondNumber = null;
        document.getElementById('searchBar').value = " ";
        });

        //gets the operator from the calculator button selection
        if (number != null && val == "/" ||
            val == "-" ||
            val == "+" ||
            val == "x"
        ) {
            operator = val;
            document.getElementById('searchBar').value += " " + val + " ";
        }
        //gets the first number from the user 
        else if(operator == 0 && val != "/" &&
            val != "+" && val != "-" && val != "x"
        ) {
            if( number == null) {
                number = val;
                document.getElementById('searchBar').value = val;
            }
            else {
                number += val;
                document.getElementById('searchBar').value += val;
            }
        }
        else if(number != undefined && operator != 0 && val != '='
        ) {
            if (secondNumber == null) {
                secondNumber = val
                document.getElementById('searchBar').value += val;
            } 
            else {
            secondNumber += val;
            document.getElementById('searchBar').value += val;
        }
    }
        /* equates the problem if the equal sign is 
        selected and other conditons are met*/

        else if(val == '=' && number != undefined &&
            operator != 0 && secondNumber != undefined
        ){
            operate(operator, parseInt(number), parseInt(secondNumber));
        }

    });
})) ;

function add(firstNum, secNum) {
    document.getElementById('searchBar').value = Math.round((firstNum + secNum)*1000)/1000;
}

function subtract(firstNum, secNum) {
    document.getElementById('searchBar').value = Math.round((firstNum - secNum) * 1000) /1000;
}

function multiply(firstNum, secNum) {
    document.getElementById('searchBar').value = Math.round((firstNum * secNum) * 1000)/1000;
}

function divide(firstNum, secNum) {
    console.log(secNum)
    if (secNum === 0) {
        document.getElementById('searchBar').value = 'No Bueno';
    }
    else {
        document.getElementById('searchBar').value = Math.round((firstNum / secNum) * 1000) / 1000;
}
}

function operate(operator, num, secNum) {
    if (operator === '+') {
        add(num, secNum);
    }
    else if (operator === '-') {
        subtract(num, secNum);
    }
    else if (operator === 'x') {
        multiply(num, secNum);
    }
    else if (operator === '/') {
        divide(num, secNum);
    }
}



