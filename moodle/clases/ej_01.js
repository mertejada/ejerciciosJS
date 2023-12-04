class Vehicle {
    constructor(manufacturer, model, year, engineType, powerSource, power, cubicCm, topSpeed, driverLicense){
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.engineType = engineType;
        this.powerSource = powerSource;
        this.power = power;
        this.cubicCm = cubicCm;
        this.topSpeed = topSpeed;
        this.driverLicense = driverLicense;
    }

    ignition = () => "The engine is on";
    stop = () => "The engine is off";
    refill = () => "The tank is full";
    decreaseSpeed = () => "The speed is decreasing";
}

//Se hereda automaticamente el constructor de la clase Vehicle
class Car extends Vehicle {
}

class Truck extends Vehicle {
}

class Motorcycle extends Vehicle {
}

class Van extends Vehicle {
}

class Caravans extends Vehicle {
}
