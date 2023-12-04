let getSecondsFromNewYear = ()  => {
    let nowDate = new Date();
    let endYear = new Date(nowDate.getFullYear(),  11, 31, 23, 59, 0, 0); //

    return (endYear - nowDate)/1000;

}

console.log(getSecondsFromNewYear());