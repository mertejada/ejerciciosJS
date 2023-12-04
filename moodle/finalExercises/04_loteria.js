let numeroBoletosTotal = prompt("Escriba el número de boletos totales: ");

while(isNaN(numeroBoletosTotal) || numeroBoletosTotal < 0){
	console.log("No ha introducido un valor válido. Inténtelo de nuevo");
	numeroBoletosTotal = prompt("Escriba el número de boletos totales ");
}


let numeroBoletosJugados = prompt("Escriba el número de boletos jugados: ");

while(isNaN(numeroBoletosJugados) || numeroBoletosJugados < 0){
	console.log("No ha introducido un valor válido. Inténtelo de nuevo");
	numeroBoletosJugados = prompt("Escriba el número de boletos jugados: ");
}




function calcularFactorial(numero) {
   if (numero == 0) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}


function calcularProbabilidadesLoteria(numerosTotales,numerosElegidos){
    
    let n = calcularFactorial(numerosTotales);
    let r = calcularFactorial(numerosElegidos);
    let nMenosR = calcularFactorial(numerosTotales-numerosElegidos);
    
    let posibilidades = n / (r * nMenosR);
    
    return Number(posibilidades.toFixed(4));
    
    
}

console.log(calcularProbabilidadesLoteria(numeroBoletosTotal,numeroBoletosJugados));
