import  { Account } from "./account";

export class PremiumAccount extends Account {

    constructor(
        customerName: string,
        accountNumber: number,
        customerId: number
    ) {
        super(customerName, accountNumber, customerId);
    }

    override withdraw(amount: number): void {

        let total = amount;

        if (amount > 500000) {

            const fee = amount * 0.02;

            total = amount + fee;

            console.log(`2% fee: ₦${fee}`);
        }

        if (total > this.balance) {
            console.log("Insufficient balance");
            return;
        }

        this.balance -= total;

        console.log(`Withdrawn: ₦${amount}`);
        console.log(`Total deducted: ₦${total}`);
    }
}