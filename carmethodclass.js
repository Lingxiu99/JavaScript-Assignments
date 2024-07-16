// Taks 3:
const Car = require('./carclass');

class CarMethods extends Car {
    constructor(name, manufacturer, color, fuelType, numberOfWheels, numberOfDoors, numberOfSeats, maxSpeed, isAutomatic, isInsured, isRegistered, isWorking, model, year, price, isUsed, isDamaged) {
        
        super(name, manufacturer, color, fuelType, numberOfWheels, numberOfDoors, numberOfSeats, maxSpeed, isAutomatic, isInsured, isRegistered, isWorking, model, year, price, isUsed, isDamaged);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }

    getPrice() {
        return this.price;
    }

    getSummary() {
        return `This car is a ${this.year} ${this.manufacturer} ${this.model}. It is ${this.color} in color, ${this.fuelType} powered, and has ${this.numberOfWheels} wheels. It ${this.isAutomatic ? 'has' : 'does not have'} an automatic transmission. The car is currently ${this.isUsed ? 'used' : 'new'}, ${this.isDamaged ? 'damaged' : 'not damaged'}, ${this.isInsured ? 'insured' : 'not insured'}, and ${this.isRegistered ? 'registered' : 'not registered'}. It has a maximum speed of ${this.maxSpeed} km/h and can seat ${this.numberOfSeats} people. The price of the car is $${this.price}.`;
    }
}

module.exports = CarMethods;
