// script.js
const form = document.getElementById('order-form');
const totalPriceDiv = document.getElementById('total-price');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const item = document.getElementById('item').value;
    const size = document.getElementById('size').value;
    const milkType = document.getElementById('milk-type').value;
    const totalPrice = calculateTotalPrice(item, size, milkType);
    totalPriceDiv.innerText = `Total Price: $${totalPrice}`;
});

function calculateTotalPrice(item, size, milkType) {
    let price = 0;
    switch (item) {
        case 'coffee':
            price = 2.00;
            break;
        case 'tea':
            price = 1.50;
            break;
        case 'milkshake':
            price = 3.50;
            break;
        default:
            price = 0;
    }
    switch (size) {
        case 'small':
            price *= 1;
            break;
        case 'medium':
            price *= 1.5;
            break;
        case 'large':
            price *= 2;
            break;
        default:
            price *= 1;
    }
    switch (milkType) {
        case 'whole-milk':
            price += 0.50;
            break;
        case 'skim-milk':
            price += 0.25;
            break;
        case 'almond-milk':
            price += 1.00 ;
            break;
        default:
            price += 0;
    }
    return price.toFixed(2);
}