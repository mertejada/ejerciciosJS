
function createUser(name,adress,bodyDimensions) {
    return {
        name: name,
        adress: adress,
        bodyDimensions: {
            waist : bodyDimensions.split(",")[0],
            chest : bodyDimensions.split(",")[1],
            hips : bodyDimensions.split(",")[2]
        }
    }
}

let user1 = createUser("Laura","Calle Soledad, 2","90,100,110");
let user2 = Object.assign({}, user1); 


console.log(user1);
console.log(user2);