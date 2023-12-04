let option = prompt("¿Qué figura desea dibujar?: 1.Cuadrado 2.Triángulo 3.Rombo/Diamante");

if (isNaN(option) || option > 3 || option < 1) {
    console.log("ERROR: El valor introducido debe ser una de las opciones (1, 2, 3)");
} else {
    let n = prompt("¿Cuántas filas desea dibujar?");

    if (isNaN(n) || n <= 1) {
        console.log("ERROR: El valor introducido debe ser un número entero mayor que 0.");
    } else {
        option = parseInt(option);

        switch (option) {
            case 1:
                for (let i = 0; i < n; i++) {
                    let row = "";
                    for (let j = 0; j < n; j++) {
                        if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                            row += "* ";
                        } else {
                            row += "  ";
                        }
                    }
                    console.log(row);
                }
                break;

            case 2:
                for (let i = 0; i < n; i++) {
                    let row = "";
                    for (let j = 0; j < n; j++) {
                        if (i === n - 1 || j === 0 || j === i) {
                            row += "* ";
                        } else {
                            row += "  ";
                        }
                    }
                    console.log(row);
                }
                break;

            default:

                if (n % 2 === 0) {
                    n++;
                }
                let middle = Math.floor(n / 2);

                for (let i = 0; i < middle; i++) {
                    let row = "";
                    for (let j = 0; j < n; j++) {
                        if (j >= middle - i && j <= middle + i) {
                            row += "* ";
                        } else {
                            row += "  ";
                        }
                    }
                    console.log(row);
                }

                for (let i = middle; i >= 0; i--) {
                    let row = "";
                    for (let j = 0; j < n; j++) {
                        if (j >= middle - i && j <= middle + i) {
                            row += "* ";
                        } else {
                            row += "  ";
                        }
                    }

                    console.log(row);
                }

                break;
        }
    }
}