// wait for the DOM to finish loading before running the quiz
document.addEventListener("DOMContentLoaded", function() {

const idiomsArray = [
    {
        idiom: "don't count your chickens before they've hatched",
        meanings: ["very very long long long long long long meaning", "very very long long long long long long meaning", "very very long long long long long long meaning"],
        answer: "very very long long long long long long meaning"
    },
    {
        idiom: "a stitch in time saves nine",
        meanings: ["meaninga1", "meaningb1", "meaningc1"],
        answer: "meaninga1"
    },
    {
        idiom: "the grass is always greener",
        meanings: ["meaninga2", "meaningb2", "meaningc2"],
        answer: "meaninga0"
    }
]

//define variables
let currentQuestionIndex;
let currentIdiomIndex;
let score;

//define elements
const idiomElement = document.getElementById("idiom");
const optionButtonA = document.getElementById("option-btn-a");
const optionButtonB = document.getElementById("option-btn-b");
const optionButtonC = document.getElementById("option-btn-c");
const rightWrongElement = document.getElementById("right-or-wrong")
const scoreElement = document.getElementById("score");

//define functions
function displayStartScreen() {

}

function optionAClickHandler() {
    checkAnswer(idiomsArray[currentIdiomIndex].meanings[0]);
}

function optionBClickHandler() {
    checkAnswer(idiomsArray[currentIdiomIndex].meanings[1]);
}

function optionCClickHandler() {
    checkAnswer(idiomsArray[currentIdiomIndex].meanings[2]);
}

function runQuiz() {
    currentQuestionIndex = 0;
    currentIdiomIndex = 0;
    score = 0;
    displayCurrentIdiom();
    // Add event listeners to option buttons
    document.getElementById("option-btn-a").addEventListener("click", optionAClickHandler);
    document.getElementById("option-btn-b").addEventListener("click", optionBClickHandler);
    document.getElementById("option-btn-c").addEventListener("click", optionCClickHandler);
    // Clear score
    document.getElementById("score").innerText = "Your score is 0 out of 10";
    // Clear the inner HTML content of "right-or-wrong" element
    document.getElementById("right-or-wrong").innerText = "Select a meaning";
    //show next btn and hide start new quiz button
    document.getElementById("next-btn").classList.remove("hidden");
    document.getElementById("new-quiz-btn").classList.add("hidden");
  }

function displayCurrentIdiom() {
    //choose and display a random idiom from idiomsArray
    currentIdiomIndex = Math.floor(Math.random() * idiomsArray.length);
    console.log(currentIdiomIndex);
    idiomElement.innerText = idiomsArray[currentIdiomIndex].idiom;
    //display meanings options
    optionButtonA.innerText = idiomsArray[currentIdiomIndex].meanings[0];
    optionButtonB.innerText = idiomsArray[currentIdiomIndex].meanings[1];
    optionButtonC.innerText = idiomsArray[currentIdiomIndex].meanings[2];
}

function displayNextIdiom() {
    // Clear the inner HTML content of "right-or-wrong" element
    document.getElementById("right-or-wrong").innerText = "Select a meaning";
    //increase the question index
    currentQuestionIndex++;
    //check to see if 5 questions have been asked, and if so, run endOfQuiz
    if (currentQuestionIndex===5) {
    endOfQuiz();
    } else {
    //generate a new random number to choose the current idiom from the array
    currentIdiomIndex = Math.floor(Math.random() * idiomsArray.length);
    //display the new idiom
    displayCurrentIdiom();
    }
}

function checkAnswer(selectedAnswer) {
    if (idiomsArray[currentIdiomIndex].answer === selectedAnswer) {
      rightWrongElement.innerText = "You got it right";
      score++;
      scoreElement.innerText = `Your score is: ${score} out of 10`;
    } else {
        rightWrongElement.innerText = "You got it wrong";
      scoreElement.innerText = `Your score is: ${score} out of 10`;
    }
    // Add event listener to next button
    document.getElementById("next-btn").addEventListener("click", displayNextIdiom);
}

function endOfQuiz() {
    //Display end of quiz message
    document.getElementById("right-or-wrong").innerText = "That's the end of the quiz";
    //hide next btn and show start new quiz button
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("new-quiz-btn").classList.remove("hidden");
    //remove event listener from next button
    document.getElementById("next.btn"),removeEventListener("click", displayNextIdiom);
    // add event listener to start new quiz button
    document.getElementById("new-quiz-btn").addEventListener("click", runQuiz);
    // Remove existing event listeners from option buttons
    document.getElementById("option-btn-a").removeEventListener("click", optionAClickHandler);
    document.getElementById("option-btn-b").removeEventListener("click", optionBClickHandler);
    document.getElementById("option-btn-c").removeEventListener("click", optionCClickHandler);
}



runQuiz();


}
)