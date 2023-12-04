class threeInARow {
    constructor(){
        this.board = [["", "", ""], ["", "", ""], ["", "", ""]];
        this.moves = 0;
        this.begginingTime = new Date();
        this.spentTime = undefined;
        this.endingTime = undefined;
    }


    restartGame() {
        this.board = [["", "", ""], ["", "", ""], ["", "", ""]];;
        this.moves = 0;
        this.spentTime = undefined;
        this.begginingTime = new Date();
    }

    writeTurn(){
        let i = prompt("Elija la fila donde quiere poner la ficha: ");
        let j = prompt("Elija la columna donde quiere poner la ficha: ");

        if(this.board[i-1][j-1] == ""){
            if(this.moves % 2 == 0){
                this.board[i-1][j-1] = "X";
            }else{
                this.board[i-1][j-1] = "O";
            }
            this.moves++;
        }else{
            console.log("Es posición no es válida, inténtelo de nuevo.")
        }

        if(this.winner()){
            this.endingTime = new Date();
            console.log("¡Felicidades! Has ganado. La partida ha durado " + Math.floor((this.endingTime - this.begginingTime)/1000) + " segundos.");
            if(prompt("¿Desa seguir jugando? y/n: ") == "y"){
                this.restartGame();
            }else{
                console.log("¡Hasta la próxima!")
            }
        }
    }

    showBoard(){
        for(let i = 0; i < this.board.length; i++){
            console.log(this.board[i]);
        }
    }

    winner() {
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] !== "" && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) {
                return true;
            }
            if (this.board[0][i] !== "" && this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i]) {
                return true; 
            }
        }
        if (this.board[0][0] !== "" && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
            return true; 
        }
        if (this.board[0][2] !== "" && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
            return true; 
        }

        

    
        return false; 
    }
    
}

let game = new threeInARow();
game.showBoard();

do {
    game.writeTurn();
    game.showBoard();
} while (game.winner() == false);
