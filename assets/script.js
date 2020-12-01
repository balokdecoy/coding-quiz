// Set body to a variable
var body = document.body;

// Import html elements
var h1El = document.getElementById("jumboHead");
var jumbo = document.getElementById("myJumbo");
var startBtn = document.getElementById("startBtn");
var progBar =  document.getElementById("progBar");
var main = document.getElementById("main");

// Set default content
h1El.textContent = "Coding Quiz";
jumbo.textContent = "Test your coding knowledge with this multiple choice quiz. You're on the clock!";
startBtn.textContent = "Let's do this!";
progBar.style.visibility = "hidden";

// Question Objects 

var Quest1 = {
    question: "Question 1: 2 + 2 =",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "4",
}

// Begin Quiz when Start button is clicked
function startQuiz() {
    startBtn.style.visibility = "hidden";
    progBar.style.visibility = "visible";
    main.textContent = Quest1.question;
    for (var i = 0; i < Quest1.length; i++) {

    }
    
    main.textContent = Quest1.question;
    main.appendChild
    
}