let user = {
    name: "John",
    surname: "Smith"
}

user.name = "Pete";
delete user.name;

let isEmpty = (obj) => Object.keys(obj).length === 0;

/* Al haberlo hecho como una funcion tradicional (no arrow), he comentado esta parte
function isEmpty(obj) {
    return Object.keys(obj).length === 0; //si no hay ninguna propiedad, devuelve 0, es decir: false
}*/

console.log(isEmpty(user));

