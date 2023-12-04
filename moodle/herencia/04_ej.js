let vehicle = {
    vehicleType: "",
    wheels: 0,
    engineType: "",
    accelerate(){
        return "The vehicle is accelerating.";
    },
    brake(){
        return "The vehicle is braking.";
    },
    stop(){
        return "The vehicle is stopped.";
    }
};

let car = Object.create(vehicle);
let truck = Object.create(vehicle);

car.horsePower = 0;
car.brand = "";
car.turnRight = () => { return "The car is turning right." };
car.turnLeft = () => { return "The car is turning left." };

truck.loadCapacity = 0;
truck.truckUse = "";
truck.preparingLoad = () => { return "The truck is preparing the load." };
truck.unloading = () => { return "The truck is unloading." };

console.log(car);
console.log(truck);











