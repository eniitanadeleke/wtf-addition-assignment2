// Simple Expense Calculator

// Ask the user for inputs
/*let monthlyIncome = parseFloat(prompt("Enter your monthly income:"));
let dailyExpenses = parseFloat(prompt("Enter your daily expenses:"));
let monthlyExpenses = parseFloat(prompt("Enter your monthly expenses:"));
let savings = parseFloat(prompt("Enter your savings:"));
let spendings = parseFloat(prompt("Enter your other spendings:"));*/

// Calculate total expenses
//let totalExpenses = dailyExpenses + monthlyExpenses + savings + spendings;

// Calculate what is left
//let remaining = monthlyIncome - totalExpenses;

// Display results
/*console.log("Monthly Income:", monthlyIncome);
console.log("Total Expenses (Daily + Monthly + Savings + Spendings):", totalExpenses);
console.log("Amount Left:", remaining);

// Optional: Display a friendly message
alert(`Hello spender, After all your expenses, savings, and spendings, you have ${remaining} left for the month.`);

let name = "John";
let admin;
admin = name;
alert(admin);*/

//objects

/*onst user1 = { 
    name: 1,
    fullName: "Mike Hanks",
    balance: 200000,
    isAccountBlocked: true, 
} */

    console.log("Welcome To Enitan Microfinance Bank");
    const eni = {
        name: "eni",
        balance: 30000,
        currency: "USD",
    };

    const kay = {
        name: "kay",
        balance: 40000,
        currency: "USD",
    };

    const nath = {
        name: "nath",
        balance: 50000,
        currency: "USD",
    };

    eni.balance = eni.balance + 10000;
    console.log(`this is eni's balance ${eni.balance}`);

kay.balance = kay.balance - 500000;

const enoughMoney = 60000;
if (kay.balance < enoughMoney) {
    console.log("insufficient funds")
}

 const transferedMoney = nath.balance - 20000;// transfered money is 30000
console.log(transferedMoney);

kay.balance =20000
console.log(`this is kay's balance (${kay.balance})`);
console.log(`this is nath's balance (${nath.balance})`);

eni.balance += transferedMoney;
console.log(`this is eni's balance (${eni.balance})`);

///comparing all three balances:
let highestBalance = 70000;

//if (eni.balance > kay.balance) {
  // console.log("Eni has the highest balance")
//}else if (kay.balance > nath.balance) {
   // console.log("Kay has the highest balance")
//}

if (eni.balance > kay.balance && eni.balance > nath.balance) {
    console.log("Eni has the highest balance");
} else if (kay.balance > eni.balance && kay.balance > nath.balance) {
    console.log("Kay has the highest balance");
} else if (nath.balance > eni.balance && nath.balance > kay.balance) {
    console.log("Nath has the highest balance");
} else {
    console.log("There is a tie in balances!");
}



