console.log("Welcome to Tic Tac Toe")
let player1 = prompt("Enter  player 1 name?","Guest1");
let player2 = prompt("Enter  player 2 name?","Guest2");
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover= new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;
var TurnCount = 0 ;

//function to change the turn

const changeTurn = () =>{
       // TurnCount++;
        return turn === "X" ? "0" : "X";
   
}

//funtion to check for a WIN

const checkWin = ()=> {
    let boxText = document.getElementsByClassName('boxtext');
   let wins = [
    [0, 1, 2, 4, 5, 0],
        [3, 4, 5, 4, 15, 0],
        [6, 7, 8, 4, 25, 0],
        [0, 3, 6, -6, 15, 90],
        [1, 4, 7, 4, 15, 90],
        [2, 5, 8, 14, 15, 90],
        [0, 4, 8, 4, 15, 45],
        [2, 4, 6, 4, 15, 135],
   ]
   wins.forEach(e => {
  if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
    document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
    document.querySelector(".line").style.width = "22vw";

    let name = '';
    if(boxText[e[0]].innerText === "X"){
    name = player1;
   }
   else{
    name  = player2;
   }
   music.play();
   
   document.querySelector(".info").innerText = name + " WON"
   isgameover = true;
  
   document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width='200px';
   document.querySelector(".imgbox").innerHTML;
   
   
   }
   
})
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === '' && !isgameover){
            TurnCount = TurnCount + 1;
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                if(TurnCount == 9){
                    gameover.play();
                    isgameover = true;
                    window.alert ("Game Over!");
                    
                }
                
                let name = '';
                if(turn === 'X'){
                    name = player1;
                }
                else{
                    name = player2;
                }
            document.getElementsByClassName("info")[0].innerText = "Turn for  " +  name;
             }
             
        }
      
    })
})
reset.addEventListener('click',()=>{
    resetgame  ();
   
});

const resetgame = () =>{
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(box => {
     box.innerText = "";
    
    });
   turn = "X";
   document.getElementsByClassName("info")[0].innerText = "Turn for  " +  player1;
   document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width='0px';
   music.pause();
   isgameover = false;
   TurnCount = 0;
   document.querySelector(".line").style.width = "0vw";
})
}
