let number = {
    current: 0,
    add() {
      this.current++;
      return this;  //devuelve el objeto en sí mismo, para poder encadenar métodos
    },
    subtract() {
      this.current--;
      return this; 
    },
    showNumber() {
      console.log(this.current);
      return this;  
    }
  };

  //esto hará que devolvamos siempre el objeto con su valor current actualizado

    