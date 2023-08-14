'use strict';
// document.querySelector('.message').textContent = '🥳 correct number';

// document.querySelector('.check').addEventListener('click', function(){
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess);

//     if(!guess){
//         document.querySelector('.message').textContent = '⛔️ No number!';
//     }
// })

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;


// document.querySelector('.number').textContent = secretNumber;



document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
     if(!guess){
         document.querySelector('.message').textContent = '⛔️ No Number!';
         
     }else if(secretNumber == guess){
        document.querySelector('.message').textContent = '🥳 correct number';
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('number').style.width = '30rem';
     }else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too High!';
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '🧨 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
     }else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📉 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '🧨 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
     }
     
})

document.querySelector('.again').addEventListener('click', function(){
    window.location.reload();
})
