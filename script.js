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

let displayValue = 1234567890

document.getElementById("display").innerHTML = displayValue;