function add(a, b) {
	return a + b;
}

function sub(a, b) {
	return a - b;
}

function mul(a, b) {
	return a * b;
}

function div(a, b) {
	return a / b;
}

let firstNo = "";
let secondNo = "";
let operation = "";
let currentNo = "";

function operate(firstNo, secondNo, operation) {
    if(firstNo === "") {
        return secondNo;
    }
    else if(secondNo === "") {
        return firstNo;
    }
	switch (operation) {
		case "+":
			return add(firstNo, secondNo);
		case "-":
			return sub(firstNo, secondNo);
		case "*":
			return mul(firstNo, secondNo);
		case "÷":
			return div(firstNo, secondNo);
	}
}

function roundNumber(num) {
    let rounded = Number(num.toFixed(7));
    return rounded;
}

let storedDisplay = document.querySelector(".stored");
let currentDisplay = document.querySelector(".current");
let calculatorButtons = document.querySelectorAll(".btn");
let clearButton = document.querySelector("#Clear");
let backspaceButton = document.querySelector("#Backspace");
let equalsButton = document.querySelector(".equals");
let divideButton = document.querySelector(".divide");
let multiplyButton = document.querySelector(".multiply");
let subtractButton = document.querySelector(".minus");
let addButton = document.querySelector(".plus");
let decimalButton = document.querySelector(".dot");
let zeroButton = document.querySelector(".zero");
let oneButton = document.querySelector(".one");
let twoButton = document.querySelector(".two");
let threeButton = document.querySelector(".three");
let fourButton = document.querySelector(".four");
let fiveButton = document.querySelector(".five");
let sixButton = document.querySelector(".six");
let sevenButton = document.querySelector(".seven");
let eightButton = document.querySelector(".eight");
let nineButton = document.querySelector(".nine");

calculatorButtons.forEach((button) => {
	button.addEventListener("click", () => {
        console.log(button.id);
		if (button.id === "Clear") {
			storedDisplay.textContent = "";
			currentDisplay.textContent = "";
			firstNo = "";
			secondNo = "";
			operation = "";
		} else if (button.id === "Backspace") {
			currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
		} else if (button.id === "=") {
			secondNo = Number(currentDisplay.textContent);
			if (operation === "÷" && secondNo === 0) {
				currentDisplay.textContent = "lmao";
				firstNo = "";
				secondNo = "";
				operation = "";
                storedDisplay.textContent='';
				return;
			}
			currentDisplay.textContent = roundNumber(operate(firstNo, secondNo, operation));
			console.log(firstNo, secondNo, operation);
			firstNo = "";
			secondNo = "";
			operation = "";
            storedDisplay.textContent='';
		} else if (
			button.id === "÷" ||
			button.id === "*" ||
			button.id === "+" ||
			button.id === "-"
		) {
			if (operation !== "") {
				secondNo = Number(currentDisplay.textContent);
				currentDisplay.textContent = roundNumber(operate(firstNo, secondNo, operation));
				console.log(firstNo, secondNo, operation);
				firstNo = "";
				secondNo = "";
			}
			firstNo = Number(currentDisplay.textContent);
            storedDisplay.textContent=firstNo;
			operation = button.id;
			storedDisplay.textContent += button.id;
            currentDisplay.textContent=""
        } else if(button.id === ".") {
            if(currentDisplay.textContent.includes(".")) {
                return;
            }   
            currentDisplay.textContent += button.id;
        }
        else {
			if (operation !== "") {
				currentNo += button.id;
			}
			currentDisplay.textContent += button.id;
		}
	});
});

document.addEventListener('keypress', (e)=>{console.log(e.key);});

document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        equalsButton.click();
    }
    else if(e.key === 'Backspace') {
        e.preventDefault();
        backspaceButton.click();
    }
    else if(e.key === 'Escape' || e.key === 'Delete') {
        e.preventDefault();
        clearButton.click();
    }
    else if(e.key === '0') {
        e.preventDefault();
        zeroButton.click();
    }
    else if(e.key === '1') {
        e.preventDefault();
        oneButton.click();
    }
    else if(e.key === '2') {
        e.preventDefault();
        twoButton.click();
    }
    else if(e.key === '3') {
        e.preventDefault();
        threeButton.click();
    }
    else if(e.key === '4') {
        e.preventDefault();
        fourButton.click();
    }
    else if(e.key === '5') {
        e.preventDefault();
        fiveButton.click();
    }
    else if(e.key === '6') {
        e.preventDefault();
        sixButton.click();
    }
    else if(e.key === '7') {
        e.preventDefault();
        sevenButton.click();
    }
    else if(e.key === '8') {
        e.preventDefault();
        eightButton.click();
    }
    else if(e.key === '9') {
        e.preventDefault();
        nineButton.click();
    }
    else if(e.key === '+') {
        e.preventDefault();
        addButton.click();
    }
    else if(e.key === '-') {
        e.preventDefault();
        subtractButton.click();
    }
    else if(e.key === '*') {
        e.preventDefault();
        multiplyButton.click();
    }
    else if(e.key === '/') {
        e.preventDefault();
        divideButton.click();
    }
    else if(e.key === '.') {
        e.preventDefault();
        decimalButton.click();
    }
})
