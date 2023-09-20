// Array containing quiz questions, photos, and correct answers
quizData = [{
    img: 'assets/images/jawfish.png',
    alt: 'cat-fish image in the ocean',
    options: [
      'cat-fish', 'dpg-fish', 'elephant-fish'
    ],
    correctAnswer: 'cat-fish'
  },
  {
    img: 'assets/images/vds.png',
    alt: 'cat-fish image in the ocean',
    options: [
      'cat-fish', 'dpg-fish', 'elephant-fish'
    ],
    correctAnswer: 'cat-fish'
  },
  {
    img: 'assets/images/vds.png',
    alt: 'cat-fish image in the ocean',
    options: [
      'cat-fish', 'dpg-fish', 'elephant-fish'
    ],
    correctAnswer: 'cat-fish'
  },
]

const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result-container");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];

  questionContainer.innerHTML = currentQuizData.question;
  choicesContainer.innerHTML = "";

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
  if (answerIndex === quizData[currentQuestion].correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.style.display = "none";
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length} questions.`;
}

loadQuestion();