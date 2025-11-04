// DOM: Select nodes
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');

// Logic variables
let expression = "";

// Event: Listen to clicks
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.dataset.value;
    handleInput(value);
  });
});

// Logic: Core functions
function handleInput(value) {
  if(screen.value === "Error"|| screen.value === "Infinity") {
    expression = "";
  }
  if (value === 'C') {
    expression = "";
    screen.value = "";
  } 
  else if (value === 'DEL') {
    expression = expression.slice(0, -1);
    screen.value = expression;
  } 
  else if (value === '=') {
    calculate();
  } 
  else {
    expression += value;
    screen.value = expression;
  }
}

function calculate() {
  try {
    const result = eval(expression);
    screen.value = result;
    expression = result.toString();
  } catch {
    screen.value = "Error";
    expression = "";
  }
}
