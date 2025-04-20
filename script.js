// script.js
document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.output');
    const buttons = document.querySelectorAll('input[type="button"]');
  
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        const value = this.value;
  
        if (value === 'AC') {
          // clear
          display.value = '';
        } else if (value === 'DE') {
          // delete last char
          display.value = display.value.slice(0, -1);
        } else if (value === '=') {
          // evaluate
          try {
            display.value = eval(display.value);
          } catch (e) {
            display.value = 'Error';
          }
        } else {
          // append number/operator
          display.value += value;
        }
      });
    });
  });
  