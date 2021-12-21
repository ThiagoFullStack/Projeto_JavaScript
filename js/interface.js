document.addEventListener('DOMContentLoaded',() =>{

  let squares = document.querySelectorAll('.square');
  
  squares.forEach((square)=>{
  square.addEventListener('click', handleClick);
})
})

function handleClick(event){

  let square = event.target;
  let postion = square.id;

  if(handleMove(postion)) { 

  setTimeout(()=>{
  if(playerTime == 0){
  alert('Cachorro Venceu!');
  }else{
  alert('Gato Venceu!');
  }
} , 13);
}

updateSquare(postion);
}

function updateSquare(postion){
  let square = document.getElementById(postion.toString());
  let symbol = board[postion]
  square.innerHTML = `<div class='${symbol}'></div>`

}

let reset = document.getElementById('reset');
reset.addEventListener('click', resetGame);

function resetGame(){
  board =['','','','','','','','',''];
  playerTime = 0;
  gameOver = false;
  clearGame();
}

function clearGame(){
  let squares = document.querySelectorAll('.square');
  squares.forEach((square)=>{
  square.innerHTML = '';
  square.classList.remove('board');
});

}

