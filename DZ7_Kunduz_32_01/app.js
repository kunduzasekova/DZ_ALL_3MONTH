document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateNumbers');
    const numbersContainer = document.getElementById('numbersContainer');

    function generateRandomNumber() {
        return Math.floor(Math.random() * 99) + 1;
    }

    function formatNumber(number) {
        return number < 10 ? `0${number}` : `${number}`;
    }

    function generateNumbers() {
        numbersContainer.innerHTML = ''; 

        for (let i = 0; i < 6; i++) {
            const randomNumber = generateRandomNumber();
            const formattedNumber = formatNumber(randomNumber);

            const numberCircle = document.createElement('div');
            numberCircle.className = 'number-circle';
            numberCircle.textContent = formattedNumber;

            numbersContainer.appendChild(numberCircle);
        }
    }

    generateButton.addEventListener('click', generateNumbers);
});
