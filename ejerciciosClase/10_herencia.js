//HERENCIA: Es un mecanismo que permite que un objeto adquiera las propiedades de otro.

let animales = {
    vivo: true,
    desplazate() {
        return "voy andando";
    },
    //get o set puede estar separada del nombre por un espacio o no
    get estado() {
        return (vivo);
    },

    set estado(nuevoEstado) {
        this.vivo = nuevoEstado;
    }
};


let pulga = { 
    salta: "doy un saltito",
    desplazate() {
        return "voy saltando";
    }
};
 
let cienpies = {}; //
cienpies.desplazate = () => { return "voy andando con mis 100 patas" }; //añade la función desplazate al objeto cienpies

//conejo.__proto__ = animales; //conejo hereda de animales. NO SE USA

//MANERA DE HEREDAR: Object.setPrototypeOf(objeto, objetoHeredado):
Object.setPrototypeOf(pulga, animales); //pulga hereda de animales
//console.log(pulga.desplazate()); //Output: voy saltando

//PRUEBA GET Y SET
//---------------
console.log(animal.estado); //Output: true
console.log(pulga.estado); //Output: true

