//CLASES 

class Usuario {
    constructor(nombre){
        this.nombre = nombre;
    }
    saluda(comoTeLlamas){
        return `Hola ${comoTeLlamas}, soy ${this.nombre}`;
    }
}

let usuario1 = new Usuario("Pepe");
usuario1.saluda("Juan");

//Clase como expresión: 

let perro = class {
    ladrar(){
        console.log("Guau");
    }
}

let p = new perro();
p.ladrar();

class Boton {
    constructor(texto){
        this.textoBoton = texto;
    }
    click(){
        console.log("Has hecho click en el botón" + this.textoBoton);
    }
    pinchar = () => {
        console.log("Has pinchado el botón" + this.textoBoton);
    }
}

let boton1 = new Boton("Esto es un boton");
setTimeout(boton1.click, 1000); //No funciona porque el this no es el objeto boton1
//Se arregla con una arrow function
setTimeout(boton1.pinchar, 1000); //Funciona porque el this es el objeto boton1

//HERENCIA DE CLASES
//------------------
//class extension/inherance: class hijo extends padre
class Animal {
    constructor(nombre){
        this.nombre = nombre;
    }
    corre(velocidad){
        this.velocidad = velocidad;
        console.log(`El animal ${this.nombre} corre a ${this.velocidad} km/h`);
    }
    para(){
        this.velocidad = 0;
        console.log(`El animal ${this.nombre} se ha parado`);
    }
}

class pulguilla extends Animal { //no hace falta poner constructor porque hereda el constructor de Animal
    salta(){
        console.log(`La pulga ${this.nombre} salta`);
    }
}

//sobreescritura de métodos

class Caballo extends Animal {
    constructor(nombre, raza){
        super(nombre); //llama al constructor de la clase padre
        this.raza = raza;
    }
    corre(){
        super.corre(20); //llama al método corre de la clase padre
    }
}


//SOBREEESCRITURA DE CONSTRUCTORES + METODOS ESTATICOS + PROPIEDADES PRIVADAS + PROPIEDADES PROTEGIDAS
//-----------------------------------------------------------------------------------------------------
//Propiedades privadas: Es una propiedad que no se puede acceder desde fuera de la clase. Es una convención, no existe en JS
class Animal2 {
    #peso; //Privada. El lenguaje impide acceder a ella desde fuera de la clase
    constructor(nombre){
        this._velocidad = 0; //propiedad privada. Se pone un guión bajo delante para indicar que es privada y que no se deber´ia acceder desde fuera de la clase
        this.nombre = nombre;
    }

    static comparaTamanyo(animal1, animal2){ //no tiene sentido llamar a un método de una instancia, por eso es static
        if(animal1.tamanyo > animal2.tamanyo){
            console.log(`${animal1.nombre} es más grande que ${animal2.nombre}`);
        }else if(animal1.tamanyo < animal2.tamanyo){
            console.log(`${animal2.nombre} es más grande que ${animal1.nombre}`);
        }
    }
}

console.log(Animal2.comparaTamanyo);

class Perro extends Animal2 {// no hace falta poner constructor porque hereda el constructor de Animal2
}

let perro2 = new Perro("Scooby");

class Gatito extends Animal2 {
    constructor(nombre, tamanyo){
        super(nombre);
        this.tamanyo = tamanyo;
    }
}

class Animal3{
    #peso;
    constructor(nombre, peso){
        this._velocidad = 0;
        this.nombre = nombre;
        this.#peso = peso;
    }

    setPeso(peso){
        this.#peso = peso;
    }

    getPeso(){
        return this.#peso;
    
    }
}

let animal3 = new Animal3("fufo", 20);
animal3._velocidad
animal3.setPeso(30);
animal3.#peso = 30; //no se puede acceder a la propiedad privada desde fuera de la clase

console.log(animal3.peso); //undefined
console.log(animal3._velocidad); //0
console.log(animal3.nombre); //fufo
console.log(animal3.getPeso()); //30


class Perro3 extends Animal3 {
    diAlgo(){
        return "Guau";
        super.#setPeso(10); //Si usamos metodos protegidos, no se heredan
    }
}


//INSTANCE OF: Comprueba si un objeto es instancia de una clase
//----------------------------------------------------------------

let perro4 = new Perro("Scooby");
console.log(perro4 instanceof Perro); //true

//MIXINS: Permite heredar de varias clases
//----------------------------------------

class Animal4 {
    #peso; //Privada. El lenguaje impide acceder a ella desde fuera de la clase
    constructor(nombre, peso){
        this._velocidad = 0;
        this.nombre = nombre;
        this.#peso = peso;
    }
    saluda(){
        console.log("Hola");
    }
}

let miMixin = (Animal4) => class extends Animal4 {
    adios(){
        console.log("Adios");
    }
}

class auxiliar extends miMixin(Animal4) {
    diBuenosDias(){
        console.log("Buenos dias");
    }
}

let a = new auxiliar("fufo", 20);   
a.saluda();
a.adios();
a.diBuenosDias();
