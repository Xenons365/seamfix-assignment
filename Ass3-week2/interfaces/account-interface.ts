export interface IAccount {
    customerId: number;
    customerName: string;
    accountNumber: number;
    balance: number;

    deposit(amount: number): void;
    withdraw(amount: number): void;
    checkBalance(): void;
    displayAccount(): void;
}