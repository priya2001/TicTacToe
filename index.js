const cellElements = document.querySelectorAll(".game-board .cell");
const player1 = document.querySelector(".players .player1");
const player2 = document.querySelector(".players .player2");
const result = document.querySelector(".result");
const resultText=document.querySelector(".result h1")
const restart_button=document.querySelector(".result button");

// using forEach function
const Winning_Condition=[
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6]
] 

const playerO = "O";
const playerX = "X";
let Turn = true;


cellElements.forEach(cell=>{
    cell.onclick = ()=>{
        let currentPlayer = Turn?playerO:playerX;
        cell.classList.add("disabled");

        
        addIncell(cell,currentPlayer);
        if(winnerCheck( currentPlayer))
        {
            // console.log(currentPlayer  + "WINNER")
            result.classList.remove("inactive");
            resultText.innerText=currentPlayer + " Win the Game!!";
        }
         else if(isDraw()){
            // console.log("Draw the Game!!")
            result.classList.remove("inactive");
            resultText.innerText= " Draw the Game!!";
        }
        else{
            SwapPlayer();
        }
       
    }
})

// function for checking which player winning game
 function winnerCheck(currentPlayer){
    return Winning_Condition.some(condition=>{
        console.log(condition);
        return condition.every(index=>{
            console.log(index);
            // console.log(cellElements[index].classList.contains(currentPlayer));
            return cellElements[index].classList.contains(currentPlayer); 
        })
    })
 }

// function for Draw the match!! 
 function isDraw(){
    return [...cellElements].every(cell=>{
        return cell.classList.contains(playerX)||cell.classList.contains(playerO);
    })
 }

// function for swap the playing the chance
function SwapPlayer(){
    Turn=!Turn;
    if(Turn){
        player1.classList.add("active");
        player2.classList.remove("active");
    }
    else{
        player2.classList.add("active");
        player1.classList.remove("active");
    }
}
// some dynamic activies add in cell 
function addIncell(cell,currentPlayer){
    cell.innerHTML=currentPlayer;
    cell.classList.add(currentPlayer);
}

restart_button.onclick=()=>{
    location.reload();
}
