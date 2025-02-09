// Library classes

class ElectronicDevice {
    showDeviceType() {
        throw new Error("Method 'showDeviceType()' must be implemented.");
    }
}

class Laptop extends ElectronicDevice {
    showDeviceType() {
        console.log("I am a Laptop");
    }
}

class Smartphone extends ElectronicDevice {
    showDeviceType() {
        console.log("I am a Smartphone");
    }
}

// Factory Interface

class DeviceFactory {
    static createDevice() {
        throw new Error("Method 'createDevice()' must be implemented.");
    }
}

// Concrete Factories

class LaptopFactory extends DeviceFactory {
    static createDevice() {
        return new Laptop();
    }
}

class SmartphoneFactory extends DeviceFactory {
    static createDevice() {
        return new Smartphone();
    }
}

// Driver code

(() => {
    const laptop = LaptopFactory.createDevice();
    laptop.showDeviceType();

    const smartphone = SmartphoneFactory.createDevice();
    smartphone.showDeviceType();
})();
