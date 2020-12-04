// Set body to a variable
var body = document.body;

// Import html elements
var h1El = document.getElementById("jumboHead");
var jumbo = document.getElementById("myJumbo");
var startBtn = document.getElementById("startBtn");
var nextBtn = document.getElementById("nextBtn");
var main = document.getElementById("main");
var timer = document.getElementById("timer");

// Set default content
h1El.textContent = "> Coding Quiz";
jumbo.textContent = "Test your coding knowledge with this multiple choice quiz. Incorrect answers knock 2 seconds off your time.";
startBtn.textContent = "Start";
nextBtn.textContent = "Next";
nextBtn.style.visibility = "hidden";
main.style.visibility = "hidden";
var userScore = "";
var timeRem = 60;

// Question array with specific question objects
var questions = [
    {
        question: "Question 1: Who invented the Linux kernel?",
        choices: [
            "Linus Torvalds",
            "Bruce Springsteen",
            "Bill Gates",
            "Steve Jobs",
        ],
        correct: "Linus Torvalds",
    },
    {
        question: "Who wrote Moby Dick?",
        choices: [
            "JK Rowling",
            "Barrack Obama",
            "David Lynch",
            "Herman Melville",
        ],
        correct: "Herman Melville",
    },
]

var highScores = {
    initials: "",
    score: "",
};

var questionIndex = 0;
var correctAnswer = "";

function getQuestion() {
    var currentQuestion = questions[questionIndex];
    console.log(currentQuestion.choices);
    currentQuestion.correct;
    console.log(currentQuestion.correct);
    main.textContent = currentQuestion.question;
    
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        
        // Create list items buttons will render to
        var li = document.createElement("li");
        li.setAttribute("data-index", i);

        // Create buttons with text content from questions index
        var button = document.createElement("button");
        button.textContent = currentQuestion.choices[i];
        button.className = "btn btn-info myBtn ";

        // Send button list to HTML
        li.appendChild(button);
        main.appendChild(li);
        
        //console.log(button.className);
        console.log(li);

        // Write current correct answer to the correctAnswer variable for testing
        correctAnswer = currentQuestion.correct;
    }
}
getQuestion();
console.log(correctAnswer);

// Function that starts quiz logic when user clicks Submit
function startQuiz() {
    startBtn.style.visibility = "hidden";
    main.style.visibility = "visible";
    nextBtn.style.visibility = "visible";
    main.innerHTML = questions[0].question1;
    getQuestion();
    setTime();
}

// Timer function
function setTime() {
    var timerInterval = setInterval(function() {
        timeRem--;
        timer.textContent = timeRem;

        if(timeRem === 0) {
            clearInterval(timerInterval);
            timer.style.visibility = "hidden";
            //endQuiz();
        }
    }, 1000);
}

function endQuiz() {

}


// 
main.addEventListener("click", function(event) {
    var element = event.target;
    console.log(event.target.textContent);

    if (element.matches("button") === true && event.target.textContent === correctAnswer) {
        alert("Correct");
        ++userScore;
        console.log(userScore);

        localStorage.setItem("userScore", JSON.stringify(userScore));
        questionIndex++;
        getQuestion();
    }
    else {
        if (element.matches("button")) {
            alert("Incorrect");
            --userScore;
            console.log(userScore);
            localStorage.setItem("userScore", JSON.stringify(userScore));
            questionIndex++;
            getQuestion();
        }
    }
})