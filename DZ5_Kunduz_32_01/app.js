document.addEventListener('DOMContentLoaded', function () {
    var counterElement = document.getElementById('counter');
    var decreaseButton = document.getElementById('decrease');
    var resetButton = document.getElementById('reset');
    var increaseButton = document.getElementById('increase');

    var counterValue = 0;
    var positiveColor = 'green';
    var negativeColor = 'red';
    var zeroColor = 'gray';

    function updateCounterDisplay() {
        counterElement.textContent = counterValue;
        updateCounterColor();
    }

    function updateCounterColor() {
        if (counterValue > 0) {
            counterElement.style.color = positiveColor;
        } else if (counterValue < 0) {
            counterElement.style.color = negativeColor;
        } else {
            counterElement.style.color = zeroColor;
        }
    }

    decreaseButton.addEventListener('click', function () {
        counterValue--;
        updateCounterDisplay();
    });

    resetButton.addEventListener('click', function () {
        counterValue = 0;
        updateCounterDisplay();
    });

    increaseButton.addEventListener('click', function () {
        counterValue++;
        updateCounterDisplay();
    });

    
    updateCounterDisplay();
});
