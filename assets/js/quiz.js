/*jshint esversion: 8 */
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
    question: 'What creature is shown in the image?',
    choices: [
      'Arrow Crab', 'Spider Crab', 'Peeping Tom'
    ],
    correctAnswer: 'Arrow Crab'
  },
  {
    img: 'assets/images/barracuda.jpg',
    alt: 'Barracuda fish in the caribbean sea',
    question: 'What creature is shown in the image?',
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
    question: 'What creature is shown in the image?',
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
];

// Get DOM elements
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const imageContainer = document.getElementById("image-container");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const tallyContainer = document.getElementById("tally-container");


// Initialize variables
let currentQuestion = 0;
let score = 0;

// Function to load the current question
function loadQuestion() {
  // Hide the result container
  resultContainer.style.display = "none";

  // Get the current quiz data
  const currentQuizData = quizData[currentQuestion];

  console.log(currentQuizData.img); // Debugging line

  // Display the current tally
  tallyContainer.innerHTML = `Question ${currentQuestion + 1}/${quizData.length}`;

  // Clear existing classes for tally styles
  tallyContainer.classList = "";

  // Add blink function to make current question tally standout
  if (currentQuestion >= 0) {
    tallyContainer.classList.add("blink"); // Add the CSS class for blinking effect
  }

  // Display the question text
  questionContainer.innerHTML = currentQuizData.question;

  // Clear existing choices
  choicesContainer.innerHTML = "";

  // Clear previous image
  imageContainer.innerHTML = "";

  // Create and display the image element
  const imageElement = document.createElement("img");
  imageElement.src = currentQuizData.img;
  imageElement.alt = currentQuizData.alt;
  imageContainer.appendChild(imageElement);

  // Create choice buttons and add event listeners
  currentQuizData.choices.forEach((choice, index) => {
    const choiceElement = document.createElement("button");
    choiceElement.innerHTML = choice;
    choiceElement.addEventListener("click", () => selectAnswer(index));
    choicesContainer.appendChild(choiceElement);
  });
  console.log(`Loaded question ${currentQuestion + 1}`); // Debugging line
}
// Function to show the quiz result
function showResult() {
  // Hide quiz container, choices container, and tally container
  quizContainer.style.display = "none";
  choicesContainer.style.display = "none";
  tallyContainer.style.display = "none";

  // Show result container
  resultContainer.style.display = "block";

  // Display the user's score and a message based on the score
  if (score < 10) {
    resultText.innerHTML = `Your score is ${score} out of ${quizData.length}, better study a little harder!`;
  } else {
    resultText.innerHTML = `Congratulations! Your score is ${score} out of ${quizData.length}. You're ready to get wet and go fish spotting!`;
  }
  console.log(`Quiz result displayed`); // Debugging line
}

// Function to handle answer selection
function selectAnswer(answerIndex) {
  // Check if selected answer is correct
  if (answerIndex === quizData[currentQuestion].choices.indexOf(quizData[currentQuestion].correctAnswer)) {
    score++;
  }

  // Move to the next question or show the result
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Function to restart the quiz
function restartQuiz() {
  // Reset variables
  currentQuestion = 0;
  score = 0;

  // Clear previous result
  resultText.innerHTML = "";

  // Show quiz container, choices container, and tally container
  quizContainer.style.display = "block";
  choicesContainer.style.display = "block";
  tallyContainer.style.display = "block";

  // Load the first question
  loadQuestion();

}

// Load the first question when the page is loaded
loadQuestion();