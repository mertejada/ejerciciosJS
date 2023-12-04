let numero = prompt("Escriba el número del que desea calcular su factorial: ");

while(isNaN(numero) || numero < 0){
	console.log("No ha introducido un valor válido. Inténtelo de nuevo.");
	numero = prompt("Escriba el número del que desea calcular su factorial: ");
}

function calcularFactorial(numero) {
    if (numero == 1) {
        return numero; // El factorial de 1 es numero
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}


console.log(calcularFactorial(numero));