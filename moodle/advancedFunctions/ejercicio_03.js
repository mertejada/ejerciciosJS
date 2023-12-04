function division(a,b){
    return a/b;
  }
  
  function pow(a, b) {
      if (b === 0) {
          return 1; 
      } else {
          return a * pow(a, b - 1); 
      }
  }
  
  function chooseOperation(a, b, chosenFunction) {
      return chosenFunction(a, b);
  }
  console.log(chooseOperation(2,5,pow));
  