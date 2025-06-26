let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resetBtn");
let winalert=document.querySelector(".winalert");
let msg=document.querySelector("#msg");
let newBtn=document.querySelector(".newBtn");

let personX=true;
let count=0;

let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const reset = () => {
   personX=true;
   for(box of boxes){
    box.disabled=false;
    box.innerText="";
    winalert.classList.add("hide");
    count=0;
}
}

const checkwinner = () =>{
for(let pattern of winPattern){
       let box1 = boxes[pattern[0]].innerText;
       let box2 = boxes[pattern[1]].innerText;
       let box3 = boxes[pattern[2]].innerText;
       
       if(box1!="" && box2 != "" && box3 != ""){
        if(box1 === box2 && box2 === box3 ){
            console.log("winner",box1);
            showwinner(box1);
            boxDisableAll();
        }
       }
}
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(personX){
            box.style.color="black";
            box.innerText="X";
            personX=false;
        }
        else{
            box.style.color="darkred";
            box.innerText="O";
            personX=true;
        }
        box.disabled=true;
        count++;
        if(count===9){
            draw();
        }
        checkwinner();
    })
  
})

const showwinner = (box1) => {
    msg.innerText=`Congratulations,Winner is ${box1}`;
    winalert.classList.remove("hide");
}

const draw = () => {
    msg.innerText="Draw Match"
    winalert.classList.remove("hide");
}

const boxDisableAll = () => {
    for(box of boxes){
        box.disabled=true;
    }
}

resetBtn.addEventListener("click",reset);
newBtn.addEventListener("click",reset);

