
const feedBack = document.getElementById('feedback');
const myButton = document.getElementById('submit-answer');
function checkAnswer(){
    const correctAnswer = '4'; 
    const userAnswer = document.querySelector('input[name = "quiz"]:checked').value;
    if (userAnswer === correctAnswer){
        feedBack.textContent = 'Correct! Well done.'
    }else{
        feedBack.textContent = "That's incorrect. Try again!"
    }
}

myButton.addEventListener('click', checkAnswer); 
console.log(feedBack);