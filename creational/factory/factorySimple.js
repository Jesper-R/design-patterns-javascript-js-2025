class DeviceFactory {
    static createDevice(deviceType) {
        switch (deviceType) {
            case 'laptop':
                return new Laptop('Dell', 1000);
            case 'smartphone':
                return new Smartphone('Samsung', 500);
            default:
                throw new Error('Invalid device type');
        }
    }
}

class ElectronicDevice {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}

class Laptop extends ElectronicDevice {
    constructor(brand, price) {
        super(brand, price);
        this.type = 'laptop';
        this.hasKeyboard = true;
    }
}

class Smartphone extends ElectronicDevice {
    constructor(brand, price) {
        super(brand, price);
        this.type = 'smartphone';
        this.hasTouchscreen = true;
    }
}

(() => {
    const laptop = DeviceFactory.createDevice('laptop');
    console.log(laptop);

    const smartphone = DeviceFactory.createDevice('smartphone');
    console.log(smartphone);
})();
