import  { Account } from "./account";

export class SavingsAccount extends Account {

    constructor(
        customerName: string,
        accountNumber: number,
        customerId: number
    ) {
        super(customerName, accountNumber, customerId);
    }

    override deposit(amount: number): void {

        const bonus = amount * 0.05;

        this.balance += amount + bonus;

        console.log(`Deposited: ₦${amount}`);
        console.log(`5% bonus: ₦${bonus}`);
        console.log(`Total added: ₦${amount + bonus}`);
    }
}