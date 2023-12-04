let calculator = {
    read(a,b){
        a = prompt("Introduce the first number");
        b = prompt("Introduce the second number");

        this.a= a;
        this.b= b;
    },

    sum(){
        return parseInt(this.a) + parseInt(this.b); //prompt devuelve un string, por eso hay que parsearlo
    }, 

    mul(){
        return parseInt(this.a) * parseInt(this.b);
    }
}

