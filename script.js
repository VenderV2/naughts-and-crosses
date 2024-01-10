class Player {
    constructor(sign) {
        this.sign = sign;
    }

}

const user = new Player('X');
const computer = new Player('O');

class Gameboard {
    constructor() {
        const grid1  = '';
        const grid2  = '';
        const grid3  = '';
        const grid4  = '';
        const grid5  = '';
        const grid6  = '';
        const grid7  = '';
        const grid8  = '';
        const grid9  = '';
    }
}

class GameLogic {
    constructor() {
        this.playersTurn = true;

        if (this.playersTurn = true) {
            this.turn = 'player';
        }
        else if (this.playersTurn = false) {
            this.turn = 'computer';
        }
    }
}

let gameLogic = new GameLogic()
console.log(gameLogic.playersTurn)

const gameboard = document.querySelector('.gameboard')
const gridElements = document.querySelectorAll('#grid')
gridElements.forEach(element => {
    element.addEventListener('click', () => {
        gameLogic.playersTurn = !gameLogic.playersTurn;
        console.log(gameLogic.playersTurn)   
        if (gameLogic.playersTurn == true) {
            console.log('x')
        }
        else if (gameLogic.playersTurn == false) {
            console.log('o')
        }
   
    }, {capture: true})


});

function say() {
    console.log(gameLogic.playersTurn)
}


