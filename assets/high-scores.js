// Set body to a variable
var body = document.body;

// Import the main div where the form submission will render
var main = document.getElementById("main");

// Create elements needed for submission form
var form = document.createElement("form");
var label = document.createElement("label");
var input = document.createElement("input");
var submit = document.createElement("input");
var line = document.createElement("br");

// Set label text content
label.textContent = "Coding quiz has ended! Enter your initials here: ";


// Function to set attributes dynamically.
// Borrowed from StackOverflow response. Credited in README.
function attrs(element, attributes) {
    for (var key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

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