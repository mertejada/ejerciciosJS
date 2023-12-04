let numero = prompt("Escriba el número del que desea calcular su suma: ");

while (isNaN(numero) || numero < 0) {
    console.log("No ha introducido un valor válido. Inténtelo de nuevo");
    numero = prompt("Escriba el número del que desea calcular su suma: ");
}

function calcularSumaNumero(numero) {
    if (numero == 1) {
        return 1; // caso base
    } else {
        return numero + calcularSumaNumero(numero - 1);
    }
}

console.log(calcularSumaNumero(Number(numero)));

