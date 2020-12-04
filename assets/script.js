// Set body to a variable
var body = document.body;

// Import html elements
var h1El = document.getElementById("jumboHead");
var jumbo = document.getElementById("myJumbo");
var startBtn = document.getElementById("startBtn");
var main = document.getElementById("main");
var timer = document.getElementById("timer");

// Set default content
h1El.textContent = "> Coding Quiz";
jumbo.textContent = "Test your coding knowledge with this multiple choice quiz. Incorrect answers knock 2 seconds off your time.";
startBtn.textContent = "Start";
main.style.visibility = "hidden";
var userAnswers = [];
var multipleChoice = [];
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

// Function that starts quiz logic when user clicks Submit
function startQuiz() {
    startBtn.style.visibility = "hidden";
    main.style.visibility = "visible";
    main.innerHTML = questions[0].question1;

    for (var i = 0; i < questions[0].choices1.length; i++) {

        // Create list items buttons will render to
        var li = document.createElement("li");
        li.setAttribute("data-index", i);

        // Create buttons with text content from questions index
        var button = document.createElement("button");
        button.textContent = questions[0].choices1[i];
        button.className = "btn btn-info myBtn " + [i];

        // Send button list to HTML
        li.appendChild(button);
        main.appendChild(li);
        //multipleChoice.push(button);

        //console.log(button.className);
    }

    main.addEventListener("click", function(event) {
        var element = event.target;
        console.log(event.target.textContent);

        if (element.matches("button") === true && event.target.textContent === questions[0].correct1) {
            alert("Correct");
            ++userScore;
            console.log(userScore);

            localStorage.setItem("userScore", JSON.stringify(userScore));
        }
        else {
            if (element.matches("button")) {
                alert("Incorrect");
                --userScore;
                console.log(userScore);
                localStorage.setItem("userScore", JSON.stringify(userScore));
            }
        }
    })

    // Timer function
    function setTime() {
        var timerInterval = setInterval(function() {
            timeRem--;
            timer.textContent = timeRem;

            if(timeRem === 0) {
                clearInterval(timerInterval);
                //endQuiz();
            }
        }, 1000);
    }
    setTime();
}