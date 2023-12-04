let food = {
    name: "",
    calories: 0,
    taste: "",
    ingredients: []
}

let fruit = Object.create(food);
fruit.origin = "";

let apple = Object.create(fruit);
apple.variety = "";
apple.color = "";


console.log(apple);
console.log(fruit);
console.log(food);