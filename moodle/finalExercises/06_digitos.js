//RECURSIVO:

let numero = prompt("Escriba el número del que desea calcular sus dígitos: ");

while (isNaN(numero) || numero < 0) {
    console.log("No ha introducido un valor válido. Inténtelo de nuevo");
    numero = prompt("Escriba el número del que desea calcular sus dígitos: ");
}

function calcularDigitos (numero){
    let numeroStr = numero.toString();
    if(numeroStr.length == 1){
        return 1;
    }else{
        return 1 + calcularDigitos(numeroStr.slice(0,-1));
    }
}

console.log(calcularDigitos(numero));


//NO RECURSIVO:

/*
let numero = prompt("Escriba el número del que desea calcular sus dígitos: ");

while (isNaN(numero) || numero < 0) {
    console.log("No ha introducido un valor válido. Inténtelo de nuevo");
    numero = prompt("Escriba el número del que desea calcular sus dígitos: ");
}

function calcularDigitos (numero){
    let numeroStr = numero.toString();
    let digitos = numeroStr.length;
    return digitos;
}

console.log(calcularDigitos(numero));
*/
