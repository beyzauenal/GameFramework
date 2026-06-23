interface HeatingStrategy {
    regulateTemperature(currentTemperature: number): void;
}

class Eco implements HeatingStrategy {
    regulateTemperature(currentTemperature: number): void {
        console.log(
            `Eco mode: Regulating temperature to save energy. Current temperature: ${currentTemperature}°C`
        );
    }
}

class Comfort implements HeatingStrategy {
    regulateTemperature(currentTemperature: number): void {
        console.log(
            `Comfort mode: Regulating temperature for maximum comfort. Current temperature: ${currentTemperature}°C`
        );
    }
}

class SmartHomeSystem {
    private strategy: HeatingStrategy;

    constructor(strategy: HeatingStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: HeatingStrategy): void {
        this.strategy = strategy;
    }

    controlHeating(currentTemperature: number): void {
        this.strategy.regulateTemperature(currentTemperature);
    }
}

const s1: HeatingStrategy = new Eco();
const s2: HeatingStrategy = new Comfort();

const smartHome = new SmartHomeSystem(s1);
smartHome.controlHeating(18); 
