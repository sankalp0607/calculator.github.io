 // script.js
let display = document.getElementById('display');
let currentInput = '0';

function appendToDisplay(value) {
  if (currentInput === '0') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '0';
  display.textContent = currentInput;
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
  } catch (error) {
    display.textContent = "Error";
  }
}

function calculateFunction(func) {
  try {
    let result;
    switch (func) {
      case 'sin':
        result = Math.sin(eval(currentInput) * Math.PI / 180);
        break;
      case 'cos':
        result = Math.cos(eval(currentInput) * Math.PI / 180);
        break;
      case 'tan':
        result = Math.tan(eval(currentInput) * Math.PI / 180);
        break;
      case 'log':
        result = Math.log10(eval(currentInput));
        break;
      case 'sqrt':
        result = Math.sqrt(eval(currentInput));
        break;
      default:
        result = eval(currentInput);
    }
    currentInput = result.toString();
    display.textContent = currentInput;
  } catch (error) {
    display.textContent = "Error";
  }
}
