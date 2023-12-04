//1ERA FORMA: PASAR A STRING CON EL METODO JSON.stringify()

const infoPersonal = {
    nombre: 'Mercedes',
    apellido: 'Tejada',
    edad: 21,
    ubicacion: {
        ciudad: 'Granada',
        pais: 'España'
    }
}

const infoPersonalJSON = JSON.stringify(infoPersonal);


//2DA FORMA: PASAR A STRING MANUALMENTE:

function convertirString(obj){
    let cad = "{";

    for (let propiedad in obj) {
        if(typeof obj[propiedad] === "object"){
            cad += '"' + propiedad + '"' + ':' + convertirString(obj[propiedad]) + ',';
        }else{
            cad += '"' + propiedad + '"' + ':' + '"' + obj[propiedad] + '"' + ',';
    
        }
    }

    cad +="}";

    return cad;

}



console.log(convertirString(infoPersonal));
