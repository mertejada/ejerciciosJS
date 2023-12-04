//TIPOS DE NUMBER: BINARIO, OCTAL, ETC:
//-------------------------------------
let billion = 1e12; //1e12 = 1*10^12. Notación científica
let microsg = 1e-6; //1e-6 = 1*10^-6. Notación científica
let decimal = 15; //base 10: 15
let binario = 0b1111; //base 2: 1*2^3 + 1*2^2 + 1*2^1 + 1*2^0 = 8+4+2+1 = 15
let octal = 0o17; //base 8: 1*8^1 + 7*8^0 = 8+7 = 15
let hex = 0xf; //base 16: 15

console.log(typeof(binario)); //number

//1. OPERACIONES CON NÚMEROS:
//--------------------------
let real= 3.129;
let real2 = 3.9;
let numeroDescomunal = 1e500;

Math.floor(real); //Redondea hacia abajo. Devuelve un número entero. 3
Math.ceil(real2); //Redondea hacia arriba. Devuelve un número entero. 4
console.log(numeroDescomunal); //Infinito. No se puede representar ese número.


let real3 = 0.1;
let real4 = 0.2;

console.log(real3+real4);
((real3+real4)==0.3); //FALSE: 0.30000000000000004. No se puede representar ese número.

let sum = real3+real4;
sum.toFixed(1)==0.3; //TRUE: 0.3. Redondea a 1 decimal y lo compara con 0.3

//METODOS DE MATH BÁSICOS:
//---------------------------
Math.random(); //Devuelve un número aleatorio entre 0 y 1.
Math.max(); Math.min(); //Devuelve el máximo y el mínimo de una lista de números.
Math.abs(); //Devuelve el valor absoluto de un número.
Math.pow();//Devuelve la potencia de un número elevado a otro.
Math.sqrt(); //Devuelve la raíz cuadrada de un número.
Math.cbrt(); //Devuelve la raíz cúbica de un número.
Math.sign(); //Devuelve el signo de un número.
Math.round(); //Redondea un número al entero más cercano.
Math.trunc(); //Trunca un número, eliminando la parte decimal.
Math.floor(); //Redondea un número hacia abajo.
Math.ceil(); //Redondea un número hacia arriba.




//2. OPERACIONES CON CADENAS:
//--------------------------

let lista= `
    huevos
    leche
    yogur
`;

let cadena = "hola \\hola";
cadena.length; //longitud de la cadena
cadena[3]; //a. Devuelve el carácter en la posición 3
cadena.at((-3)); //o. Devuelve el carácter en la posición 3 empezando por la derecha
cadena[cadena.length-3]; //o. Devuelve el carácter en la posición 3 empezando por la derecha.

for (let letra of cadena){ //recorre la cadena con un for-of.
    console.log(letra); 
}

//METODOS DE CADENAS:
//------------------
cadena.toLowerCase();
cadena.toUpperCase();
cadena.indexOf("amados",9); //posicion de la primera ocurrencia a partir de la posicion 9
cadena.lastIndexOf("amados"); //posicion de la ultima ocurrencia
cadena.lastIndexOf("amassdshfb"); //devuelve -1 si no encuentra nada
cadena.includes("amados"); //devuelve true si encuentra la cadena
cadena.startWith("h");  //devuelve true si empieza por h
cadena.endsWith("a"); //devuelve true si acaba por a
cadena.split(" "); //devuelve un array con las palabras separadas por espacios
cadena.slice(10); //devuelve ese trozo de la cadena
cadena.slice(10,15); //devuelve ese trozo de la cadena
cadena.slice(-3); //devuelve ese trozo de la cadena empezando por la derecha
cadena.substring(10,15); //devuelve ese trozo de la cadena


//3. OPERACIONES DE CONVERSIÓN:
//----------------------------
console.log(typeof(octal.toString)); //string
(String(decimal) == decimal.toString()) ? console.log("a") : console.log("b"); //a

let nulo = null;
nulo.toString(); //ERROR: nulo no se puede convertir a string con el método toString()
console.log(String(nulo)); //null. No da error porque es un casting, no un método.

let indefinido;
console.log(String(indefinido)); //undefined
console.log(indefinido.toString()); // ERROR: indefinido no se puede convertir a string con el método toString()
console.log(typeof(indefinido)); //undefined

//a int
let cadena1 = "4";
let cadena2 = "4.5";
let cadena3 = "hola";
let cadena4 = "4hola";
let cadena5 = "hola4";

parseInt(cadena1); //4
parseInt(cadena2); //4. No es un número entero, así que lo trunca.
parseInt(cadena3); //NaN. No es un número entero.
parseInt(cadena4); //4. Empieza por un número, así que lo coge.
parseInt(cadena5); //NaN. No empieza por un número.

//a float
parseFloat(cadena1); //4
parseFloat(cadena2); //4.5
parseFloat(cadena3); //NaN
parseFloat(cadena4); //4
parseFloat(cadena5); //NaN


//USO DE NAN: Not a Number. Devuelve true si no es un número.
//----------------------------------------------------------
let cad="hola";
let nul=null;
let infinito=Infinity;

isNaN(real); //false
isNaN(cad); //true
isNaN(nul); //false. No es un número, pero no es NaN porque es nulo, no hay nada.
isNaN(infinito); //false. No es un número, pero no es NaN porque es infinito.

//Esta función es más estricta que isNaN() porque devuelve true solo si es NaN.
Number.isNaN(real); //false. No es NaN porque Number.cad es undefined.
Number.isNaN(cad); //false
Number.isNaN(nul); //false
Number.isNaN(infinito); //false

//USO DE ISFINITE: Devuelve true si es un número finito.
//-----------------------------------------------------
isFinite(real); //true
isFinite(cad); //false. No es un número.
isFinite(nul); //true. No es un número, pero es finito.
isFinite(infinito); //false. Es infinito.



console.log(Math.floor(Math.random() * 10)); //

//METODOS ARRAY
//-------------
let lista = ["hola", "adios", "buenos días"];

lista.length; //3
lista[0]; //hola
lista[lista.length-1]; //buenos días
lista.slice(1,2); //["adios"]
lista.concat(["hasta luego"]); //["hola", "adios", "buenos días", "hasta luego"]
lista.indexOf("adios"); //1
lista.lastIndexOf("adios"); //1
lista.includes("adios"); //true
lista.join(" "); //"hola adios buenos días"