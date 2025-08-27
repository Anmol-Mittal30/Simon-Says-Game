let gameseq = [];
let userseq = [];
let arr = ['yellow', 'red', 'purple', 'green'];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keydown", function () {
 
    if (started === false) {
        console.log('Game is  Started..');
        started = true;
        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}
function userflash(btn) {
    btn.classList.add("user-flash");
    setTimeout( ()=> {
        btn.classList.remove("user-flash");
    }, 200)
}


function levelup() {
    userseq=[];
   
    level++;
      h2.innerHTML = `<b>Level ${level}</b>`;
    console.log("Level is now:", level);


    let randIdx = Math.floor(Math.random() * 4);
    let randColor = arr[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    gameflash(randBtn);// flash the bu0ton


}

function checkAns(idx) {
   if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
          setTimeout(levelup,1000);
        }
    }
    else {
        h2.innerHTML = ` Game Over! Your Score was <b> ${level}.</b> <br/> Press any key to start `;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor='white';
        }, 350);
        reset();
    }
}
function btnPress() {
    
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    level=0;
    userseq=[];
}