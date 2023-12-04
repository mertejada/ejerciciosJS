let numero = prompt("Escriba el número del que desea invertir: ");

while (isNaN(numero) || numero < 0) {
    console.log("No ha introducido un valor válido. Inténtelo de nuevo");
    numero = prompt("Escriba el número del que desea invertir: ");
}

function invertirNumero (numero){
    let numeroStr = numero.toString(); // convertimos el número en string para poder usar el método charAt()
    let numeroInvertido = "";
    
    for(let i = numeroStr.length ; i>=0  ; i--){ // recorremos el string de atrás hacia adelante
        numeroInvertido+= numeroStr.charAt(i); // añadimos cada caracter al nuevo string que tendrá el número invertido
    }
    
    return numeroInvertido;
}

console.log(invertirNumero(numero));


  
