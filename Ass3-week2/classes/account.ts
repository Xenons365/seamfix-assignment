import type { IAccount } from "../interfaces/account-interface";

export  class Account implements IAccount {

    customerId: number;
    customerName: string;
    accountNumber: number;
    balance: number;

    constructor(
        customerName: string,
        accountNumber: number,
        customerId: number
    ) {
        this.customerName = customerName;
        this.accountNumber = accountNumber;
        this.customerId = customerId;
        this.balance = 0;
    }

    deposit(amount: number): void {
        this.balance += amount;

        console.log(`Deposited ₦${amount}`);
    }

    withdraw(amount: number): void {

        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }

        this.balance -= amount;

        console.log(`Withdrawn ₦${amount}`);
    }

    checkBalance(): void {
        console.log(
            `${this.customerName}'s balance is ₦${this.balance}`
        );
    }

    displayAccount(): void {
        console.log("Customer ID:", this.customerId);
        console.log("Customer Name:", this.customerName);
        console.log("Account Number:", this.accountNumber);
        console.log("Balance:", this.balance);
    }
}