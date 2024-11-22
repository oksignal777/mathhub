function appendToScreen(value) {
  document.getElementById('screen').value += value;
}

function clearScreen() {
  document.getElementById('screen').value = '';
}

function calculateResult() {
  try {
    const expression = document.getElementById('screen').value;
    const result = eval(expression);
    document.getElementById('screen').value = result;
  } catch (e) {
    document.getElementById('screen').value = 'Error';
  }
}
