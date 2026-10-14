numpad = document.querySelectorAll(".numpad");
display = document.querySelector("#display");
operator = document.querySelectorAll(".operator");

calculator = {};
numpadSelect = 1;

numpad.forEach(btn => {
  btn.addEventListener('click', (event) => {
    const text = event.target.textContent;
    addNumpad(text);
  });
});

operator.forEach(opr => {
  opr.addEventListener('click', (event) => {
    const text = event.target.textContent;
    operatorFunction(text);
  });
});

function displayFunction() {
    if ("operator" in calculator === true) {
        if (calculator.numpad2 != null) {
            display.textContent = `${calculator.numpad1} ${calculator.operator} ${calculator.numpad2}`;
        } else {
            display.textContent = `${calculator.numpad1} ${calculator.operator}`;
        }
    } else {
        display.textContent = `${calculator.numpad1}`;
    }
}

function addNumpad(numper) {
    if ("numpad2" in calculator === false) {
        if (calculator.numpad1 === null) {
            calculator.numpad1 = numper;
        } else if ("numpad1" in calculator === true) {
            calculator.numpad1 += numper;
        } else {
            calculator.numpad1 = numper;
        }
    } else {
        if (calculator.numpad2 === null) {
            calculator.numpad2 = numper;
        } else if ("numpad1" in calculator === true) {
            calculator.numpad2 += numper;
        } else {
            calculator.numpad2 = numper;
        }
    }

    displayFunction()
}

function operate() {
    let data = null;
    if (calculator.operator === "+") {
        data = Number(calculator.numpad1) + Number(calculator.numpad2)
        display.textContent = data;
        delete calculator.numpad1;
        delete calculator.operator;
        delete calculator.numpad2;
        numpadSelect = 1;
    } else if (calculator.operator === "-") {
        data = Number(calculator.numpad1) - Number(calculator.numpad2)
        display.textContent = data;
        delete calculator.numpad1;
        delete calculator.operator;
        delete calculator.numpad2;
        numpadSelect = 1;
    } else if (calculator.operator === "*") {
        data = Number(calculator.numpad1) * Number(calculator.numpad2)
        display.textContent = data;
        delete calculator.numpad1;
        delete calculator.operator;
        delete calculator.numpad2;
        numpadSelect = 1;
    } else if (calculator.operator === "/") {
        data = Number(calculator.numpad1) / Number(calculator.numpad2)
        display.textContent = data;
        delete calculator.numpad1;
        delete calculator.operator;
        delete calculator.numpad2;
        numpadSelect = 1;
    }
}

function operatorFunction(oprOn) {
    if (oprOn === "C") {
        display.innerHTML = ``;
        delete calculator.numpad1;
        delete calculator.operator;
        delete calculator.numpad2;
        numpadSelect = 1;
    } else if (oprOn === "=") {
        operate();
    } else if (numpadSelect === 1) {
        if ("numpad1" in calculator === true) {
            numpadSelect = 2;
            calculator.operator = oprOn;
            calculator.numpad2 = null;
            displayFunction();
        }
    }
}