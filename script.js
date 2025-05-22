function add(arg1, arg2) {
    return result = arg1 + arg2;
};

function subtract(arg1, arg2) {
    return result = arg1 - arg2;
};

function multiply(arg1, arg2) {
    return result = arg1 * arg2;
};

function divide(arg1, arg2) {
    if (arg2 === 0) {
        return result = "error: 0 division";
    };
    return result = arg1 / arg2;
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
btnNumber.forEach(btn => {
    btn.addEventListener("click", () => {
        if (operation === "") {
            firstNumber += btn.innerHTML;
            // console.log(firstNumber);
            display.innerHTML = firstNumber;
        } else {
            secondNumber += btn.innerHTML;
            // console.log(secondNumber);
            display.innerHTML = secondNumber;
        };
    });
});

const btnOperator = document.querySelectorAll(".operators");
btnOperator.forEach(btn => {
    btn.addEventListener("click", () => {
        if (secondNumber === "") {
            operation = btn.innerHTML;
            // console.log(operation);
            display.innerHTML = operation;
        };
    });
});