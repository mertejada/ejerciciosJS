let myBirthday = new Date (2002, 7, 8, 20, 20, 0, 0); // 7 de agosto de 2002 a las 20:20
let myBirthdayHour = myBirthday.toLocaleTimeString(); //La hora en formato hh:mm:

console.log(`The hour I came to this world -> ${myBirthdayHour}`);