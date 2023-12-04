console.log("Esto es un mensaje de prueba");



//1. CAMBIO DE TIPO DE DATO: No hay restricciones en el cambio de tipo de dato
//--------------------------------------------------------------------------
let cadenaTipoDato = true;
console.log(typeof cadena); // ---> Output: boolean
cadenaTipoDato = 4; 
console.log(typeof cadena); // ---> Output: number

//2. OPERACIONES CON STRINGS COMO NÚMEROS:
//-------------------------------------
console.log ("4"/"2"); // ---> Output: 2

let aStringOp="4";
let bStringOp="2";
let cStringOp=Number(a); //Number() convierte a número
console.log(c/b); // ---> Output: 2

//3. OPERACIONES CON STRINGS COMO CADENAS:
//-------------------------------------
//Tienen preferencia "+" como operador de concatenación, no como "/"
let cad1SOp = "4";
let cad2SOp = "3";
console.log(typeof( cad1 + cad2 )); // ---> Output: string
console.log(5+5+"4"); // ---> Output: 104. Primero suma 5+5 y luego concatena con "4"


//4. STRING Y NÚMEROS COMO BOOLEANOS:
//-----------------------------------
let booleano1 = Boolean(0); //FALSO
let booleano2 = Boolean(2); //TRUE. Cualquier valor que no sea 0 es TRUE
let booleano3 = Boolean(""); //FALSO
let booleano6 = Boolean("hola"); //TRUE
let booleano4 = Boolean(undefined); //FALSO
let booleano5 = Boolean(null); //FALSO
//Boolean() convierte a booleano


//5. OPERADORES:
//-------------

console.log(14**2);  //Potencia. 
console.log(14%3);  //Resto de la división (Módulo)
14+2 //Operador binario: Dos operandos
console.log(-a); //Operador unario: Un operando. Cambia el signo de a
console.log(+"4"); //Operador unario: Un operando. Convierte a número


let aOperadores=bOperadores=cOperadores=dOperadores=4+4+2;
console.log(aOperadores++); //Output: 10. Primero muestra el valor y luego lo incrementa
console.log(a); //Output: 11. Ya se ha incrementado

//6.INCREMENTO Y DECREMENTO:
let cadena1 = "hola",
    cadena2 = "adios",
    cadena3 = "Hola";

let aIn = "5",
    bIn = "7",
    cIn = "2",
    dIn = "2";

console.log(a>b); //FALSE
console.log(cadena1<cadena2);//TRUE
console.log(3<cadena2);//TRUE. Compara el valor numérico de la cadena
console.log(0 == false); //TRUE
console.log("" == false); //TRUE
console.log(2 === 2); //TRUE. COMPROBACIÓN ESTRICTA: Compara el valor y el tipo de dato
console.log("2" === 2); //FALSE. COMPROBACIÓN ESTRICTA