
function createUser(name,adress,bodyDimensions) {
    return {
        name: name,
        adress: adress,
        bodyDimensions: {
            waist : bodyDimensions.split(",")[0],
            chest : bodyDimensions.split(",")[1],
            hips : bodyDimensions.split(",")[2]
        },
        getInfo(){
            return `${this.name} lives in ${this.adress} and its dimensions are ${this.bodyDimensions.waist}`;
        },
        getFriends(){
            if(this.friends){
                return this.friends;
            }else{
                return "This user has no friends :(";
            }
        },
        getMate(){
            return this?.mate;
        }
    }
}

let user1 = createUser("Laura","Calle Soledad, 2","90,100,110");
let user2 = Object.assign({}, user1); 


console.log(user1);
console.log(user2);
console.log(user1.getInfo());
console.log(user1.getFriends()); 
console.log(user1?.getMate());