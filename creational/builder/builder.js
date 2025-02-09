// Product, note: can be multiple products
class Computer {
    constructor() {
        this.cpu = "";
        this.gpu = "";
    }

    showSpecifications() {
        console.log(`CPU: ${this.cpu}, GPU: ${this.gpu}`);
    }
}

// Builder Interface
class ComputerBuilder {
    setCPU() {
        throw new Error("Method 'setCPU()' must be implemented.");
    }
    setGPU() {
        throw new Error("Method 'setGPU()' must be implemented.");
    }
    getComputer() {
        throw new Error("Method 'getComputer()' must be implemented.");
    }
}

// Concrete Builders
class GamingPCBuilder extends ComputerBuilder {
    constructor() {
        super();
        this.computer = new Computer();
    }

    setCPU() {
        this.computer.cpu = "Intel i9";
        return this;
    }

    setGPU() {
        this.computer.gpu = "NVIDIA RTX 4090";
        return this;
    }

    getComputer() {
        return this.computer;
    }
}

class OfficePCBuilder extends ComputerBuilder {
    constructor() {
        super();
        this.computer = new Computer();
    }

    setCPU() {
        this.computer.cpu = "Intel i5";
        return this;
    }

    setGPU() {
        this.computer.gpu = "Integrated Graphics";
        return this;
    }

    getComputer() {
        return this.computer;
    }
}

// Director
class Director {
    static buildComputer(builder) {
        return builder
            .setCPU()
            .setGPU()
            .getComputer();
    }
}

// Driver code
(() => {
    const gamingPC = Director.buildComputer(new GamingPCBuilder());
    gamingPC.showSpecifications();

    const officePC = Director.buildComputer(new OfficePCBuilder());
    officePC.showSpecifications();
})();