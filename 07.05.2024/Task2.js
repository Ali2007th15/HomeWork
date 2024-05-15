let Receipt = [
    { name: 'Milk', quantity: 2, price: 5.50 },
    { name: 'Bread', quantity: 1, price: 2.00 },
    { name: 'Eggs', quantity: 12, price: 0.60 },
    { name: 'Cheese', quantity: 1, price: 25.00 },
];

function Print(Receipt) {
    console.log("Receipt:");
    Receipt.forEach(item => {
        console.log(`${item.name} - Quantity: ${item.quantity}, Price per unit: ${item.price}`);
    });
}

function Total(Receipt) {
    let total = Receipt.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    return total;
}

function Expensive(Receipt) {
    let expensive = Receipt.reduce((prev, curr) => (prev.quantity * prev.price) > (curr.quantity * curr.price) ? prev : curr);
    return expensive;
}

function AveragePrice(Receipt) {
    let items = Receipt.reduce((sum, item) => sum + item.quantity, 0);
    let cost = Receipt.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    let averagePrice = cost / items;
    return averagePrice
}

Print(Receipt);
console.log("\nTotal cost: " + Total(Receipt) + "$");
let expensive = Expensive(Receipt);
console.log(`\nMost expensive item: ${expensive.name} - Total price: ${(expensive.quantity * expensive.price)}$`);
console.log("\nAverage price per item: " + AveragePrice(Receipt) + "$");
