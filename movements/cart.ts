// ===============================
// PaymentStrategy Interface
// ===============================
export interface PaymentStrategy {
    pay(amount: number): void;
}

// ===============================
// Konkrete Strategien
// ===============================

// Kreditkarte
export class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Zahlung mit Kreditkarte: ${amount}€`);
    }
}

// PayPal
export class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Zahlung mit PayPal: ${amount}€`);
    }
}

// Banküberweisung
export class BankTransferPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Zahlung per Banküberweisung: ${amount}€`);
    }
}

// ===============================
// PaymentContext
// ===============================
export class PaymentContext {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    processPayment(amount: number): void {
        this.strategy.pay(amount);
    }
}

// ===============================
// Main – Testprogramm
// ===============================
export function runPaymentExample(): void {
    const context = new PaymentContext(new CreditCardPayment());
    context.processPayment(49.99);

    context.setStrategy(new PayPalPayment());
    context.processPayment(19.99);

    context.setStrategy(new BankTransferPayment());
    context.processPayment(99.0);
}
