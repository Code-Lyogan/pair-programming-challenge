class array {
    constructor(make, model, color, year) {
    this.mileage = 33298,
    this.make = make,
    this.model = model,
    this.color = color,
    this.year = year
    this.driveToWork = function() {
        console.log("Old Mileage = " + this.mileage);
            this.mileage += 33;
        console.log("New Mileage = " + this.mileage);
    };
    this.driveAroundWorld = function() {
        console.log("Old Mileage = " + this.mileage);
            this.mileage += 24000;
        console.log("New Mileage = " + this.mileage);
    };
    this.runErrands = function() {
        console.log("Old Mileage = " + this.mileage);
            this.mileage += 30;
        console.log("New Mileage = " + this.mileage);
    };
}
}
    let vehicle = new array("Hyundai", "Elantra", "Black", "2019");

    vehicle.driveToWork();

    vehicle.driveAroundWorld();

    vehicle.runErrands();