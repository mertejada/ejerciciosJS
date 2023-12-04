//1. FUNCIONES: Las funciones son código que se puede reutilizar. Se pueden llamar desde cualquier parte del código.
//--------------------------------------------------------------------------------------------------------------

function sumarNumeros(num1 = 0, num2 = 0) {
    return (num1 + num2);
}
//console.log(sumarNumeros(2, 3)); ---> Output: 5

let usuario = { nombre: "perico", edad: 25 };
function compruebaMayoriaEdad(usuario) {
    if (usuario.edad >= 18) {
        return true;
    }
    return false;
}
//console.log(compruebaMayoriaEdad(usuario)); ---> Output: true


function garantizaAcceso(usuario) {
    if (compruebaMayoriaEdad(usuario)) {
        console.log(`acceso garantizado a ${usuario.nombre}`);
    } else {
        console.log(`acceso denegado a ${usuario.nombre}`);
    }
}
//garantizaAcceso(usuario); ---> Output: acceso garantizado a perico


function suma(a,b){
    let resultado = a+b;
    return resultado;
} 
//Se puede simplificar así: let suma = (a,b) => a+b;


function momentoDelDia(cuando){
    switch(cuando){
        case "mañana":
            return "buenos dias";
            break;
        case "tarde":
            return "buenas tardes";
            break;
        default:
            return "buenas noche";
    }
}

//2. FUNCIONES COMO EXPRESIONES: Se asignan a una variable. Se pueden llamar desde cualquier parte del código. 
//--------------------------------------------------------------------------------------------------------------

//1era diferencia: No se puede llamar a la función antes de declararla, las funciones normales sí.
//Función normal: Funciona.
console.log(saludo("Pepe"))
function saludo(quien){
    return `hola ${quien}`;
}

//Función como expresión: No funciona.
console.log(saludoExp("Pepe")); //Output: error
let saludoExp = function(quien){ //Se la asignamos a una variable
    return `hola ${quien}`;
};


//2da diferencia: Las funciones como expresiones se pueden declarar dentro de un if-else si han sido inicializadas fuera, las funciones normales no.
//Función normal: No funciona.
if(1){
    function saludar(quien){
        return `hola ${quien}`;
    }
}else{
    function despedirse(quien){
        return `adios ${quien}`;
    }
}
console.log(despedirse("pepe")); //Output: error. No existe la función despidete fuera del if-else.

//Función como expresión: Funciona. Ha sido inicializada fuera del if-else.
let saludarExp, despedirseExp;
if(1){
    let saludarExp = function(quien){ 
        return `hola ${quien}`;
    };
}else{
    let despedirseExp = function(quien){ 
        return `adios ${quien}`;
    };
}

console.log(despedirseExp("pepe")); //Output: adios pepe. 



//3. FUNCIONES FLECHA: Se asignan a una variable. Se pueden llamar desde cualquier parte del código. 
//--------------------------------------------------------------------------------------------------------------
let suma = (a,b) => (a+b);
let saludar = (quien) => `hola ${quien}`;
let irALaCarcel = (edad<18) ? // Sintaxis: let variable = (condicion) ? (valor) => return valor : (valor) => return valor;
    () => console.log("no vas") :
    () => console.log("si vas") ;

irALaCarcel(18); //Output: si vas

//Pon ejemplos de funciones de tipo flecha. Ve incremetnando la complejidad de las funciones:
//1. Función flecha sin parámetros:
let saludar = () => "hola";
//2. Función flecha con un parámetro:
let saludar = (quien) => `hola ${quien}`;
//3. Función flecha con más de un parámetro:
let suma = (a,b) => (a+b);
//4. Función flecha con más de un parámetro y más de una línea de código. Return implícito:
let suma = (a,b) => {
    let resultado = a+b;
    resultado;
};
//5. Función flecha con más de un parámetro y más de una línea de código. Uso de if:
let suma = (a,b) => {
    let resultado = a+b;
    if(resultado>10){
        return resultado;
    }
    return 0;
};
//6. Función flecha con más de un parámetro y más de una línea de código. Uso de if-else simplificado:
let suma = (a,b) => {
    let resultado = a+b;
    return (resultado>10) ? resultado : 0;
};
//7. Función flecha con más de un parámetro y más de una línea de código. Uso de if-else simplificado y return implícito. Lo más simplicficada posible:
let suma = (a,b) => (a+b>10) ? a+b : 0;
//8. Función flecha con más de un parámetro y más de una línea de código. Uso de if-else simplificado y return explicito. Lo más simplicficada posible:
let suma = (a,b) => {
    return (a+b>10) ? a+b : 0;
};
//9. Función flecha con más de un parámetro y más de una línea de código. Uso de bucles. Lo más simplicficada posible:
let suma = (a,b) => {
    let resultado = a+b;
    for(let i=0; i<10; i++){
        resultado++;
    }
    return resultado;
};
//10. Función flecha con más de un parámetro y más de una línea de código. Uso de bucles e if. Lo más simplicficada posible:
let suma = (a,b) => {
    let resultado = a+b;
    for(let i=0; i<10; i++){
        if(resultado>10){
            resultado++;
        }
    }
    return resultado;
};

