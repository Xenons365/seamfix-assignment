import  { SavingsAccount } from "../classes/savings-account";
import  { BusinessAccount } from "../classes/business-account";
import  { PremiumAccount } from "../classes/premium-account";
import  { Account } from "../classes/account";

let customerId = 1;
let accountNumber = 100001;

export function createAccount(
    customerName: string,
    accountType: string
): Account {

    const newCustomerId = customerId++;
    const newAccountNumber = accountNumber++;

    switch (accountType.toLowerCase()) {

        case "savings":
            return new SavingsAccount(
                customerName,
                newAccountNumber,
                newCustomerId
            );

        case "business":
            return new BusinessAccount(
                customerName,
                newAccountNumber,
                newCustomerId
            );

        case "premium":
            return new PremiumAccount(
                customerName,
                newAccountNumber,
                newCustomerId
            );

        default:
            throw new Error("Invalid account type");
    }
}