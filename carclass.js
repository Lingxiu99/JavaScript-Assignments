// Task 2:
const Vehicle = require('./vehicleclass');

class Car extends Vehicle {
    constructor(name, manufacturer, color, fuelType, numberOfWheels, numberOfDoors, numberOfSeats, maxSpeed, isAutomatic, isInsured, isRegistered, isWorking, model, year, price, isUsed, isDamaged) {
        
        super(name, manufacturer, color, fuelType, numberOfWheels, numberOfDoors, numberOfSeats, maxSpeed, isAutomatic, isInsured, isRegistered, isWorking);
        
        this.model = model;
        this.year = year;
        this.price = price;
        this.isUsed = isUsed;
        this.isDamaged = isDamaged;
    }
}

module.exports = Car;