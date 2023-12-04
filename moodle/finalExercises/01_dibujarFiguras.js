let option = prompt("¿Qué figura desea dibujar?: 1.Cuadrado 2.Triángulo 3.Rombo/Diamante");

while(isNaN(option) || option>3 || option<1){ //Control de errores
    console.log("ERROR: El valor introducido debe ser una de las opciones (1,2,3).Introduzca el valor de nuevo.");
    option = prompt("¿Qué figura desea dibujar?: 1.Cuadrado 2.Triángulo 3.Rombo/Diamante");
}
    
    let n = prompt("¿Cuántas filas desea dibujar?");
    
    while(isNaN(n) || n<=1){ //Control de errores
        console.log("ERROR: El valor introducido debe ser un número entero mayor que 0.");
        n = prompt("¿Cuántas filas desea dibujar?");}
        
        option = parseInt(option); //Hacemos esto porque el prompt devuelve un string y no un número.

        switch(option){
        case 1:
            for(let i = 0 ; i<n ; i++){
                let row = "";
                for(let j = 0; j<n ; j++){
                    row += "* ";
                }
                console.log(row);
            }
            break;
            
        case 2:
            for (let i = 0 ; i<=n ; i++){
                let row = "";
                
                for(let j = 0; j<i; j++){
                    row += "*  ";
                }
                 console.log(row);
            }
            break;

            default:
                n/=2;
                for (let i = 0; i <= n; i++) {
                    let row = "";
                    for (let j = 0; j < n - i; j++) {
                        row += "  ";
                    }
                    for (let k = 0; k <= 2 * i; k++) {
                        row += "* ";
                    }
                    console.log(row);
                }

                for (let i = n - 1; i >= 0; i--) {
                    let row = "";
                    for (let j = 0; j < n - i; j++) {
                        row += "  ";
                    }
                    for (let k = 0; k <= 2 * i; k++) {
                        row += "* ";
                    }
                    console.log(row);
                }
            break;
    
}