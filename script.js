function calculateTotalBillAndSplit(costPerDish, numPeople) {
    // Calculate the total bill
    const totalBill = costPerDish * numPeople;

    // Calculate the bill per person
    const billPerPerson = totalBill / numPeople;

    // Create an object to store the results
    const result = {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };

    return result;
}

// Example usage:
const costPerDish = 50; // Cost of each dish in your currency
const numPeople = 4;    // Number of people sharing the dishes
const billInfo = calculateTotalBillAndSplit(costPerDish, numPeople);

console.log(`Total Bill: ${billInfo.totalBill}`);
console.log(`Bill per Person: ${billInfo.billPerPerson}`);
