let shop = {
    name: "Clothes shop",
    address : "Calle Fresa, 2",
    shirts : 20,
    pants : 100,
    shoes : 50
    }
    function multiplyNumeric(obj) {
    for (let property in obj) {
    if(Number(obj[property])){
    obj[property] *= 2; //multiplica por 2 el valor de cada propiedad
    }
    }
    return obj;
    }
    console.log(multiplyNumeric(shop));
    