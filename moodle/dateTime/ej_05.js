let getSecondsFromNewYear = ()  => { 
    let nowDate = new Date();
    let begginingYear = new Date(nowDate.getFullYear(),  0, 1, 0, 0, 0, 0);  

    return (nowDate - begginingYear)/1000; 

}

console.log(getSecondsFromNewYear());