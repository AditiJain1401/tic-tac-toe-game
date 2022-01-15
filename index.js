const statusDisplay = document.querySelector('.gameStatus');
const resetButton = document.querySelector("button")
const blocks = Array.from(document.querySelectorAll('.block'));
const board = ['', '', '', '', '', '', '', '', ''];
const players = { player1: "X", player2: "O" };
const winningCombos = [
    [0, 1, 2], //1

    [3, 4, 5], //2
    [6, 7, 8], //3
    [0, 3, 6], //4
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//---------------------let variables-----------------
let moves = 0;
let gameActivityStatus = true;
let currentPlayer = players.player1;

statusDisplay.innerText = `It's ${currentPlayer}'s turn`

//-------------------to check if the block is occupied or not----------------------
function checkOccupied(block) {
    if (block.innerText === "X" || block.innerText === "O") {
        return false;
    }
    return true;
}

//-----------------------------to update the board---------------------------------
function updateBoard(index) {
    moves++;
    board[index] = currentPlayer;
}

//----------------------------to change the player----------------------------------
function changePlayer() {
    if (currentPlayer == players.player1) {
        currentPlayer = players.player2;
    } else {
        currentPlayer = players.player1;
    }
    statusDisplay.innerText = `It's ${currentPlayer}'s turn`;
}
//---------------------------to display the draw text----------------------------
function showDrawText() {
    statusDisplay.innerText = "Game Draws!";
    gameActivityStatus = "false";
    showRestartButton();
}
//-------------------------------checks if game is draw------------------------------
function checkDraw() {
    if (moves === 9) {
        showDrawText();
    } else {
        return false;
    }
}


//-----------------------to hightlight winning blocks-----------------------------
function changeWinningBlocksColor(winCombo) {
    for (let i = 0; i <= 2; i++) {
        let blockNumber = winCombo[i];
        let blockId = "#block" + blockNumber;
        document.querySelector(blockId).style.backgroundColor = "#ff3a3a";

    }
}


//---------------------------------to display winner ---------------------------------

function showWinningText() {
    statusDisplay.innerText = ` Hurray! ${currentPlayer} has Won`
    gameActivityStatus = "false";
    showRestartButton();
}
//------------------------------to checks if player wins -----------------------------------
function checkWin() {
    for (let i = 0; i <= 7; i++) {
        const winCombo = winningCombos[i];
        let a = board[winCombo[0]];
        let b = board[winCombo[1]];
        let c = board[winCombo[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            showWinningText();
            changeWinningBlocksColor(winCombo);
            return;
        }
    }
    changePlayer();
}

function showRestartButton() {
    resetButton.classList.remove("hide");
}
//-------------------------------to add move to the board--------------------------------
function addMove(block, index) {
    if (gameActivityStatus == "false") {
        statusDisplay.innerText = "Game Is Over! Restart The Game";
    } else {
        if (checkOccupied(block)) {
            block.innerText = currentPlayer;
            updateBoard(index);
            checkWin();
            checkDraw();
        }
    }
}

//----------------------------------to restart the game----------------------------------------
function resetBoard() {
    blocks.forEach((cell) => {
        cell.innerText = ''
        cell.style.backgroundColor =
            "#FEE3EC"
    });
    gameActivityStatus = true;
    for (let index in board) {
        board[index] = '';
    }
    currentPlayer = players.player1;
    statusDisplay.innerText = `It's ${currentPlayer}'s turn`
    resetButton.classList.add("hide")
}

blocks.forEach((block, index) => {
    block.addEventListener('click', () => addMove(block, index));
})


/*
//---------------------moves-------------------
var id1 = document.querySelector("#block1");
var id2 = document.querySelector("#block2");
var id3 = document.querySelector("#block3")
var id4 = document.querySelector("#block4")
var id5 = document.querySelector("#block5")
var id6 = document.querySelector("#block6")
var id7 = document.querySelector("#block7")
var id8 = document.querySelector("#block8")
var id9 = document.querySelector("#block9")

//--------to add event----------------------
id1.addEventListener("click", function() {
    if (id1.innerHTML) {
        if (currentPlayer == players.player1) {
            id1.innerText = "X"
        } else {
            id1.innerText = "O"
        }
        if checkWin( {
            showWinningText();
        }
        playerChange();
    }

});
id2.addEventListener("click", function() {
    if (currentPlayer == players.player1) {
        id2.innerText = "X"
    } else {
        id2.innerText = "O"
    }
    if checkWin( {
        showWinningText();
    }
    playerChange();
});
id3.addEventListener("click", function() {
    if (currentPlayer == players.player1) {
        id3.innerText = "X"
    } else {
        id3.innerText = "O"
    }
    if checkWin( {
        showWinningText();
    }
    playerChange();
});
id4.addEventListener("click", function() {
    if (currentPlayer == players.player1) {
        id4.innerText = "X"
    } else {
        id4.innerText = "O"
    }
    if checkWin( {
        showWinningText();
    }
    playerChange();
});
id5.addEventListener("click", function() {
    if (currentPlayer == players.player1) {
        id5.innerText = "X"
    } else {
        id5.innerText = "O"
    }
    if checkWin( {
        showWinningText();
    }
    playerChange();
});
id6.addEventListener("click", function() {
    if (currentPlayer == players.player1) {
        id6.innerText = "X"
    } else {
        id6.innerText = "O"
    }
    if checkWin( {
        showWinningText();
    }
    playerChange();
});
id7.addEventListener("click", function() {
    if (currentPlayer == players.player1) {
        id7.innerText = "X"
    } else {
        id7.innerText = "O"
    }
    if checkWin( {
        showWinningText();
    }
    playerChange();
});
id8.addEventListener("click", function() {
    if (currentPlayer == players.player1) {
        id8.innerText = "X"
    } else {
        id8.innerText = "O"
    }
    playerChange();
});
id9.addEventListener("click", function() {
    if (currentPlayer == players.player1) {
        id9.innerText = "X"
    } else {
        id9.innerText = "O"
    }
    if checkWin( {
        showWinningText();
    }
    playerChange();
});
*/