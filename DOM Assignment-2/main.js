const display = document.getElementById("display");


const keys = document.querySelectorAll("#keyboard div");


let currentInput = "";
let previousInput = "";
let operator = "";


const updateDisplay = (value) => {
    display.textContent = value;
};


keys.forEach((key) => {
    key.addEventListener("click", () => {
        const keyValue = key.textContent;

        if (!isNaN(keyValue)) {
           
            currentInput += keyValue;
            updateDisplay(currentInput);
        } else if (keyValue === "C") {
        
            currentInput = "";
            previousInput = "";
            operator = "";
            updateDisplay("");
        } else if (["+", "-", "*", "/"].includes(keyValue)) {
           
            operator = keyValue;
            previousInput = currentInput;
            currentInput = "";
        } else if (keyValue === "=") {
          
            if (previousInput && currentInput && operator) {
                const result = eval(`${previousInput} ${operator} ${currentInput}`);
                updateDisplay(result);
                currentInput = result;
                previousInput = "";
                operator = "";
            }
        }
    });
});