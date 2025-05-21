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


let firstNumber = [];
let secondNumber;
let operation;
const display = document.getElementById("display");

const btnNumber = document.querySelectorAll(".number");
btnNumber.forEach(btn => {
    btn.addEventListener("click", () => {
        firstNumber.push(btn.innerHTML);
        // console.log(firstNumber);
        let firstNumberJoined = parseInt(firstNumber.join(""));
        // console.log(firstNumberJoined);
        display.innerHTML = firstNumberJoined;
    });
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
    firstNumber = [];
    console.log(firstNumber);
    display.innerHTML = "";
});