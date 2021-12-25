const inputValue = document.querySelector('.guess');
const checkInput = document.querySelector('.check');
const defaultScore = document.querySelector('.score');
const displayGuessNumber = document.querySelector('.number');
const displayMesssage = document.querySelector('.message');
const bodyElm = document.querySelector('body');
const resetElm = document.querySelector('.again');
const highScoreElm = document.querySelector('.highscore')


let intialScore = 18;
let highscore = 0;



function play() {
    var audio = new Audio('sounds/audio2.wav');
    audio.play();
}
function play1() {
    var audio = new Audio('sounds/audio1.wav');
    audio.play();
}
function play3() {
    var audio = new Audio('sounds/audio3.wav');
    audio.play();
}
function play4() {
    var audio = new Audio('sounds/audio4.wav');
    audio.play();
}


let secretNumber = (Math.trunc(Math.random() * 20) + 1);
console.log(secretNumber);
bodyElm.style.backgroundColor = '#99A3A4';
displayGuessNumber.style.width = '20rem';

checkInput.addEventListener('click', function (e) {
    e.preventDefault();
    let guessNumber = Number(inputValue.value);
    //displayGuessNumber.textContent = guessNumber;


    //when there is no Input
    if (!guessNumber) {
        displayMesssage.textContent = ' ⛔️ No Number...'
    } else if (guessNumber < 1) {
        displayMesssage.textContent = ' ⛔️ Number is negative, Please change the number...'
    }

    // when guess number is same with a secret Number
    else if (secretNumber === guessNumber) {
        displayMesssage.textContent = '🏆 Congratulation! Both are same Number';
        bodyElm.style.backgroundColor = '#2ECC71';
        displayGuessNumber.style.width = '40rem'
        displayGuessNumber.textContent = guessNumber;
        play3();
        if (intialScore > highscore) {
            highscore = intialScore;
            highScoreElm.textContent = highscore;

        }



        // when guess number is too high...
    } else if (guessNumber > secretNumber) {

        if (intialScore > 1) {
            displayMesssage.textContent = 'It is too high!';
            intialScore = intialScore - 1;
            defaultScore.textContent = intialScore;

        } else {
            displayMesssage.textContent = 'You lost the game!😩'
            bodyElm.style.backgroundColor = '#E74C3C';
            play4();
        }

    }
    // when guess number is too low...
    else if (guessNumber < secretNumber) {
        if (intialScore > 1) {
            displayMesssage.textContent = 'It is too low!';
            intialScore = intialScore - 1;
            defaultScore.textContent = intialScore;
        }
        else {
            displayMesssage.textContent = 'You lost the game!😩'
            bodyElm.style.backgroundColor = '#E74C3C';
            play4();
        }
    }

})

defaultScore.textContent = intialScore;


resetElm.addEventListener('click', function () {


    intialScore = 18;
    defaultScore.textContent = intialScore;
    secretNumber = (Math.trunc(Math.random() * 20) + 1);
    console.log('reset random:', secretNumber);
    displayMesssage.textContent = 'start guessing...'
    inputValue.value = '';
    displayGuessNumber.textContent = '?';
    bodyElm.style.backgroundColor = '#6495ED';
    displayGuessNumber.style.width = '20rem';


})





