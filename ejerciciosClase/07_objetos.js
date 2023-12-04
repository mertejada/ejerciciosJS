
//1ERA FORMA: Declaracion de objeto
//----------------------------------
let usuario = {
    nombre: "Juan",
    profesion: "fontanero",
    medidas: {
        altura: 180,
        peso: 80
    }
};

for (let propiedad in usuario) {
    console.log(propiedad); //Output: nombre, profesion, medidas
    console.log(usuario[propiedad]); //Output: Juan, fontanero, { altura: 180, peso: 80 }
    console.log(usuario);
}

//2DA FORMA: Declaracion de objeto vacio
//---------------------------------------
let coche; 
coche = {}; //Inicializacion de objeto vacio
coche.marca = "Ford"; //Añadir propiedad al objeto
coche.modelo = "Mustang";
//console.log(coche); ---> Output:{ marca: 'Ford', modelo: 'Mustang' }

//3RA FORMA: Declaracion de objeto con new Object()
//--------------------------------------------------
function moto(paraMarca, paraModelo){
    this.marca = paraMarca;
    this.modelo = paraModelo;
}

let moto1 = new moto("Yamaha", "Fazer");
//console.log(moto1); ---> Output: moto { marca: 'Yamaha', modelo: 'Fazer' }


//4TA FORMA: REST PARAMETER - Permite pasar un numero indefinido de argumentos a una funcion
//------------------------------------------------------------------------------------------
const {...persona} ={  //syntax: const {...nombreObjeto} = {propiedad1: valor1, propiedad2: valor2, ...}
    direccion: "Plaza del Humilladero",
    altura: '180',
    cintura: '90'
};
//console.log(persona); ---> Output: { direccion: 'Plaza del Humilladero', altura: '180', cintura: '90' }


//ASIGNACION DE PROPIEDADES
//-------------------------
usuario.edad = 50;
coche.anyo = 2016;
//console.log(usuario); ---> Output: { nombre: 'Juan', profesion: 'fontanero', edad: 50 }


//BORRAR PROPIEDADES
//------------------
delete(usuario.profesion);
//console.log(usuario); ---> Output: { nombre: 'Juan', edad: 50 }    


//NOMBRE DE PROPIEDAD COMO VARIABLE
//---------------------------------
let llave = prompt("Introduce el nombre de la propiedad");
let cantidad = {
    [llave]: 10
};

console.log(cantidad.kg); //Output: 10
console.log(cantidad[llave]); //Output: 10
console.log(cantidad); //Output: { kg: 10 }


//5TA FORMA: FUNCIÓN CONSTRUCTORA
//------------------------------
function crearCoche(marca,modelo){ 
    return{//devuelve un objeto con las propiedades marca y modelo
        marca: marca,
        modelo: modelo
    };
}

let coche2 = crearCoche("Tesla","model 3");
let coche3 = crearCoche("Seat","Ibiza");
//console.log(coche2); ---> Output: { marca: 'Tesla', modelo: 'model 3' }


//6TA FORMA: ARROW FUNCTION CONSTRUCTORA
//---------------------------------------
let crearCoche2 = (marca,modelo) => { {marca,modelo} };
let coche4 = crearCoche2("BYD","han");
let coche5 = crearCoche2("Ford","Mustang Mach-E");

//console.log(coche4); ---> Output: { marca: 'BYD', modelo: 'han' }


//COMPARAR OBJETOS : Comparar con igual (==) o estrictamente igual (===) no es buena idea. Usar un bucle for-in.
//--------------------------------------------------------------------------------------------------------------
coche4=coche5; //Apunta a la misma direccion de memoria
//console.log(coche4==coche5); ---> Output: true

coche4.marca="Tesla"; //Modifica el objeto coche5 también porque apuntan a la misma direccion de memoria
//console.log(coche5); ---> Output: { marca: 'Tesla', modelo: 'Mustang Mach-E' } 
//console.log(coche4); ---> Output: { marca: 'Tesla', modelo: 'Mustang Mach-E' }

let cocheComparar1 = {marca: "Tesla", modelo: "Mustang Mach-E"};
let cocheComparar2 = {marca: "Tesla", modelo: "Mustang Mach-E"};
//console.log(cocheComparar1==cocheComparar2); ---> Output: false


//COPIAR OBJETOS Y ASIGNAR PROPIEDADES
//------------------------------------
let cocheCopia = {marca: "Tesla", modelo: "Mustang Mach-E"};
let cocheCopia2 = Object.assign({}, cocheCopia, usuario); //Copiar objeto cocheCopia en cocheCopia2 y añadirle las propiedades del objeto usuario
//console.log(cocheCopia2); ---> Output: { marca: 'Tesla', modelo: 'Mustang Mach-E', nombre: 'Juan', edad: 50 }


//PROPIEDADES ANIDADAS: Las pasa por referencia
//---------------------------------------------
usuario = {
    nombre: "pepe",
    medidas: {
        altura: 180,
        peso: 80
    }
};

let usuarioCopia = Object.assign({}, usuario);
//console.log(usuario2); ---> Output: { nombre: 'pepe', medidas: { altura: 180, peso: 80 } }
//Si cambio la altura del usuario2, tambien cambia la altura del usuario. Esto solo pasa con las propiedades ANIDADAS.

usuarioCopia2 = structuredClone(usuario);
//console.log(usuarioCopia2); ---> Output: { nombre: 'pepe', medidas: { altura: 180, peso: 80 } }
//Si cambio la altura del usuarioCopia2, NO cambia la altura del usuario porque structuredClone() hace una copia profunda del objeto y no pasa por referencia.

usuario.medidas.altura = 200;
//console.log(usuario); ---> Output: { nombre: 'pepe', medidas: { altura: 200, peso: 80 } }
//console.log(usuarioCopia); ---> Output: { nombre: 'pepe', medidas: { altura: 200, peso: 80 } }
//console.log(usuarioCopia2); ---> Output: { nombre: 'pepe', medidas: { altura: 180, peso: 80 } }



//FUNCIÓN COMO PROPIEDAD + THIS (PERMITE ACCEDER A LAS PROPIEDADES DEL OBJETO DESDE LA FUNCIÓN)
//--------------------------------------------------------------------------------------------------------------------
let usuarioThis = {
    nombre: "Pepe",
    medidas: {
        altura: 180,
        peso: 80
    },
    ciudadesVisitadas: ["Madrid", "Barcelona", "Valencia"],
    saludo(){
        console.log("Hola"); 
    },
    getNombre(){
        return this.nombre;
    },
    getPeso(){
        return this.medidas.peso;
    },

    /*
    getCiudadesVisitadas(){
        console.log(`${this.nombre} ha visitado: `);
        this.ciudadesVisitadas.forEach(
            ciudad => console.log(this.ciudadesVisitadas)
        )
    }*/

    getCiudadesVisitadas(){
        return (`${this.nombre} ha visitado: ${this.ciudadesVisitadas}`);
    }

};

function despedida(){
    console.log("Adios");
}

function getAltura(){
    return this.medidas.altura;
}

let devuelvePeso=()=>{return this.medidas.peso}; //NO FUNCIONA 

usuario.despedida = despedida;
usuario.saludo(); //Output: Hola
usuario.despedida(); //Output: Adios
usuario.getNombre(); //Output: Pepe
usuario.getAltura(); //Output: 180
usuario.getPeso(); //Output: 80
usuario.devuelvePeso(); //NO FUNCIONA
//usuario.getCiudadesVisitadas(); //Output: Pepe ha visitado: Madrid, Barcelona, Valencia
usuario.getCiudadesVisitadas(); //Output: Pepe ha visitado: Madrid, Barcelona, Valencia


//OPERADORES ESPECIALES
//---------------------
// Operador "?": Evita un error si la propiedad no existe.

//Con propiedades:
let usuario = {
    nombre: "Pepe",
    profesion: "pintor",
    direccion: {
        calle: "pez nº2",
        ciudad: "chiquitita"
    }
}

console.log(usuario.direccion.localidad); //Output: error
console.log(usuario.direccion?.localidad); //Output: undefined. 

console.log(usuario.medidas ? usuario.medidas.pecho : undefined); //Output: undefined.

//Con métodos:
let usuario = {
    nombre: "Pepe",
    profesion: "pintor",
    direccion: {
        calle: "pez nº2",
        ciudad: "chiquitita"
    },
    diAdios(){
        console.log("Adios");
    }
}

usuario.diAdios(); //Output: Adios
usuario.diAdios?.(); //Output: Adios
usuario.diHola?.(); //Output: undefined


let precios = {
    zapatillas: 50,
    sudadera: 40,
    pantalon: 60
}

Object.fromEntries( //Convierte un array de arrays en un objeto
    Object.entries(precios).map( //Convierte un objeto en un array de arrays
        propiedad => [propiedad[0], propiedad[1]-10] //Resta 10 a cada valor del objeto
    )
); 

//Output: { zapatillas: 40, sudadera: 30, pantalon: 50 }



