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
h1El.textContent = "> Coding Quiz";
jumbo.textContent = "Test your coding knowledge with this multiple choice quiz. Incorrect answers knock 2 seconds off your time.";
startBtn.textContent = "Start";
progBar.style.visibility = "hidden";
var userAnswers = [];
var userScore = "";
var timeRem = 60;

// Linebreak function
function linebreak() {
    var lnBreak = document.createElement("br");
    main.append(lnBreak);
}

// Question array with specific question objects
var questions = [
    {
        question1: "Question 1: Who invented Linux?",
        choices1: [
            "a. Linus Torvalds",
            "b. Bruce Springsteen",
            "c. Bill Gates",
            "d. Steve Jobs",
        ],
        correct1: "Linus Torvalds",
    },
    {
        question2: "Who wrote Moby Dick?",
        choices2: [
            "JK Rowling",
            "Barrack Obama",
            "David Lynch",
            "Herman Melville",
        ],
        correct2: "Herman Melville",
    },
]

// Function that starts quiz logic when user clicks Submit
function startQuiz() {
    startBtn.style.visibility = "hidden";
    progBar.style.visibility = "visible";

    //Question 1
    main.textContent = questions[0].question1;
    linebreak();
    for (var i = 0; i < questions[0].choices1.length; i++) {
        var buttons = document.createElement("button");
        buttons.className = "btn btn-info myBtn";
        buttons.textContent += questions[0].choices1[i];
        main.append(buttons);
        linebreak();
        console.log(buttons.textContent);
    }

    // Timer function
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