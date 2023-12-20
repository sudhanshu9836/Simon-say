let gameSeq = []; 
let userSeq = [] ;
let color = ["yellow", "purple", "red", "blue"];
let started = false;
let level = 0 ;

let h3 = document.querySelector('h3');

document.addEventListener("keypress", function(){  // to start the game
    if (started == false){
        console.log("Game has started");
        started = true;

        levelUp(); // to increase the level 
    }
});

function btnFlash(btn){  // to flash a certain button
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");''
    },200);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randIndx = Math.floor(Math.random()*4);
    let randColor = color[randIndx];
    gameSeq.push(randColor); // Chosed random color and pushed it into gameSeq
    let randbtn = document.querySelector( `.${randColor}`);
    btnFlash(randbtn);
}

function checkAns(idx){
    if (userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500);
        }
    }
    else{
        h3.innerHTML =  `Game Over! Your score was <b> ${level} </b> <br> Please Try Again by pressing any key`
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        }, 200 );
        reset()
    }
}

function btnPress(){  //to add what user has pressed
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for (let btns of allBtns){
    btns.addEventListener("click",btnPress);
}

function reset(){
    level = 0;
    started = false;
    gameSeq = [];
    userSeq = [];
}