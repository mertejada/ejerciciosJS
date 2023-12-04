let frutas={
    "manzanas golden": 25,
    "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera erlcolina": 12
}

function kgTotalAmount(obj){

    if(Object.keys(obj).length === 0){
        return "No hay frutas para calcular su peso.";
    }else{
        let kg=0;
        for(let property in obj){
            kg += obj[property]; //obj[property] es el valor de la propiedad, es decir: los kg
        }
        return kg;
    }
    
}

function kgTotalAmount2(obj){
    if(Object.keys(obj).length === 0){
        return "No hay frutas para calcular su peso.";
    }else{
        let kg=0;
        Object.values(obj).forEach(value => kg += value);
        return kg;
    }
    
}