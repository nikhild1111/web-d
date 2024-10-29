// Step 1: Show organization info first
document.getElementById('next-button').addEventListener('click', function () {
    document.getElementById('organization-info').style.display = 'none';
    document.getElementById('user-type-question').style.display = 'block';
});

// Step 2: Ask if the user is a farmer or buyer
document.getElementById('buyer').addEventListener('click', function () {
    document.getElementById('user-type-question').style.display = 'none';
    document.querySelector('.buyer-registration').style.display = 'block';
});

document.getElementById('farmer').addEventListener('click', function () {
    alert('Farmer registration is not implemented yet.');
});

// Step 3: Handle buyer registration form submission
document.getElementById('buyerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data (optional: you can process or store this data)
    const familySize = document.getElementById('family-size').value;
    const address = document.getElementById('address').value;
    const foodPreference = document.getElementById('food-preference').value;
    const foodQuantity = document.getElementById('food-quantity').value;
    const supplyPreference = document.getElementById('supply-preference').value;

    // After submission, hide form and show wage options
    document.querySelector('.buyer-registration').style.display = 'none';
    document.getElementsByTagName('header')[0].style.display = 'none';
    document.getElementById('wage-section').style.display = 'block';
});

// Step 4: Complete purchase (optional action)
document.getElementById('complete-purchase').addEventListener('click', function () {
    alert('Thank you for your purchase!');
});
