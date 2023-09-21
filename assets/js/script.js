// Array containing quiz questions, photos, and correct answers
const quizData = [{
    img: 'assets/images/jawfish.jpg',
    alt: 'jawfish image in the ocean',
    question: 'What fish is shown in the image?',
    choices: [
      'Blue faced blenny', 'Yellow headed jawfish', 'Jiggerfish'
    ],
    correctAnswer: 'Yellow headed jawfish'
  },
  {
    img: 'assets/images/arrowcrab.jpg',
    alt: 'Arrowcrab close up image in the ocean',
    choices: [
      'Arrow Crab', 'Spider Crab', 'Peeping Tom'
    ],
    correctAnswer: 'Arrow Crab'
  },
  {
    img: 'assets/images/barracuda.jpg',
    alt: 'Barracuda fish in the caribbean sea',
    choices: [
      'Swordfish', 'Tuna', 'Barracuda'
    ],
    correctAnswer: 'Barracuda'
  },
  {
    img: 'assets/images/blacktipreefshark.jpg',
    alt: 'blacktip reef shark image in the ocean',
    question: 'What fish is shown in the image?',
    choices: [
      'Great White Shark', 'Nurse Shark', 'Blacktip Reef Shark'
    ],
    correctAnswer: 'Blacktip Reef Shark'
  },
  {
    img: 'assets/images/blenny.jpg',
    alt: ' image of blenny in coral',
    question: 'What fish is shown in the image?',
    choices: [
      'Red faced blumpy', 'Blenny', 'Snoutfish'
    ],
    correctAnswer: 'Blenny'
  },
  {
    img: 'assets/images/bumpheadparrotfish.jpg',
    alt: 'bumphead parrotfish image in the ocean',
    question: 'What fish is shown in the image?',
    choices: [
      'Bumphead Parrotfish', 'Lumpy Snapper', 'Humphead Wrasse'
    ],
    correctAnswer: 'Bumphead Parrotfish'
  },
  {
    img: 'assets/images/carribeansquid.jpg',
    alt: 'squid swimming in Caribbean',
    question: 'What fish is shown in the image?',
    choices: [
      'Giant Squid', 'Carribean Reef Squid', 'Octopus'
    ],
    correctAnswer: 'Carribean Reef Squid'
  },
  {
    img: 'assets/images/dustyjawfish.jpg',
    alt: 'jawfish image in the ocean',
    question: 'What fish is shown in the image?',
    choices: [
      'Crusty Creolefish', 'Peeking Mouthfish', 'Dusty Jawfish'
    ],
    correctAnswer: 'Dusty Jawfish'
  },
  {
    img: 'assets/images/featherdusterworm.jpg',
    alt: 'featherdusterworm with statue in the background',
    question: 'What fish is shown in the image?',
    choices: [
      'Sea cucumber', 'Feather Duster Worm', 'Anenome'
    ],
    correctAnswer: 'Feather Duster Worm'
  },
  {
    img: 'assets/images/filefish.jpg',
    alt: 'filefish image in the ocean',
    question: 'What fish is shown in the image?',
    choices: [
      'Filefish', 'Floatfish', 'Hideyfish'
    ],
    correctAnswer: 'Filefish'
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
  // Display the current tally
  const tallyContainer = document.getElementById("tally-container");
  tallyContainer.innerHTML = `Question ${currentQuestion + 1}/${quizData.length}`;

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

/** Script for modal */
document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('modal');
  var overlay = document.getElementById('overlay');
  var closeModal = document.getElementById('close-modal');

  function openModal() {
    modal.classList.remove('modal--hidden');
    overlay.classList.remove('overlay--hidden');
  }

  function closeModal() {
    modal.classList.add('modal--hidden');
    overlay.classList.add('overlay--hidden');
  }

  document.getElementById('show-modal-button').addEventListener('click', openModal);
  closeModal.addEventListener('click', closeModal);
});