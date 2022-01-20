alert("type the given word in 3 second . to start the game click ok")

window.addEventListener("load", gameStart)

let time = 3;
let score = 0;
let isPLaying;

let gameWord = document.querySelector(".game-word");
let input = document.querySelector("input");
let gameTime = document.querySelector(".time");
let gameScore = document.querySelector(".score");
let gameOver = document.querySelector(".game-over");
let seconds = document.querySelector(".seconds");

let words = [
    'hello',
    'flood',
    'time',
    'fruits',
    'google',
    'height',
    'family',
    'border',
    'encourage',
    'table',
    'village',
    'player',
    'column',
    'shine',
    'function',
    'number',
    'cursor',
    'shift',
    'tsunami',
    'profile',
    'return',
    'proper',
    'between',
    'second',
    'storage',
    'match',
    'session',
    'seven',
    'index',
    'counter',
    'message',
    'contact',
    'security',
    'about',
    'train',
    'brother',
    'udemy',
    'device',
    'scale',
    'comment',
    'thanks',
    'every',
    'course',
    'share',
    'website',
    'style'
]

function gameStart() {
    showWord(words);
    input.addEventListener('input', startGame);
    matchWord()
    setInterval(count, 1000)
}
function showWord(words) {
    let randomNumber = Math.floor(Math.random() * words.length)
    gameWord.innerHTML = words[randomNumber]
}
function count() {
    if (time > 0) {
        time--;
        gameTime.innerHTML = time
    }
    else if (time === 0) {
        isPLaying = false;
        gameOver.innerHTML='GAME OVER!'
        score=0
    }
}
   
function startGame(){
    if(matchWord()){
        isPLaying=true;
        time=4;
        showWord(words) 
        input.value='';
        score++; 
    }
    gameScore.innerHTML=score
}
function matchWord() {

    if (gameWord.innerHTML === input.value) {
        gameOver.innerHTML='CORRECT';
        gameOver.classList.add("correct")
        return true
    }
    else {
        gameOver.innerHTML='';
        return false
    }
}
