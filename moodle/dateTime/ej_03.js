let myBirthday = new Date (2002, 7, 8, 20, 20, 0, 0); // 7 de agosto de 2002 a las 20:20

let getMyBornDay= (date) => {
    let days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return days[date.getDay()];
};
console.log(getMyBornDay(myBirthday));
