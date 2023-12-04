

//1. MATRICES: Son objetos que contienen una colección de datos. Se pueden modificar, añadir, eliminar, etc.
//---------------------------------------------------------------------------------------------------------
let matriz = new Array();
let matrizFrutas = ["manzana","pera","piña"];
//console.log(matrizFrutas); ---> Output: [ 'manzana', 'pera', 'piña' ]

matrizFrutas[0]; //manzana
matrizFrutas.length; //3. Número de elementos de la matriz
matrizFrutas.at(-1); //piña. Empieza a contar desde la derecha

let matrizComidas = [
    ["paella", "huevos", "patatas"],
    ["risotto", "pizza", "calzone"]
]

matrizComidas[0][1] = "ensalada"; //cambia huevos por ensalada. 
matrizComidas.length; //2. Número de "subarrays"
matrizComidas[0].length; //3. Tamaño del 1er "subarray"
matrizFrutas.at(-1); //empezando por la derecha

//RECORRER MATRICES: Se puede hacer con un for, un for-of o un forEach.

//FOR: Recorre la matriz y devuelve el índice de cada elemento.
for(let i=0; i<matrizFrutas.length; i++){
    console.log(i);
}

//FOR-OF: Recorre la matriz y devuelve el valor de cada elemento. LA MEJOR OPCIÓN.
for(let fruta of matrizFrutas){ 
    console.log(fruta);
}

for(let tipoComida of matrizComidas){
    for(let Comida of tipoComida){
        console.log(Comida);
    }
}

//FOREACH: Recorre la matriz y devuelve el valor de cada elemento. 
matrizFrutas.forEach(elemento=>console.log(elemento));


//FUNCIÓN PARA RECORRER MATRICES:
//------------------------------
let funcion = (elemento) => console.log (elemento);  //Con FOR-OF
matrizComidas.forEach(funcion);  //matrizComidas.forEach(elemento=>console.log(elemento));
//console.log(matrizComidas.forEach(funcion)); ---> Output: [ 'paella', 'huevos', 'patatas' ] [ 'risotto', 'pizza', 'calzone' ]

let funcion2 = (elemento) => {
    for(let subelemento of elemento){
         console.log(subelemento)
        }
    };
//console.log(matrizComidas.forEach(funcion2)); ---> Output: paella huevos patatas risotto pizza calzone

matrizComidas.forEach(fila=>{
    fila.forEach(i=>{
      console.log(i);
    })
  }); 
//console.log(matrizComidas.forEach(fila=>fila.forEach(i=>console.log(i))) ---> Output: paella huevos patatas risotto pizza calzone


//QUEUES
//FIFO

matrizFrutas.push(); //añade al final
matrizFrutas.pop(); //extrae el ultimo

//STACKS
//LIFO
matrizFrutas.push(); //añade al final
matrizFrutas.shift("elemento"); //añade al principio


//METODOS DE MATRICES:
//----------------------
matrizFrutas.slice(); 
matrizFrutas.splice(posicion_inicial, posicion_final, "e1", "e2"); // extraer, reemplacer y añadir
matrizFrutas.concat();

matrizFrutas.indexOf("");
matrizFrutas.includes();
matrizFrutas.lastIndexOf("");
matrizFrutas.join();
matrizFrutas.reverse();


//MATRICIES DE OBJETOS
//----------------------------
let objetos = [
    {nombre:  "manzana", cantidad: 4},
    {nombre:  "manzana", cantidad: 4}
];

objetos.findIndex(elemento=>elemento.nombre=="loquesea"); //devuelve el índice del elemento que cumple la condición
matrizFrutas.findIndex(elemento=>elemento=="paella"); //devuelve el índice del elemento que cumple la condición que es 0

let inventario = [
    {nombre:  "manzana", cantidad: 4},
    {nombre:  "piña", cantidad: 3},
    {nombre:  "naranjas", cantidad: 4},
    {nombre:  "cereza", cantidad: 6},
    {nombre:  "platano", cantidad: 4}
];

inventario.filter(elemento=>elemento.cantidad>4); //muestra elementos con esa condicion: cereza
inventario.filter(elemento=>(elemento.nombre=="manzana")&& (elemento.cantidad>5)); 

//MAP: Devuelve una matriz con el resultado de hacer una operación con cada uno de los elementos de la matriz
//---------------------------------------------------------------------------------------------------------
//NO SIRVE PARA COMPARATIVAS
let numeros = [5, 1, 2, 11, 21]; 

numeros.map(elemento=>elemento*2); //devuelve una matriz con el doble de cada elemento
console.log(numeros.map(elemento=>elemento*2));

let razas = ["salchicha","chihuahua"]; 
razas.map(elemento=>"perro "+ elemento);


//USAR FILTER PARA HACER COMPARATIVAS Y NUEVOS ARRAYS:
let razasAnimales = ["perro salchicha","perro chihuahua", "gato romano", "gato siames"]; 
let razasPerro = razasAnimales.filter(elemento => elemento.startsWith("perro"));
console.log(razasPerro);

let razasAnimales2=[
    {animal:"perro", raza:"salchicha", pacientes: 5},
    {animal:"perro", raza:"beagle", pacientes: 3},
    {animal:"gato", raza:"romano", pacientes: 1},
    {animal:"gato", raza:"siames", pacientes: 6}
];

let razasPerro2= razasAnimales2.filter(elemento=>elemento.animal==="perro");
let razasGato2= razasAnimales2.filter(elemento=>elemento.animal==="gato");
console.log(razasPerro2);



//REDUCE: Devuelve un único valor que es el resultado de hacer una operación con cada uno de los elementos de la matriz
numeros.reduce((acumulado,actual)=> acumulado+=actual); //devuelve la suma de todos los elementos: 40


//SPLIT Y JOIN TIENEN JUSTAMENTE LOS EFECTOS CONTRARIOS. SPLIT SEPARA Y JOIN UNE.
//--------------------------------------------------------------------------------
razas.split(",").join();  //
string.split();

//SORT: Ordena la matriz. La MODIFICA.
//-------------------------------------
numeros.sort(); 
/*function ordenarNumeros(a,b){
    let aux;
    aux = (a<b) ? -1 : 
        (a==b) ? 0 : 1;
    return aux;
}*/

let ordenarNumeros = (a,b) => a-b; 
let aux = numeros.sort((a,b)=>a-b); //ordena de menor a mayor

console.log(numeros.sort(ordenarNumeros));


//REVERSE: Le da la vuelta a la matriz. La MODIFICA.
//--------------------------------------------------
numeros.reverse();

//COMPARACION
//-----------
let razasAnimales3=razasBichos[
    {animal:"perro", raza:"salchicha", pacientes: 5},
    {animal:"perro", raza:"beagle", pacientes: 3},
    {animal:"gato", raza:"romano", pacientes: 1},
    {animal:"gato", raza:"siames", pacientes: 6}
];

let razasAnimales4=[
    {animal:"perro", raza:"salchicha", pacientes: 5},
    {animal:"perro", raza:"beagle", pacientes: 3},
    {animal:"gato", raza:"romano", pacientes: 1},
    {animal:"gato", raza:"siames", pacientes: 6}
];

let razasBichos2= [
    {animal:"perro", raza:"salchicha", pacientes: 5},
    {animal:"perro", raza:"beagle", pacientes: 3},
    {animal:"gato", raza:"romano", pacientes: 1},
    {animal:"gato", raza:"siames", pacientes: 6}
];

razasAnimales4==razasBichos2 //FALSE. No son el mismo sitio de memoria, aunque tengan los mismos valores
razasAnimales3==razasBichos //TRUE. Son el mismo sitio de memoria.

let pera={
    nombre:"pepe",
    edad: 30
}
Array.isArray(pera); //FALSE. No es una matriz, es un objeto

//COPIAS QUE APUNTAN A DISTINTOS SITIOS DE MEMORIA
//------------------------------------------------
let razasBichos3 = Array.from(razasBichos);  //Hay que hacer una copia para que apunte a otro sitio de memoria
razasBichos3==razasBichos; //FALSE. Ahora sí son sitios de memoria distintos