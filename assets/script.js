// Set body to a variable
var body = document.body;

// Import html elements
var h1El = document.getElementById("jumboHead");
var jumbo = document.getElementById("myJumbo");
var startBtn = document.getElementById("startBtn");
var main = document.getElementById("main");
var timer = document.getElementById("timer");
var showScores = document.getElementById("viewHighScores");

// Set default content
h1El.textContent = "> Coding Quiz";
jumbo.textContent = "Test your coding knowledge with this multiple choice quiz. Incorrect answers knock 5 seconds off your time.";
startBtn.textContent = "Start";
showScores.textContent = "View High Scores";
main.style.visibility = "hidden";
var userScore = "";
var timeRem = 60;

// Question array containing question objects
var questions = [
    {
        question: "Question 1: Who invented the Linux kernel?",
        choices: [
            "Linus Torvalds",
            "Satya Nadella",
            "Bill Gates",
            "Steve Jobs",
        ],
        correct: "Linus Torvalds",
    },
    {
        question: "What does CSS stand for?",
        choices: [
            "Consistent Sheet Styling",
            "Complete Styling Sheet",
            "Copy Style Sheet",
            "Cascading Style Sheets",
        ],
        correct: "Cascading Style Sheets",
    },
    {
        question: "In the function 'function myFunction(potatoes) {}', what does 'potatoes' represent?",
        choices: [
            "Identifier",
            "Name",
            "Parameter",
            "Functional",
        ],
        correct: "Parameter",
    },
    {
        question: "What git command pushes changes from your local machine to your Github repository?",
        choices: [
            "git push origin main",
            "push changes.git",
            "git add .",
            "git this",
        ],
        correct: "git push origin main",
    },
    {
        question: "Which of the following is an example of a Boolean value?",
        choices: [
            "true",
            "function",
            "false",
            "True and false",
        ],
        correct: "True and false",
    },
    {
        question: "Your code defines var myVariable within function myFunction(). Can you reuse myVariable outside myFunction?",
        choices: [
            "No, local variables cannot be called outside their parent function.",
            "Yes, local variables can be reused anywhere in your code.",
            "Yes, variables defined in a function are considered global variables.",
            "No, variables cannot be declared within a function.",
        ],
        correct: "No, local variables cannot be called outside their parent function.",
    },
    {
        question: "In the loop 'for (i = 0; i < myList.length; i++)', how many times will the loop run?",
        choices: [
            "0",
            "2",
            "As many times as the length of the myList variable.",
            "It will return a syntax error. You need to define the loop number.",
        ],
        correct: "As many times as the length of the myList variable.",
    },
    {
        question: "Which link should you generally place at the bottom of your HTML?",
        choices: [
            "Javascript link, so that your scripts load after the HTML and styling.",
            "CSS link, so the styling loads after the HTML and scripts.",
            "Google Fonts, per Google's documentation.",
            "It doesn't matter. You can set external links anywhere in the HTML.",
        ],
        correct: "Javascript link, so that your scripts load after the HTML and styling.",
    },
]

var questionIndex = 0;
var correctAnswer = "";
var lastQuestion = questions[7].choices;

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
    getQuestion();
    setTime();
}

// Timer function
function setTime() {
    var timerInterval = setInterval(function() {
        timeRem--;
        timer.textContent = timeRem;

        if(timeRem < 1) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// Function that deducts time as a penalty for incorrect answers
function timePenalty() {
    timeRem -= 5;
}

// End quiz 
function endQuiz() {
    window.open("https://balokdecoy.github.io/coding-quiz/assets/high-scores.html", "_self");
}

// Event listener for button clicks
main.addEventListener("click", function(event) {
    var element = event.target;
    console.log(event.target.textContent);

    if (element.matches("button") === true && event.target.textContent === correctAnswer) {
        ++userScore;
        console.log(userScore);

        localStorage.setItem("userScore", JSON.stringify(userScore));
        questionIndex++;
        getQuestion();
    }
    else {
        if (element.matches("button")) {
            --userScore;
            console.log(userScore);
            timePenalty();

            localStorage.setItem("userScore", JSON.stringify(userScore));
            questionIndex++;
            getQuestion();
        }
    }
})