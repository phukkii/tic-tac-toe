let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset-btn');
let newGameBtn = document.querySelector('.new-btn');
let msg = document.querySelector('#winner');
let msgContainer = document.querySelector('.msg-container');


let turnO =true;
let i = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click', () =>{
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        }else{
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        i=i+1;

        cheakWinner();
    })

})

const cheakWinner = () => {
       
    

for(let patterns of winPatterns){
    
   let pos1 = boxes[patterns[0]].innerText;
   let pos2 = boxes[patterns[1]].innerText;
   let pos3 = boxes[patterns[2]].innerText;

   if(pos1 !== '' && pos2 !== '' && pos3 !== ''){

    if(pos1 === pos2 && pos2 === pos3){


        msgContainer.classList.remove("hide");
       msg.innerText = ` Congratulation! Winner is ${pos1}`;
        for(let box of boxes){
           
            box.disabled = true;
            
    }
    return;
        
   }
    if(i == 9){
    msgContainer.classList.remove("hide");
    msg.innerText = `Game Over! It's a Tie`;
   }
   
}
}}

resetBtn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
      
    });
        i=0;
        msgContainer.classList.add("hide")
});

newGameBtn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
        i=0;
        msgContainer.classList.add("hide");
    });
})


