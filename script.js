const cells = document.querySelectorAll(".cell");
const result = document.getElementById("result");
const restart = document.getElementById("restart");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const winCombos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function checkWin(){
  for(let combo of winCombos){
    const [a,b,c] = combo;
    if(board[a] && board[a] === board[b] && board[a] === board[c]){
      result.innerText = `Le joueur ${currentPlayer} a gagné!`;
      gameOver = true;
      return;
    }
  }
  if(!board.includes("") && !gameOver){
    result.innerText = "Égalité!";
    gameOver = true;
  }
}

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    const index = cell.dataset.index;
    if(board[index] === "" && !gameOver){
      board[index] = currentPlayer;
      cell.innerText = currentPlayer;
      checkWin();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

restart.addEventListener("click", () => {
  board.fill("");
  cells.forEach(cell => cell.innerText = "");
  result.innerText = "";
  currentPlayer = "X";
  gameOver = false;
});
