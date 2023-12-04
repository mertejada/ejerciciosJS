
//1. DECLARACIÓN DE VARIABLES: var, let, const (mayúsculas)
//----------------------------------------------------------
let numero=5,
    numero2=6;

let numero3=numero4=7; //apuntan al mismo sitio de memoria

console.log("el número vale", numero3);

const ROJO= "#FF0000"; //no cambiará
const azul; //ERROR. Hay que inicializarla.

//2. DECLARACIÓN DE OBJETOS
//-------------------------
let persona= {nombre:"protocolo",apellido:"Maximus"}; 
console.log(persona.nombre); //así se accede a su atributo


//3. DECLARACIÓN DE MATRICES:
//---------------------------
let matriz= ["rojo", "verde", "azul"];
//console.log(matriz[0]) ---> Output: rojo


//IMPRESIÓN SEGÚN LAS COMILLAS:
//-------------------------------
console.log("el número vale", numero3); //comillas dobles: se pueden usar variables
console.log('Esto es un mensaje de prueba'); //comillas simples: no se pueden usar variables
console.log(`La variable \t userName vale..... \t ${userName})`); //comillas francesas: se pueden usar variables y caracteres especiales


//NULL Y UNDEFINED: Null es un valor que se le asigna a una variable. Undefined es un valor que se le asigna a una variable que no se ha inicializado.
let nulo=null;
let indefinido;
//console.log(nulo); ---> Output: null
//console.log(indefinido); ---> Output: undefined


//USE STRICT: Obliga a declarar las variables antes de usarlas
"use strict" 
