// wait for the DOM to finish loading before running the quiz
document.addEventListener("DOMContentLoaded", function() {

const idiomsArray = [
    {
      "idiom": "A piece of cake",
      "meanings": ["A delicious dessert", "Something very easy to do", "A small part of something larger"],
      "answer": "Something very easy to do"
    },
    {
      "idiom": "Bite the bullet",
      "meanings": ["To express anger", "To bite on something hard", "To endure a painful experience with courage"],
      "answer": "To endure a painful experience with courage"
    },
    {
      "idiom": "Cost an arm and a leg",
      "meanings": ["To be free", "To require a significant sacrifice", "To be very expensive"],
      "answer": "To be very expensive"
    },
    {
      "idiom": "Hit the nail on the head",
      "meanings": ["To do exactly the right thing", "To make a mistake", "To hit something accurately"],
      "answer": "To do exactly the right thing"
    },
    {
      "idiom": "Jump on the bandwagon",
      "meanings": ["To criticise others", "To join a popular trend or activity", "To jump to conclusions"],
      "answer": "To join a popular trend or activity"
    },
    {
      "idiom": "Bite off more than you can chew",
      "meanings": ["To eat too quickly", "To take on a task that is way too big", "To bite on something hard"],
      "answer": "To take on a task that is way too big"
    },
    {
      "idiom": "Break the ice",
      "meanings": ["To break something frozen", "To start a conversation in a social situation", "To cause trouble"],
      "answer": "To start a conversation in a social situation"
    },
    {
      "idiom": "Burn the midnight oil",
      "meanings": ["To relax in the evening", "To work late into the night", "To set something on fire"],
      "answer": "To work late into the night"
    },
    {
      "idiom": "Cut to the chase",
      "meanings": ["To get to the main point without wasting time", "To end a relationship", "To cut something with scissors"],
      "answer": "To get to the main point without wasting time"
    },
    {
      "idiom": "Don't cry over spilled milk",
      "meanings": ["Cry for help", "To spill liquid accidentally", "Don't worry about things that have already happened"],
      "answer": "Don't worry about things that have already happened"
    },
    {
      "idiom": "Drive someone up the wall",
      "meanings": ["To make someone happy", "To annoy someone greatly", "To drive recklessly"],
      "answer": "To annoy someone greatly"
    },
    {
      "idiom": "Hit the sack",
      "meanings": ["To hit something hard", "To go to bed", "To hit someone with a sack"],
      "answer": "To go to bed"
    },
    {
      "idiom": "Let the cat out of the bag",
      "meanings": ["To buy a cat", "To let an animal out of a bag", "To reveal a secret"],
      "answer": "To reveal a secret"
    },
    {
      "idiom": "Miss the boat",
      "meanings": ["To miss an opportunity", "To go on a cruise", "To miss a transportation vehicle"],
      "answer": "To miss an opportunity"
    },
    {
      "idiom": "Once in a blue moon",
      "meanings": ["During a lunar eclipse", "Very rarely", "A long time ago"],
      "answer": "Very rarely"
    },
    {
      "idiom": "The ball is in your court",
      "meanings": ["The ball is lost", "It's your turn to make a decision", "A game involving balls"],
      "answer": "It's your turn to make a decision"
    },
    {
      "idiom": "Under the weather",
      "meanings": ["Excessively cold", "Ill or sick", "Under weather-related conditions"],
      "answer": "Feeling ill or sick"
    },
    {
      "idiom": "Break a leg",
      "meanings": ["Get well soon", "Good luck", "It's an insult"],
      "answer": "Good luck"
    },
    {
      "idiom": "Jump the gun",
      "meanings": ["To start something too soon", "To win a race", "To jump over a firearm"],
      "answer": "To start something too soon"
    },
    {
      "idiom": "Kick the bucket",
      "meanings": ["To die", "To play soccer", "To kick a container"],
      "answer": "To die"
    },
    {
      "idiom": "It's not my cup of tea",
      "meanings": ["It's not a nice drink", "I don't like it", "I don't take responsibility"],
      "answer": "Very rarely"
    },
    {
      "idiom": "Pull someone's leg",
      "meanings": ["To push someone", "To joke with someone", "To pull someone's body part"],
      "answer": "To joke with someone"
    },
    {
      "idiom": "Spill the beans",
      "meanings": ["To clean up a mess", "To spill food", "To reveal a secret"],
      "answer": "To reveal a secret"
    },
    
  ];

//define variables
let currentQuestionIndex;
let currentIdiomIndex;
let score;

//define elements
const idiomElement = document.getElementById("idiom");
const optionButtonA = document.getElementById("option-btn-a");
const optionButtonB = document.getElementById("option-btn-b");
const optionButtonC = document.getElementById("option-btn-c");
const rightWrongElement = document.getElementById("right-or-wrong");
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
    //check to see if 10 questions have been asked, and if so, run endOfQuiz
    if (currentQuestionIndex===10) {
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
      alert("You got it right! 😃");
      score++;
      scoreElement.innerText = `Your score is: ${score} out of 10`;
    } else {
        rightWrongElement.innerText = "You got it wrong";
        alert("You got it wrong 😢");
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
);