
//FECHAS: 1/1/1970 es el año 0 de las fechas porque es el año en el que se creó el sistema UNIX
//--------------------------------------------------------------------------------------------
//Hay que tener cuidado porque por ejemplo el mes 9 es octubre, no septiembre. Empieza a contar desde 0.

let ahora = new Date(); //crea un objeto con la fecha actual
console.log(ahora); //Output: 2021-10-03T10:49:18.093Z

let fecha1 = new Date(50000); //crea un objeto con la fecha: 1/1/1970 00:00:50
console.log(fecha1);//Output: 1970-01-01T00:00:00.050Z

let fecha2 = new Date("2023-01-01"); //crea un objeto con la fecha: 1/1/2023 00:00:00
console.log(fecha2);//Output: 2023-01-01T00:00:00.000Z

let fecha3 = new Date(2025, 9, 1, 14, 25, 0, 0); //crea un objeto con la fecha: 1/10/2025 14:25:00


//SETTER Y GETTER DE FECHAS
//-------------------------
fecha.getDate(); //Devuelve el día del mes (1-31) --> Output: 1
fecha.getFullYear(); //Devuelve el año --> Output: 2025
fecha.getDay(); //Devuelve el día de la semana (0-6) --> Output: 3
fecha.getHours(); //Devuelve la hora (0-23) --> Output: 14
fecha.getMilliseconds(); //Devuelve los milisegundos (0-999) --> Output: 0
fecha.getMinutes(); //Devuelve los minutos (0-59) --> Output: 25
fecha.getMonth(); //Devuelve el mes (0-11) --> Output: 9
fecha.getSeconds(); //Devuelve los segundos (0-59) --> Output: 0
fecha.getTime(); //Devuelve la fecha en milisegundos desde 1970 --> Output: 1745681100000



fecha.setDate(7); //Modifica el día del mes --> Output: 7
fecha.setFullYear(2030); //Modifica el año --> Output: 2030
fecha.setDate(-1); //Lo pone en el último día del mes anterior y entonces resta 1 --> Output: 30
fecha.serMinutes(-1); //Lo pone en el último minuto de la hora anterior y entonces resta 1 --> Output: 59

fecha.setDate(fecha.getDate()-1); //Resta un día a la fecha --> Output: 6
fecha.setDate(fecha.getDate()+1); //Suma un día a la fecha --> Output: 7



//OPERACIONES CON FECHAS
//----------------------

let ahoraOp = new Date();
let antesOp = new Date("2018-10-9");

let diferencia = ahoraOp - antesOp; //Devuelve la diferencia en milisegundos
