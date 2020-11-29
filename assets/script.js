// Set body to a variable
var body = document.body;

// Import html elements
var h1El = document.getElementById("jumboHead");
var jumbo = document.getElementById("myJumbo");
var startBtn = document.getElementById("startBtn");
var progBar =  document.getElementById("progBar");

// Set default content
h1El.textContent = "Coding Quiz";
jumbo.textContent = "Test your coding knowledge with this multiple choice quiz. You're on the clock!";
startBtn.textContent = "Let's do this!";
progBar.style.visibility = "hidden";

function startQuiz() {
    startBtn.style.visibility = "hidden";
    progBar.style.visibility = "visible";
    
}