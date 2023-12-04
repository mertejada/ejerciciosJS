


//1. CONDICIONALES:
//-----------------
let a = 5;
(a==5) ? a++ : a--; //Operador ternario. Es como un if-else
//console.log(a); ---> Output: 6

/*if(a==5){
    a++
}else{
    a--;
}*/

(a==5) ? a++ :
    (a==6) ? a-3 : a--;


//2. AND, OR, NOT: &&, ||, !
//-----------------------
let aCon=bCon = false,
    cCon=dCon = true;

let eCon=fCon = 0,
    gCon=hCon = 1;

let cad1=cad2 = "algo",
    cad3=cad4 = "";

console.log( a || c || b); //Output: true. Devuelve el primer valor verdadero que encuentra (c)
b || a || console.log("hola"); //Output: hola. Devuelve el primer valor verdadero que encuentra (b)
console.log( d && c ); //Output: true. Devuelve el primer valor falso que encuentra (no lo encuentra, así que devuelve true)

if (! ( a && b) || ( d && c )){
    console.log("dentro");
}
//Output: dentro. Si no se pone el paréntesis, primero se evalúa la negación y luego el OR.

const ALTURA = 0;
console.log ( ALTURA || 160); // Output: 160. Devuelve el primer valor que no es nulo, unfind o 0
console.log ( ALTURA ?? 160);  // Output: 0. Devuelve el primer valor que no es nulo o undefined


//3. BUCLES
//---------

let i = 4;
while(i){
    i--;  
}
//console.log(i); ---> Output: 0

for(;;) console.log("hola"); //(;;) es lo mismo que (true). Bucle infinito, no recomendado.

//BREAK: Sale del bucle cuando se cumple la condición. No se ejecuta el código que hay debajo.
let suma = 0;
while(1){
    suma++;
    if(suma==5){
        console.log(suma);
        break; //No recomendado 
    }
}

//CONTINUE: Salta a la siguiente iteración cuando se cumple la condición. No se ejecuta el código que hay debajo.
for(suma = 0 ; suma<5 ; suma++){
    if(!(suma%2)){
        continue;
    }

    console.log(suma)
}