class Animal {
    constructor(group, name, age, pawsFinsNumber, movingWay, habitat, tail){
        this.group = group;
        this.name = name;
        this.age = age;
        this.pawsFinsNumber = pawsFinsNumber;
        this.movingWay = movingWay;
        this.habitat = habitat;
        this.tail = tail;
    }
    sleep = () => `The animal ${this.name} is sleeping`;
    awake = () => `The animal ${this.name} is awake`;
    move = () => `The animal ${this.name} is moving`;
    stop = () => `The animal ${this.name} has stopped`;

}

class Mammal extends Animal {
    constructor(name, age, pawsFinsNumber, movingWay, habitat, tail){
        super('Mammal', name, age, pawsFinsNumber, movingWay, habitat, tail);
    }
}

class Reptile extends Animal {
    constructor(name, age, pawsFinsNumber, movingWay, habitat, tail){
        super('Reptile', name, age, pawsFinsNumber, movingWay, habitat, tail);
    }
}

class Fish extends Animal {
    constructor(name, age, pawsFinsNumber, movingWay, habitat, tail){
        super('Fish', name, age, pawsFinsNumber, movingWay, habitat, tail);
    }
}


let shark = new Fish("Shark", 5, 0, "Swimming", "Sea", true);
let cat = new Mammal("Cat", 2, 4, "Walking", "Land", true);
let snake = new Reptile("Snake", 1, 0, "Slithering", "Land", false);

console.log(shark);
console.log(cat);
console.log(snake);