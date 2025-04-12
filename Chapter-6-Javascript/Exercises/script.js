// Get references to the HTML elements
const pricePerLiterInput = document.getElementById('pricePerLiter');
const litersPurchasedInput = document.getElementById('litersPurchased');
const calculateBtn = document.getElementById('calculateBtn');
const totalCostDisplay = document.getElementById('totalCost');

// Function to calculate the total cost
function calculateTotal() {
    // Get the values from the input fields
    const pricePerLiter = parseFloat(pricePerLiterInput.value);
    const litersPurchased = parseFloat(litersPurchasedInput.value);

    // Check if the input values are valid numbers
    if (!isNaN(pricePerLiter) && !isNaN(litersPurchased) && pricePerLiter >= 0 && litersPurchased >= 0) {
        // Calculate the total cost
        const totalCost = pricePerLiter * litersPurchased;

        // Display the total cost, formatted to two decimal places
        totalCostDisplay.textContent = `Total Cost: AED ${totalCost.toFixed(2)}`;
    } else {
        // Display an error message if the input is invalid
        totalCostDisplay.textContent = 'Please enter valid numbers.';
    }
}

// Add an event listener to the calculate button
calculateBtn.addEventListener('click', calculateTotal);

// Optional: Add event listeners to the input fields to recalculate on input change
// pricePerLiterInput.addEventListener('input', calculateTotal);
// litersPurchasedInput.addEventListener('input', calculateTotal);