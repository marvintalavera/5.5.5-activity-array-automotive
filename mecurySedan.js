const Vehicle = require('./vehicle').Vehicle
class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num) {
        if (this.passenger <= this.maximumPassengers){
            console.log("Car has available room.");
        } else {
            console.log("Car is full.");
        }
    }
    start() {
        if (this.fuel > 0) {
            console.log("Car engine has started.");
            return this.started == true;
        } else {
            console.log("Car has no fuel.");
            return this.started == false; 
        }
    }
    scheduleService(mileage) {
        if (this.mileage > 30000) {
            console.log("Car requires maintenance.");
            return this.scheduleService == true;
        }
    }
}