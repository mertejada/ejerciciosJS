class Puzzle {
    constructor(rows, columns, emptySpaces) {
        this.rows = rows;
        this.columns = columns;
        this.emptySpaces = emptySpaces;
        this.board = this.board || this.createBoard();
        this.moves = 0;
        this.begginingTime = new Date();
        this.spentTime = undefined;
        this.endingTime = undefined;
    }

    restartGame() {
        this.board = [];
        this.moves = 0;
        this.spentTime = undefined;
        this.begginingTime = new Date();
        this.endingTime = undefined;
    }

    createBoard() {
        
        let board = [];
        
        let numbersNeeded = Array.from({ length: this.rows * this.columns - 1 }, (_, i) => i + 1);
        //tuve que encontrar la expresion (_, i) => i + 1  para poder hacerlo.
        //lo de arriba va a crear un array con la longitud de las filas por las columnas menos 1 (para dejar el espacio vacio) y va a ir rellenando el array con los numeros que se iteran en i + 1
        numbersNeeded.sort(() => Math.random() - 0.5); //esto es para que los numeros se ordenen aleatoriamente

        for (let i = 0; i < this.rows; i++) {
            board[i] = [];
            for (let j = 0; j < this.columns; j++) {
                board[i][j] = numbersNeeded.pop();
            }
        }

        board[this.rows - 1][this.columns - 1] = null;

        

        return board;
    }

    moveAdjacent(num) {
        let numPosition = this.findPosition(num);
        const emptyPosition = this.findPosition(null);

        if (this.isAdjacent(numPosition, emptyPosition)) { 
            //intercambio la posicion del numero con la del espacio vacio
            [this.board[numPosition.row][numPosition.col], this.board[emptyPosition.row][emptyPosition.col]] = 
            [this.board[emptyPosition.row][emptyPosition.col],this.board[numPosition.row][numPosition.col],];

            this.moves++;

            if (this.isSolved()) {
                this.endingTime = new Date();
                console.log("¡Felicidades! Has resuelto el rompecabezas. La partida ha durado " + Math.floor((this.endingTime - this.begginingTime)/1000) + " segundos.");
                this.restartGame();
            }
        }else{
            console.log("Ese número no es adyacente. Inténtelo de nuevo.")
        }
    }


    findPosition(value) {
        let numberPosition = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                if (this.board[i][j] === value) {
                    return { row: i, col: j }; //devuelve un objeto con la fila y la columna donde se encuentra el valor
                }
            }
        }
    }

    isAdjacent(numPosition, emptyPosition) {
        //numPosition y emptyPosition son objetos con la fila y la columna accedemos ellas
        return Math.abs(numPosition.row - emptyPosition.row) + Math.abs(numPosition.col - emptyPosition.col) === 1;
        //si estan en la misma fila, estaran en columnas distintas (y viceversa). Por tanto, uno de los terminos será igual a 0 y el otro 1 si son adyacentes.
    }

    showAdjacents() {
        const emptyPosition = this.findPosition(null);
        let adjacents = [];

        for(let i = 0; i < this.board.length; i++){
            for(let j = 0; j < this.board[i].length; j++){
                if(this.isAdjacent({row: i, col: j}, emptyPosition)){
                    adjacents.push(this.board[i][j]);
                }
            }
        }

        /* al principio lo habia hecho asi
    
        if (emptyPosition.row > 0) {
            adjacents.push(this.board[emptyPosition.row - 1][emptyPosition.col]);
        }
    
        if (emptyPosition.row < this.rows - 1) {
            adjacents.push(this.board[emptyPosition.row + 1][emptyPosition.col]);
        }
    
        if (emptyPosition.col > 0) {
            adjacents.push(this.board[emptyPosition.row][emptyPosition.col - 1]);
        }
    
        if (emptyPosition.col < this.columns - 1) {
            adjacents.push(this.board[emptyPosition.row][emptyPosition.col + 1]);
        }*/
        
    
        return adjacents.join(", ");
    }

    isSolved() {
        let isSolved = true;
        let flatArray = this.board.flat(); //flat() es un metodo que devuelve un array con los datos del array bidimensional
        for(let i = 0; i < flatArray.length - 1; i++){
            if(flatArray[i] !== flatArray.indexOf(flatArray[i]) + 1){ // si el indice coincide con el valor del array, es que esta ordenado
                isSolved = false;
            }
        }
        return isSolved;
    }

    showBoard() {
        let board= "";
        for(let i = 0; i < this.board.length ; i++){
            board+= "\n";
            for (let j = 0; j < this.board[i].length; j++){
                if(this.board[i][j] === null){
                    board+= "-"+" ";
                }else{
                    board+= this.board[i][j] + " ";
                }
            }
        }
        console.log(board);
        
    }
}

let board1 = new Puzzle(3, 3, 1);
board1.showBoard();

do{
    let num = prompt(`Introduzca el número que desea mover. Puede mover los números: ${board1.showAdjacents()}\n`);
    board1.moveAdjacent(parseInt(num));
    board1.showBoard();

}while(!board1.isSolved());