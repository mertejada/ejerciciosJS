let carPartsControl = {
    parts: {
    wheels : 20,
    engines : 10,
    doors : 5,
    seats : 4
    },
    sum(partName, quantity) {
    this.parts[partName] += quantity;
    }
    }
    
    
    console.log(carPartsControl.parts.wheels);
    carPartsControl.sum("wheels", 10);
    console.log(carPartsControl.parts.wheels);
    