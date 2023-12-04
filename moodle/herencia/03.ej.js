let persona = {
    bolsillo: 0,
    listaTareas: [],

    cobraSueldo(dinero) {
        this.bolsillo = dinero;
    },

    anyadeTarea(tarea) {
        this.listaTareas.push(tarea);
    },

    removeTarea(numTarea) {
        this.listaTareas.splice(numTarea, 1);
    }
};

let informatico = {
    listaTareas: [] 
};
let ordenanza = {
    listaTareas: [] 
};

Object.setPrototypeOf(informatico, persona);
Object.setPrototypeOf(ordenanza, persona);

informatico.cobraSueldo(2200);
informatico.anyadeTarea("Solucionar errores");

ordenanza.cobraSueldo(1500);
ordenanza.anyadeTarea("Limpiar oficina");

console.log(informatico.listaTareas);
console.log(ordenanza.listaTareas);

informatico.removeTarea(0);
ordenanza.removeTarea(0);

console.log(informatico.listaTareas);
console.log(ordenanza.listaTareas);
