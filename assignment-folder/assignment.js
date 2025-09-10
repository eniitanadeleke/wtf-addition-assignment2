console.log("welcome to Enitan Microfinance Bank")

const account1 = {
    name: "enny",
    balance: 3000,
    currency: "USD",
    type: "savings"
}

const account2 = {
    name: "kay",
    balance: 4000,
    currency: "NGN",
    type: "current"
}

const account3 = {
    name: "nath",
    balance: 5000,
    currency: "USD",
    type: "checkings"
}

const account4 = {
    name: "daniel",
    balance: 6000,
    currency: "USD",
    type: "savings"
}

//Adding deposits to two accounts

account1.balance += 2000;
account3.balance += 3000;

//show the new balance
console.log(account1.balance);
console.log(account3.balance);

//withdrawal

let withdrawal1 = 1000; // amount to withdraw from account2
let withdrawal2 = 6000; //amount to withdraw from account4
if (account2.balance >= withdrawal1) {
    account2.balance -= withdrawal1;
    console.log(`withdrawal successful`);
    }else {
        console.log(`withdrawal denied for ${account2.name}: insifficient funds`);
};



if (account4.balance >= withdrawal2) {
    account4.balance -= withdrawal2;
    console.log(`withdrawal successful`);
    }else {
        console.log(`withdrawal denied for ${account4.name}: insifficient funds`);
};
console.log(`this is the new balance for account 1:  ${account1.balance}`)
console.log(`this is the new balance for account 2:  ${account2.balance}`)
console.log(`this is the new balance for account 3:  ${account3.balance}`)
console.log(`this is the new balance for account 4:  ${account4.balance}`)

//Transfer money from the same currency
let transferAmount = 1000;

if (account1.currency === account2.currency) { // check  if the  currency is the same.
    if (account1.balance >= transferAmount) { // checks if the ampunt is sufficient.
        account1.balance -= transferAmount;
        account2.balance += transferAmount;
        console.log(`Transfer successful: ${account1.name} transferred ${transferAmount} ${account1.currency} to ${account2.name}`);
    } else {
        console.log(`Transfer failed: currency mismatch`);
    }
} else {
    console.log(`Transfer failed: currency mismatch`);
}
// checking for account type;

const accountType = "savings"
const savingsInterestRate = 0.3;

if (account1.type === "savings") {
    let intrest = account1.balance * savingsInterestRate;// intrest is equals to 1500
    account1.balance += intrest;
    console.log(`you earned ${intrest}`);
}else {
    console.log("Thhis is not a savings account")
}

const checkingsTransactionFee = 50;

if (account3.balance >= checkingsTransactionFee) {
    account3.balance -= checkingsTransactionFee
    console.log("50 was deducted")
}else {"thisn is not a checkings account"}
console.log(account3.balance);

//comparing then printing the highest baance

let highestBalance = account1.balance; // start with the first account

if (account2.balance > highestBalance) {
    highestBalance = account2.balance;
}

if (account3.balance > highestBalance) {
    highestBalance = account3.balance;
}

if (account4.balance > highestBalance) {
    highestBalance = account4.balance;
}

console.log(`${highestBalance} is the highest balance`);

//comparing for the lowest balance

let lowestBalance = account4.balance;

if(account2.balance > highestBalance){
  lowestBalance = account2.balance
}

if(account3.balance > highestBalance){
    lowestBalance = account3.balance
  }

  if(account4.balance > highestBalance){
    lowestBalance = account4.balance
}

console.log(`${lowestBalance} is the lowest balance`)

//checking for account1
if (account1.balance > 0) {
    console.log(`${account1.name} is Active`);
} else if (account1.balance === 0) {
    console.log(`${account1.name} is Empty`);
} else {
    console.log(`${account1.name} is Overdrawn`);
}

//checking for account2
if (account2.balance > 0) {
    console.log(`${account2.name} is Active`);
} else if (account1.balance === 0) {
    console.log(`${account2.name} is Empty`);
} else {
    console.log(`${account2.name} is Overdrawn`);
}

if (account3.balance > 0) {
    console.log(`${account3.name} is Active`);
} else if (account1.balance === 0) {
    console.log(`${account3.name} is Empty`);
} else {
    console.log(`${account3.name} is Overdrawn`);
}

if (account4.balance > 0) {
    console.log(`${account4.name} is Active`);
} else if (account1.balance === 0) {
    console.log(`${account4.name} is Empty`);
} else {
    console.log(`${account4.name} is Overdrawn`);
}


//transaction summary

console.log("The closing balance:");
    console.log(`The total balance for account 1 with the name ${account1.name} is ${account1.balance}`);
    console.log(`The total balance for account 2 with the name ${account2.name} is ${account2.balance}`);
    console.log(`The total balance for account 3 with the name ${account3.name} is ${account3.balance}`);
    console.log(`The total balance for account 4 with the name ${account4.name} is ${account4.balance}`);
