//JSON: JavaScript Object Notation. Es un formato de texto que se utiliza para el intercambio de datos.
//-----------------------------------------------------------------------------------------------

const texto = `{
    "name" : "mi-proyecto",
    "version" : "1.0.0",
    "description" : "Este es mi primer proyecto",
    "main" : "index.js"
}`;

JSON.parse(texto); //convierte el texto en un objeto
console.log(JSON.parse(texto)); //Output: { name: 'mi-proyecto', version: '1.0.0', description: 'Este es mi primer proyecto', main: 'index.js' }
let user = {
    nombre: "Perico",
    apellido: "Palotes",
    direccion:{
        calle: "Pez",
        numero: 2
    }
}

JSON.stringify(user); //convierte el objeto en un texto. 
//console.log(JSON.stringify(user)) --> //Output: {"nombre":"Perico","apellido":"Palotes","direccion":{"calle":"Pez","numero":2}}
