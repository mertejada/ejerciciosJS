let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }
    
    
    
    
    let sum = 0;
    
    
    for (let property in salaries) {
    sum += salaries[property];
    }
    
    
    
    /* Al principio lo hice así pero creo que es menos correcto:
    sum = 0;
    i = 0;
    while (salaries.length > 0) {
    sum += salaries[i];
    i++;
    }
    */
    
    
    console.log(sum); 