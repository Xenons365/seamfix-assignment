import { Account } from "./account";

export class BusinessAccount extends Account {

    constructor(
        customerName: string,
        accountNumber: number,
        customerId: number
    ) {
        super(customerName, accountNumber, customerId);
    }

    override withdraw(amount: number): void {

        const fee = 500;
        const total = amount + fee;

        if (total > this.balance) {
            console.log("Insufficient balance");
            return;
        }

        this.balance -= total;

        console.log(`Withdrawn: ₦${amount}`);
        console.log(`Fee: ₦${fee}`);
        console.log(`Total deducted: ₦${total}`);
    }
}