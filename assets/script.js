// Set body to a variable
var body = document.body;

// Import html elements
var h1El = document.getElementById("jumboHead");
var jumbo = document.getElementById("myJumbo");
var startBtn = document.getElementById("startBtn");
var progBar =  document.getElementById("progBar");
var main = document.getElementById("main");
var timer = document.getElementById("timer");

// Set default content
h1El.textContent = "Coding Quiz";
jumbo.textContent = "Test your coding knowledge with this multiple choice quiz. You're on the clock!";
startBtn.textContent = "Start";
progBar.style.visibility = "hidden";
var userAnswers = [];
var userScore = [];
var timeRem = 60;

// Questions Object
var quizQuestions = [
    Quest1 = {
        question: "Question 1: 2 + 2 =",
        answer1: "a: 1",
        answer2: "b: 2",
        answer3: "c: 3",
        answer4: "d: 4",
    }
]

// Begin Quiz when Start button is clicked
function startQuiz() {
    startBtn.style.visibility = "hidden";
    progBar.style.visibility = "visible";
    main.textContent = Quest1.question;
    function setTime() {
        var timerInterval = setInterval(function() {
            timeRem--;
            timer.textContent = timeRem;

            if(timeRem === 0) {
                clearInterval(timerInterval);
                endQuiz();
            }
        }, 1000);
    }
    setTime();
}