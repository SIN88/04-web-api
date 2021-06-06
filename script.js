var timerEl =  document.querySelector(".timer");
var mainEl = document.querySelector("#main");
var quizEl = document.querySelector(".quiz-container");

var secondsLeft = 30;
var currentQuestion = 0;
//need some variable to store our 1questions
var questions = [
    //question needs a q, list of answers, correct answer
    {
        message: "What does HTML stand for?",
        answers: ["Hypertext markup language", "Wrong answer 1", "Wrong answer 2", "Wrong answer 3"],
        correct: 0
    },
    {
        message: "What is the best programming language?",
        answers: ["markdown", "java", "PHP", "JavaScript"],
        correct: 3
    },
    {
        message: "What is css?",
        answers: ["a color", "a movie", "cascading style sheets", "dont know"],
        correct: 2
    },
    {
        message: "What is Javascript?",
        answers: ["a type of coffee", "a programming language", "a font", "a style of handwritting"],
        correct: 1
    },
    {
        message: "What is a boolean",
        answers: ["a new phone", "a true and false statement ", "a scripting language", "a tag"],
        correct: 1
    },
]

// kevin.doWork();

//function setTime() {
   // var timerInterval = setInterval(function () {
      //  secondsLeft--;
       // timerEl.textContext = secondsLeft + "seconds left until GAME OVER";

   // if (secondsLeft === 0) {
       // clearInterval(timerInterval);
//displayMessage ("GAME OVER");
//console.log("Game Over")
//}

  //}, 1000);
// }
myElement = document.getElementById("start-btn")
function setTime() {
    console.log("timer started!");
    document.getElementById("description").classList.add("hide");
    showQuestion();
   var timerInterval = setInterval(function () {
       secondsLeft--;
       timerEl.textContent = secondsLeft + " seconds left until GAME OVER";

   if (secondsLeft === 0) {
       clearInterval(timerInterval);
      alert("GAME OVER");
      console.log("Game Over")
   }

 }, 1000);
}

function endGame(){
    alert("game over!")
}

//function shows the next question on the page
function showQuestion(){
    //if this is the last question, we need to end the game instead of showing question
    if(currentQuestion === questions.length){
        //dont want to continue
        return endGame();
    }else{

    quizEl.classList.remove('hide');
    //put question into this el
    quizEl.innerHTML = `
    <h2>${questions[currentQuestion].message}</h2>
    <button>${questions[currentQuestion].answers[0]}</button>
    <button>${questions[currentQuestion].answers[1]}</button>
    <button>${questions[currentQuestion].answers[2]}</button>
    <button>${questions[currentQuestion].answers[3]}</button>
    `
    
    //create event listener for btn clicks on the parent el quiz-container
    
}
}

quizEl.addEventListener('click', function(event){
    console.log(event.target);
    //if the target is a button, they selected an answer
    if(event.target.tagName === "BUTTON"){
        //check if answer is right answer
        var chosen = event.target.textContent;
        var correct = questions[currentQuestion].answers.indexOf(chosen) === questions[currentQuestion].correct
        if(correct){
            alert("correct!")
        }else{
            alert("wrong!")
        }
        currentQuestion++;
        showQuestion();
    }
});
myElement.addEventListener("click", setTime)
// setTime()

