// payment-script.js
const form = document.getElementById('payment-form');
const paymentSummaryDiv = document.getElementById('payment-summary');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const paymentMethod = document.getElementById('payment-method').value;
    const paymentSummary = `Payment Method: ${paymentMethod}`;
    paymentSummaryDiv.innerText = paymentSummary;
});