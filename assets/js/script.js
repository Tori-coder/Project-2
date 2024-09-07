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
let currentQuestionIndex
let score = 0;

//define elements
const idiomElement = document.getElementById("idiom");
const optionButtonA = document.getElementById("option-btn-a");
const optionButtonB = document.getElementById("option-btn-b");
const optionButtonC = document.getElementById("option-btn-c");

//define functions
function displayStartScreen() {

}

function optionAClickHandler() {
    checkAnswer(idiomsArray[currentQuestionIndex].meanings[0]);
}

function optionBClickHandler() {
    checkAnswer(idiomsArray[currentQuestionIndex].meanings[1]);
}

function optionCClickHandler() {
    checkAnswer(idiomsArray[currentQuestionIndex].meanings[2]);
}

function runQuiz() {
    currentQuestionIndex = 0;
    displayCurrentIdiom();
    // Add event listeners to option buttons
    document.getElementById("option-btn-a").addEventListener("click", optionAClickHandler);
    document.getElementById("option-btn-b").addEventListener("click", optionBClickHandler);
    document.getElementById("option-btn-c").addEventListener("click", optionCClickHandler);
    // Add event listener to next button
    document.getElementById("submit-btn").addEventListener("click", displayNextIdiom);
    displayNextIdiom();
  }

function displayCurrentIdiom() {
    //choose and display a random idiom from idiomsArray
    let currentIdiomIndex = Math.floor(Math.random() * idiomsArray.length);
    idiomElement.innerText = idiomsArray[currentQuestionIndex].idiom;
    //display meanings options
    optionButtonA.innerText = idiomsArray[currentQuestionIndex].meanings[0];
    optionButtonB.innerText = idiomsArray[currentQuestionIndex].meanings[1];
    optionButtonC.innerText = idiomsArray[currentQuestionIndex].meanings[2];
}

function displayNextIdiom() {

}

function checkAnswer(selectedAnswer) {
    const rightWrongElement = document.getElementById("right-or-wrong")
    const scoreElement = document.getElementById("score");

    if (idiomsArray[currentQuestionIndex].answer === selectedAnswer) {
      rightWrongElement.innerText = "You got it right";
      score++;
      scoreElement.innerText = `Your score is: ${score} out of 10`;
    } else {
        rightWrongElement.innerText = "You got it wrong";
      scoreElement.innerText = `Your score is: ${score} out of 10`;
    }
}

function startNewQuiz() {

}


runQuiz();


}
)