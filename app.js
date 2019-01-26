// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculating Results
function calculateResults(e) {
    console.log('Calculating...');

    // UI Variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');


    e.preventDefault();
}
