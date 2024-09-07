// wait for the DOM to finish loading before running the quiz
document.addEventListener("DOMContentLoaded", function() {

const idiomsArray = [
    {
        idiom: "idiom0",
        meanings: ["meaninga0", "meaningb0", "meaningc0"],
        answer: "meaninga0"
    },
    {
        idiom: "idiom1",
        meanings: ["meaninga1", "meaningb1", "meaningc1"],
        answer: "meaninga1"
    },
    {
        idiom: "idiom2",
        meanings: ["meaninga2", "meaningb2", "meaningc2"],
        answer: "meaninga0"
    }
]

//define variables
let currentQuestionIndex = 0;
let score = 0;

//define elements
const idiomElement = document.getElementById("idiom");
const optionButtonA = document.getElementById("option-btn-a");
const optionButtonB = document.getElementById("option-btn-b");
const optionButtonC = document.getElementById("option-btn-c");

//define functions
function displayStartScreen() {

}

function runQuiz() {

}

function displayCurrentIdiom() {
    //choose and display a random idiom from idiomsArray
    let currentIdiomIndex = Math.floor(Math.random() * idiomsArray.length);
    idiomElement.innerText = idiomsArray[currentIdiomIndex].idiom;
    //display meanings options
    optionButtonA.innerText = idiomsArray[currentIdiomIndex].meanings[0];
    optionButtonB.innerText = idiomsArray[currentIdiomIndex].meanings[1];
    optionButtonC.innerText = idiomsArray[currentIdiomIndex].meanings[2];
}

function displayNextIdiom() {

}

function checkAnswer() {

}

function startNewQuiz() {

}


displayCurrentIdiom();


}
)