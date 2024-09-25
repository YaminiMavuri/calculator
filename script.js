document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentValue = '0';
    let operator = null;
    let previousValue = null;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                curr entValue = '0';
                operator = null;
                previousValue = null;
            } else if (value === '=') {
                if (operator && previousValue !== null) {
                    currentValue = calculate(previousValue, currentValue, operator);
                    operator = null;
                    previousValue = null;
                }
            } else if (button.hasAttribute('data-operator')) {
                if (previousValue === null) {
                    previousValue = currentValue;
                } else if (operator) {
                    currentValue = calculate(previousValue, currentValue, operator);
                    previousValue = currentValue;
                }
                currentValue = '0';
                operator = value;
            } else {
                if (currentValue === '0') {
                    currentValue = value;
                } else {
                    currentValue += value;
                }
            }

            display.textContent = currentValue;
        });
    });

    function calculate(val1, val2, operator) {
        const num1 = parseFloat(val1);
        const num2 = parseFloat(val2);
        switch (operator) {
            case '+':
                return (num1 + num2).toString();
            case '-':
                return (num1 - num2).toString();
            case '*':
                return (num1 * num2).toString();
            case '/':
                return (num1 / num2).toString();
            default:
                return val2;
        }
    }
});
