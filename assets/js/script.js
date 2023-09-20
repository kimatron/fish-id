// Array containing quiz questions, photos, and correct answers
quizData = [{
    img: 'assets/images/jawfish.jpg',
    alt: 'jawfish image in the ocean',
    question: 'What fish is shown in the image?',
    choices: [
      'Blue faced blenny', 'Yellow headed jawfish', 'Jiggerfish'
    ],
    correctAnswer: 'yellow headed jawfish'
  },
  {
    img: 'assets/images/arrowcrab.jpg',
    alt: 'cat-fish image in the ocean',
    choices: [
      'cat-fish', 'dpg-fish', 'elephant-fish'
    ],
    correctAnswer: 'cat-fish'
  },
  {
    img: 'assets/images/jawfish.jpg',
    alt: 'cat-fish image in the ocean',
    choices: [
      'cat-fish', 'dpg-fish', 'elephant-fish'
    ],
    correctAnswer: 'cat-fish'
  },
]

const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const imageContainer = document.getElementById("image-container");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result-container");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];

  console.log(currentQuizData.img); // Debugging line

  questionContainer.innerHTML = currentQuizData.question;
  choicesContainer.innerHTML = "";
  imageContainer.innerHTML = ""; // Clear previous image
  const imageElement = document.createElement("img"); // Create new image element
  imageElement.src = currentQuizData.img; // Set src attribute
  imageElement.alt = currentQuizData.alt; // Set alt attribute
  imageContainer.appendChild(imageElement); // Append image element to image container

  currentQuizData.choices.forEach((choice, index) => {
    const choiceElement = document.createElement("button");
    choiceElement.innerHTML = choice;
    choiceElement.addEventListener("click", () =>
      selectAnswer(index)
    );
    choicesContainer.appendChild(choiceElement);
  });
}

function selectAnswer(answerIndex) {
  if (answerIndex === quizData[currentQuestion].choices.indexOf(quizData[currentQuestion].correctAnswer)) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultContainer.innerHTML = ""; // Clear previous result
  quizContainer.style.display = "block"; // Show quiz container
  loadQuestion();
}

function showResult() {
  quizContainer.style.display = "none";

  if (score < 10) {
    resultContainer.innerHTML = `Your score is ${score} out of ${quizData.length}, better study a little harder!`;
  } else {
    resultContainer.innerHTML = `Congratulations! Your score is ${score} out of ${quizData.length}. You're ready to get wet and go fish spotting!`;
  }

}

loadQuestion();