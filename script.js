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
        var playersTurn = true;

        if (playersTurn = true) {
            this.turn = 'player';
        }
        else if (playersTurn = false) {
            this.turn = 'computer';
        }
    }
}

const gameLogic = new GameLogic()
console.log(gameLogic.turn)

const gameboard = document.querySelector('.gameboard')
const gridElements = document.querySelectorAll('#grid')
gridElements.forEach(element => {
    element.addEventListener('click', () => {
        
        if (gameLogic.playersTurn = true) {
            console.log('x')
        }
        else if (gameLogic.playersTurn = false) {
            console.log('o')
        }
        gameLogic.playersTurn = !gameLogic.playersTurn;
        console.log(gameLogic.playersTurn)      
    })


});




function tileActive() {
    console.log()
}


