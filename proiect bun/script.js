// Get all <h2> elements
allHeading1s = document.getElementsByTagName("h2");
// Add event listeners to all <h1> elements one by one
numHeading1s = allHeading1s.length;
for (let i = 0; i < numHeading1s; i++) {
 allHeading1s[i].addEventListener("click", toggleAnswer);
}
// Function that is called when an <h1> element is called
// This toggles the "opened" CSS class for <h1> elements and
// toggles the visibility of the below <blockquote>
function toggleAnswer() {
 // Toggle CSS class that changes color to ligher green of clicked <h1>
 this.classList.toggle("opened");
 // Toggle CSS class on next siblig (the answer) that
 // makes the answer visible or hides it
 this.nextElementSibling.classList.toggle("showAnswer");
 
}


// Button handles
var saveBtn = document.getElementById("saveBtn");
var clearBtn = document.getElementById("clearBtn");

// Add event listeners
saveBtn.addEventListener("click", saveData);
clearBtn.addEventListener("click", clearData);


// Function clears local storage and disables restore data button
function clearData() {
    // Clear local storage
    localStorage.clear();
}

// Function saves data to local storage from input fields
function saveData() {
    // Get input field values
    var fName = document.getElementById("firstname").value;
    var lName = document.getElementById("lastname").value;
    var bDate = document.getElementById("birthdate").value;
    var sectie = document.getElementById("Sectia").value;

    // Store values to local storage
    localStorage.fName = fName;
    localStorage.lName = lName;
    localStorage.bDate = bDate;
    localStorage.sectie = sectie;

 
}



