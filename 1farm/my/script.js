document.addEventListener('DOMContentLoaded', function () {
    const decreaseButtons = document.querySelectorAll('.decrease');
    const increaseButtons = document.querySelectorAll('.increase');
    const quantityValues = document.querySelectorAll('.quantity-value');

    decreaseButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            let quantity = parseInt(quantityValues[index].textContent);
            if (quantity > 1) {
                quantity--;
                quantityValues[index].textContent = quantity + ' kg';
            }
        });
    });

    increaseButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            let quantity = parseInt(quantityValues[index].textContent);
            quantity++;
            quantityValues[index].textContent = quantity + ' kg';
        });
    });
});
