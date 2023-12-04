let date = new Date ("2023-3-6"); // 7 de agosto de 2002 a las 20:20

let getWeeklyDay = (date) => {
    let days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return days[date.getDay()];
}; //Al principio lo hice con un if...else pero mientras lo hacía me di cuenta de que era más fácil con un array.

console.log(getWeeklyDay(date));
