function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

let firstNo;
let secondNo;
let operation;

function operate(firstNo, secondNo, operation){
    switch(operation){
        case "+":
            return add(firstNo, secondNo);
        case "-":
            return sub(firstNo, secondNo);
        case "*":
            return mul(firstNo, secondNo);
        case "/":
            return div(firstNo, secondNo);
    }
}

let display = document.querySelector('.display');
let displayContent = display.textContent;