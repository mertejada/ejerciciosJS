let frutas = {
    "manzanas golden": 25,
    "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera erlcolina": 12
};

function fruitsWeight(obj) {
    let fruitsWeightObject = {};

    for (let property in obj) {
        let fruitName = property.split(" ")[0]; //esta será la propiedad del nuevo objeto
        let weight = obj[property];

        if (fruitsWeightObject[fruitName] === undefined) { //si no existe la propiedad(la fruta), la creamos
            fruitsWeightObject[fruitName] = weight; 
        } else {
            fruitsWeightObject[fruitName] += weight; //si ya existe, le sumamos el peso
        }
    }
    return fruitsWeightObject;
}

console.log(fruitsWeight(frutas));
