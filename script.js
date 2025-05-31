function add(arg1, arg2) {
    result = parseFloat(arg1) + parseFloat(arg2);
    display.innerHTML = result;
};

function subtract(arg1, arg2) {
    result = arg1 - arg2;
    display.innerHTML = result;
};

function multiply(arg1, arg2) {
    result = arg1 * arg2;
    display.innerHTML = result;
};

function divide(arg1, arg2) {
    if (arg2 === "0") {
        result = "err: 0 division";
    } else {
        result = arg1 / arg2;
    };
    display.innerHTML = result;
};


let firstNumber = "";
let secondNumber = "";
let operation = "";
const display = document.getElementById("display");

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operation = ""
    display.innerHTML = "";
});

const btnNumber = document.querySelectorAll(".number");
const separator = document.getElementById("separator").innerHTML;

btnNumber.forEach(btn => {
    btn.addEventListener("click", () => {
        if (operation === "") {
            if (btn.innerHTML === separator) {
                if (firstNumber === "") {
                    display.innerHTML = "0."
                    firstNumber = 0 + btn.innerHTML;
                } else if (firstNumber.includes(separator)) {
                    firstNumber;
                } else {
                    firstNumber += btn.innerHTML;
                    display.innerHTML = firstNumber;
                };
            } else {
                firstNumber += btn.innerHTML;
                display.innerHTML = firstNumber;
            };
        } else {
            if (btn.innerHTML === separator) {
                if (secondNumber === "") {
                    display.innerHTML = "0."
                    secondNumber = 0 + btn.innerHTML;
                } else if (secondNumber.includes(separator)) {
                    secondNumber;
                } else {
                    secondNumber += btn.innerHTML;
                    display.innerHTML = secondNumber;
                };
            } else {
                secondNumber += btn.innerHTML;
                display.innerHTML = secondNumber;
            };
        };
    });
});

const btnOperator = document.querySelectorAll(".operators");
btnOperator.forEach(btn => {
    btn.addEventListener("click", () => {
        if (secondNumber === "") {
            operation = btn.innerHTML;
            display.innerHTML = operation;
        };
    });
});

function operate(number1, number2, operator) {
    if (operator === "+") {
        add(number1, number2);
    }
    else if (operator === "-") {
        subtract(number1, number2);
    }
    else if (operator === "x") {
        multiply(number1, number2);
    }
    else if (operator === "/") {
        divide(number1, number2);
    };
};

const btnEquals = document.querySelector("#equals");
btnEquals.addEventListener("click", () => {
    operate(firstNumber, secondNumber, operation)
});