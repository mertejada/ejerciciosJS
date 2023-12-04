let getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month, 0);  //0 es el día anterior del mes que le pasamos
    return date.getDate(); 
}

console.log(getLastDayOfMonth(2002, 9)); 