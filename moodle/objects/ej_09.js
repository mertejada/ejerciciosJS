let fruits = {
    fruitName: {
        manzanas: 10,
        peras: 15,
        platanos: 20
    },
    sell(fruit, kg) {
        this.fruitName[fruit] -= kg;
    },
    buy(fruit, kg) {
        this.fruitName[fruit] += kg;
    }
    }

    console.log(fruits.fruit.manzanas);
    fruits.sell("manzanas", 5);
    console.log(fruits.fruit.manzanas);
    fruits.buy("manzanas", 5);
    console.log(fruits.fruit.manzanas);
    console.log(fruits?.outOfStockDate); // undefined
    console.log(fruits?.buyingDate); // undefined
    
