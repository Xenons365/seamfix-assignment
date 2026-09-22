import { createAccount } from "./services/account-service";


// ==========================================
// CREATE ACCOUNTS
// ==========================================

const savings = createAccount(
    "Chigozie",
    "savings"
);

const business = createAccount(
    "David",
    "business"
);

const premium = createAccount(
    "Michael",
    "premium"
);


// ==========================================
// SAVINGS ACCOUNT
// ==========================================

console.log("\n===== SAVINGS ACCOUNT =====");

savings.displayAccount();

savings.deposit(100000);

savings.checkBalance();


// ==========================================
// BUSINESS ACCOUNT
// ==========================================

console.log("\n===== BUSINESS ACCOUNT =====");

business.displayAccount();

business.deposit(50000);

business.withdraw(10000);

business.checkBalance();


// ==========================================
// PREMIUM ACCOUNT
// ==========================================

console.log("\n===== PREMIUM ACCOUNT =====");

premium.displayAccount();

premium.deposit(1000000);

premium.withdraw(600000);

premium.checkBalance();