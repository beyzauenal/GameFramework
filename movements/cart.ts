// ===============================
// PaymentStrategy Interface
// ===============================
public interface PaymentStrategy {
    void pay(double amount);
}

// ===============================
// Konkrete Strategien
// ===============================

// Kreditkarte
public class CreditCardPayment implements PaymentStrategy {
    @Override
    public void pay(double amount) {
        System.out.println("Zahlung mit Kreditkarte: " + amount + "€");
    }
}

// PayPal
public class PayPalPayment implements PaymentStrategy {
    @Override
    public void pay(double amount) {
        System.out.println("Zahlung mit PayPal: " + amount + "€");
    }
}

// Banküberweisung
public class BankTransferPayment implements PaymentStrategy {
    @Override
    public void pay(double amount) {
        System.out.println("Zahlung per Banküberweisung: " + amount + "€");
    }
}

// ===============================
// PaymentContext
// ===============================
public class PaymentContext {

    private PaymentStrategy strategy;

    public PaymentContext(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    public void setStrategy(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    public void processPayment(double amount) {
        strategy.pay(amount);
    }
}

// ===============================
// Main – Testprogramm
// ===============================
public class Main {
    public static void main(String[] args) {

        PaymentContext context = new PaymentContext(new CreditCardPayment());
        context.processPayment(49.99);

        context.setStrategy(new PayPalPayment());
        context.processPayment(19.99);

        context.setStrategy(new BankTransferPayment());
        context.processPayment(99.00);
    }
}
