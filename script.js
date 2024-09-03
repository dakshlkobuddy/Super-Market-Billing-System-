// Function to add a new item to the receipt
function addItemToReceipt(name, price, quantity) {
    const tableBody = document.getElementById('receipt-body');
    const row = document.createElement('tr');

    // Create and append table cells
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    row.appendChild(nameCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = `₹${parseFloat(price).toFixed(2)}`;
    row.appendChild(priceCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = quantity;
    row.appendChild(quantityCell);

    const totalCell = document.createElement('td');
    const total = (parseFloat(price) * parseInt(quantity)).toFixed(2);
    totalCell.textContent = `₹${total}`;
    row.appendChild(totalCell);

    tableBody.appendChild(row);

    // Update total amount
    updateTotalAmount();
}

// Function to update the total amount displayed
function updateTotalAmount() {
    const rows = document.querySelectorAll('#receipt-body tr');
    let totalAmount = 0;

    rows.forEach(row => {
        const totalCell = row.cells[3].textContent;
        const totalValue = parseFloat(totalCell.replace('₹', ''));
        totalAmount += totalValue;
    });

    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

// Function to handle form submission
document.getElementById('billing-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = document.getElementById('item-name').value;
    const itemPrice = document.getElementById('item-price').value;
    const itemQuantity = document.getElementById('item-quantity').value;

    if (itemName && itemPrice && itemQuantity) {
        addItemToReceipt(itemName, itemPrice, itemQuantity);

        // Clear form fields after adding item
        document.getElementById('item-name').value = '';
        document.getElementById('item-price').value = '';
        document.getElementById('item-quantity').value = '';
    }
});

// Function to print the receipt
document.getElementById('print-receipt').addEventListener('click', function() {
    window.print();
});
