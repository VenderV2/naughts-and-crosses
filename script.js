class Player {
    constructor(sign) {
        this.sign = sign;
    }

}

const user = new Player('X');
const computer = new Player('O');

class Gameboard {
    constructor() {
        this.grid1  = '1';
        this.grid2  = '2';
        this.grid3  = '3';
        this.grid4  = '4';
        this.grid5  = '5';
        this.grid6  = '6';
        this.grid7  = '7';
        this.grid8  = '8';
        this.grid9  = '9';

        this.gridLayout = 
        [[this.grid1,this.grid2,this.grid3],
        [this.grid4,this.grid5,this.grid6],
        [this.grid7,this.grid8,this.grid9]]

    }
}
let startup = new Gameboard()

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
// console.log(gameLogic.playersTurn)
let sign = '';


const gameboard = document.querySelector('.gameboard')
const gridElements = document.querySelectorAll('#grid')
gridElements.forEach(element => {
    element.addEventListener('click', () => {

        // console.log(gameLogic.playersTurn)   
        if (gameLogic.playersTurn == true) {
            console.log('x')
            sign = 'x'
            element.textContent = 'X'
        }
        else if (gameLogic.playersTurn == false) {
            console.log('o')
            sign = 'o'
            element.textContent = 'O'
        }
        gameLogic.playersTurn = !gameLogic.playersTurn;
        // console.log(element.className)
        activeElement(element.className)
    })


});

function activeElement(elementID) {
    startup[elementID] = sign;
    startup.gridLayout = 
    [[startup.grid1,startup.grid2,startup.grid3],
    [startup.grid4,startup.grid5,startup.grid6],
    [startup.grid7,startup.grid8,startup.grid9]]
    Update()
}

const arrayColumn = (arr, n) => arr.map(x => x[n]);
function Update() {
    
    for (let i = 0; i < startup.gridLayout.length; i++) {
        console.log('i')  
        if (startup.gridLayout[i].every(a => a === startup.gridLayout[i][0])) {
            alert('player wins')
        }     
    }
    for (let j = 0; j < startup.gridLayout.length; j++) {
        console.log('j')
        if (arrayColumn(startup.gridLayout, j).every(a => a === startup.gridLayout[0][j])) {
            alert('player wins')
        }
    }
}
