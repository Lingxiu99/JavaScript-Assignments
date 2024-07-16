// Task 1:
class Vehicle {
    constructor(name, manufacturer, color, fuelType, numberOfWheels, numberOfDoors, numberOfSeats, maxSpeed, isAutomatic, isInsured, isRegistered, isWorking) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.color = color;
        this.fuelType = fuelType;
        this.numberOfWheels = numberOfWheels;
        this.numberOfDoors = numberOfDoors;
        this.numberOfSeats = numberOfSeats;
        this.maxSpeed = maxSpeed;
        this.isAutomatic = isAutomatic;
        this.isInsured = isInsured;
        this.isRegistered = isRegistered;
        this.isWorking = isWorking;
    }
}

module.exports = Vehicle;
