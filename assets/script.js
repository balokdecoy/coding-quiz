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
var timeRem = 120;

// Question Array 

var questions = [
    {
        question1: "Who invented Linux?",
        choices1: [
            "Linus Torvalds",
            "Bruce Springsteen",
            "Bill Gates",
            "Steve Jobs",
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

function startQuiz() {
    startBtn.style.visibility = "hidden";
    progBar.style.visibility = "visible";
    console.log(questions[1].choices2[2]);
    main.append(questions[0].question1);
    for (var i = 0; i < questions[0].choices1.length; i++) {
        var buttons = document.createElement("button");
        buttons.className = "btn btn-info";
        buttons.textContent = questions[0].choices1[i];
        main.append(buttons);
    }

    function setTime() {
        var timerInterval = setInterval(function() {
            timeRem--;
            timer.textContent = "Time remaining: " + timeRem;

            if(timeRem === 0) {
                clearInterval(timerInterval);
                endQuiz();
            }
        }, 1000);
    }
    setTime();
}

// Questions
/*var question1 = ["The answer is 1", "The answer is 2", "The answer is 3", "The answer is 4",];

// Begin Quiz when Start button is clicked
function startQuiz() {
    startBtn.style.visibility = "hidden";
    progBar.style.visibility = "visible";
    main.style.visibility = "visible";
    question1.forEach(function(items) {
        var buttons = document.createElement("button");
        buttons.textContent = items;
        main.appendChild(buttons);
    })
    function setTime() {
        var timerInterval = setInterval(function() {
            timeRem--;
            timer.textContent = "Time remaining: " + timeRem;

            if(timeRem === 0) {
                clearInterval(timerInterval);
                endQuiz();
            }
        }, 1000);
    }
    setTime();
}*/