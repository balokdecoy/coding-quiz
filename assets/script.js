// Set body to a variable
var body = document.body;

// Import html elements
var h1El = document.getElementById("jumboHead");
var jumbo = document.getElementById("myJumbo");
var startBtn = document.getElementById("startBtn");
var main = document.getElementById("main");
var timer = document.getElementById("timer");
var showScores = document.getElementById("viewHighScores");
var formSubmit = document.getElementById("formSubmit");
var resultsPage = document.getElementById("results");
var backHome = document.getElementById("backHome");
var emptyStorage = document.getElementById("emptyStorage");

// Create form submission elements
var form = document.createElement("form");
var label = document.createElement("label");
var input = document.createElement("input");
var submit = document.createElement("input");
var line = document.createElement("br");
var div = document.createElement("div");

// Set defaults
h1El.textContent = "> Coding Quiz";
jumbo.textContent = "Test your coding knowledge with this multiple choice quiz. Incorrect answers knock 5 seconds off your time.";
startBtn.textContent = "Run Program";
showScores.textContent = "View High Scores";
backHome.textContent = "Homepage";
emptyStorage.textContent = "Clear High Scores";
main.style.visibility = "hidden";
backHome.style.visibility = "hidden";
emptyStorage.style.visibility = "hidden";
var userScore = 0;
var holdTimer;
var timeRem = 120;
var questionIndex = 0;
var correctAnswer = "";
var allUsers = []
var pastUsers = [];

init();

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
        question: "Question 2: What does CSS stand for?",
        choices: [
            "Consistent Sheet Styling",
            "Complete Styling Sheet",
            "Copy Style Sheet",
            "Cascading Style Sheets",
        ],
        correct: "Cascading Style Sheets",
    },
    {
        question: "Question 3: In the function 'function myFunction(potatoes) {}', what does 'potatoes' represent?",
        choices: [
            "Identifier",
            "Name",
            "Parameter",
            "Functional",
        ],
        correct: "Parameter",
    },
    {
        question: "Question 4: What git command pushes changes from your local machine to your Github repository?",
        choices: [
            "git push origin main",
            "push changes.git",
            "git add .",
            "git this",
        ],
        correct: "git push origin main",
    },
    {
        question: "Question 5: Which of the following is an example of a Boolean value?",
        choices: [
            "true",
            "function",
            "false",
            "True and false",
        ],
        correct: "True and false",
    },
    {
        question: "Question 6: Your code defines var myVariable within function myFunction(). Can you reuse myVariable outside myFunction?",
        choices: [
            "No, local variables cannot be called outside their parent function.",
            "Yes, local variables can be reused anywhere in your code.",
            "Yes, variables defined in a function are considered global variables.",
            "No, variables cannot be declared within a function.",
        ],
        correct: "No, local variables cannot be called outside their parent function.",
    },
    {
        question: "Question 7: In the loop 'for (i = 0; i < myList.length; i++)', how many times will the loop run?",
        choices: [
            "0. i=0 is a default setting.",
            "2. i++ indicates two loops.",
            "As many times as the length of the myList variable.",
            "The console will return a syntax error. You need to define the loop number.",
        ],
        correct: "As many times as the length of the myList variable.",
    },
    {
        question: "Question 8: Which link should you generally place at the bottom of your HTML?",
        choices: [
            "Javascript link, so that your scripts load after the HTML and styling.",
            "CSS link, so the styling loads after the HTML and scripts.",
            "Google Fonts, per Google's documentation.",
            "It doesn't matter. You can set external links anywhere in the HTML.",
        ],
        correct: "Javascript link, so that your scripts load after the HTML and styling.",
    },
]

// FUNCTIONS

// Generate a question
function getQuestion() {
    var currentQuestion = questions[questionIndex];
    main.textContent = currentQuestion.question;
    
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        
        // Create list items buttons will render to
        var li = document.createElement("li");
        li.setAttribute("data-index", i);

        // Create buttons with text content from questions index
        var button = document.createElement("button");
        button.textContent = currentQuestion.choices[i];

        // Send button list to HTML
        li.appendChild(button);
        main.appendChild(li);
        
        //console.log(button.className);
        console.log(li);

        // Write current correct answer to the correctAnswer variable for testing
        correctAnswer = currentQuestion.correct;

        console.log(questionIndex);
    }
}

// Start quiz when user clicks Run Program
function startQuiz() {
    startBtn.style.visibility = "hidden";
    main.style.visibility = "visible";
    timer.style.visibility = "visible";
    var timerVar = setInterval(newTimer, 1000);
    holdTimer = timerVar;
    getQuestion();
}


// TIMER FUNCTIONS

// Initiate timer
function newTimer () {
    timeRem--;
    timer.textContent = timeRem;
    if (timeRem < 0) {
        stopTimer();
        userInfo();
        timer.style.visibility = "hidden";
    }
}

// Clear the timer
function stopTimer () {
    clearInterval(holdTimer);
}

// Deduct time as penalty for incorrect answers
function timePenalty() {
    timeRem -= 5;
}

// Function to set attributes dynamically.
// Borrowed from StackOverflow response. Credited in README.
function attrs(element, attributes) {
    for (var key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Submission form creation at quiz completion. Receive user initials for High Scores. 
function userInfo () {
    main.textContent = "> Coding Quiz Program Terminated. You scored " + userScore + "! Enter initials below.";

    // Call attrs function to set attributes for elements
    attrs(label, {"for": "userInitials", "margin-top": "10px"});
    attrs(input, {"type": "text", "id": "userInitials", "maxlength": "3"});
    attrs(submit, {"type": "submit", "value": "Submit"});

    // Add content to the page
    main.appendChild(form)
    form.appendChild(label);
    form.appendChild(line);
    form.appendChild(input);
    form.appendChild(submit);
}

// EVENT LISTENERS

// Event listener for response button clicks
main.addEventListener("click", function(event) {
    var element = event.target;
    var userClick = event.target.textContent;
    console.log(userClick);

    // If user answer is correct
    if (element.matches("button") === true && event.target.textContent === correctAnswer) {
        ++userScore;
        console.log(userScore);
        questionIndex++;
        // Pull another question only within questionIndex length
        if (questionIndex < 8) {
        getQuestion();
        }
        else {
            stopTimer();
            userInfo();
            timer.style.visibility = "hidden";
        }
    }
    // If user answer is incorrect
    else {
        if (element.matches("button")) {
            // Zero is the lowest user score possible
            if (userScore > 0) {
                --userScore;
            }
            console.log(userScore);
            timePenalty();
            questionIndex++;
            // Pull another question only within question index length
            if (questionIndex < 8) {
                getQuestion();
            }
            else {
                stopTimer();
                userInfo();
                timer.style.visibility = "hidden";
            }
        }
    }
}
)

// Check for high scores in local storage and add to allUsers array
function init() {
    var storedUsers = JSON.parse(localStorage.getItem("allUsers"));

    if (storedUsers !== null) {
        allUsers = storedUsers;
    }
    console.log(allUsers);
}


// Send allUsers array to local storage
function recUsers() {
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
}

// High score submission listener 
submit.addEventListener("click", function(event) {
    event.preventDefault();
    stopTimer();
    timer.style.visibility = "hidden";
    
   var user = {
       user: input.value,
       score: userScore,
   }
   console.log(user);
   if (user.user === "") {
       alert("Please enter your initials")
   }
   else {
    allUsers.push(user);
    recUsers();
    showHighScores();
   }
})

// High Scores Display
function showHighScores() {
    stopTimer();
    timer.style.visibility = "hidden";
    startBtn.style.visibility = "hidden";
    showScores.style.visibility = "hidden";
    backHome.style.visibility = "visible";
    main.style.visibility = "visible";
    emptyStorage.style.visibility = "visible";
    main.textContent = "HIGH SCORES: ";
    var lastUser = JSON.parse(localStorage.getItem("allUsers"));
    console.log(lastUser);
    lastUser.sort((a, b) => a.score - b.score);
    lastUser.reverse();
    console.log(lastUser);
    for (var i = 0; i < allUsers.length; i++) {
        var div = document.createElement("div");
        var li = document.createElement("li");
        main.append(div);
        div.appendChild(li);
        li.textContent = "PLAYER: " + lastUser[i].user + " SCORE: " + lastUser[i].score;
    }
}

// Button to clear local storage and delete high scores from page
function clearStorage () {
    localStorage.clear();
    main.textContent = "";
    main.textContent = "HIGH SCORES: ";
}
