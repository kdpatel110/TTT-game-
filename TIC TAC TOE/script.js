let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#New-btn");
let msgcontanier = document.querySelector(".msg-contanier");
let msg =  document.querySelector("#msg");

let turnO = true;
let count = 0;

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgcontanier.classList.add("hide");
}

const winPatterns = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]
];

boxes.forEach( (box) => {
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerHTML = "O";
            turnO = false;
            count++;
        }else{
            box.innerHTML = "X";
            turnO = true;
            count++;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner)=>{
    msg.innerText = `congo winner is ${winner}`;
    msgcontanier.classList.remove("hide");
    disableBoxes();
} 


const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1V = boxes[pattern[0]].innerHTML;
        let pos2V = boxes[pattern[1]].innerHTML;
        let pos3V = boxes[pattern[2]].innerHTML;   

        if(pos1V != "" && pos2V != "" && pos3V != ""){
            if(pos1V === pos2V && pos2V === pos3V){
                showWinner(pos1V);
            }else{
                if(count === 9){
                    if(msgcontanier.classList.contains("hide")){
                        msg.innerText = "Game is Draw";
                        msgcontanier.classList.remove("hide");
                    }
                }
            }
        }
    }
}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);