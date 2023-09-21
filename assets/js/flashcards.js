const flashcards = [{
    topic: 'Fish',
    image: 'assets/images/barracuda.jpg',
    imageAlt: 'barracuda in clear caribbean water',
    species: 'Barracuda',
    funfact: 'Hangs out on the surface keeping an eye out for his dinner',
  },
  {
    topic: 'Invertebrates',
    image: 'assets/images/arrowcrab.jpg',
    imageAlt: 'close up photo of an arrowcrab',
    species: 'Arrowcrab',
    funfact: 'Keeps its food on his head, and snacks off it when he feels like it',
  },
  {
    topic: 'Invertebrates',
    image: 'assets/images/arrowcrab.jpg',
    imageAlt: 'close up photo of an arrowcrab',
    species: 'Arrowcrab',
    funfact: 'Keeps its food on his head, and snacks off it when he feels like it',
  },
]

const card = document.querySelector('.card');
const cardNextButton = document.querySelector('#card__next');
let currentSpecies;
let temporaryCardsArray = [];

const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const btnCloseModal = document.querySelector('#close-modal');
const btnOpenModal = document.querySelector('#button__instructions');
// Wait for the DOM to finish loading before running the quiz

document.addEventListener('DOMContentLoaded', function () {
  generateCard();

  // Change Card on click

  cardNextButton.addEventListener('click', generateCard);

  // Click enter to go to another card

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      generateCard();
    }
  });

  // Flip card on the click
  card.addEventListener('click', function (e) {
    e.preventDefault();
    card.classList.toggle('is-flipped');
  });

  /* Generate random index for the FC*/
  const createRandom = function () {
    return Math.floor(Math.random() * flashcards.length);
  };


  /**
   * Function generates the Flash Card for the user
   * with all visible elements
   */
  const generateCard = function () {
    card.classList.remove('is-flipped');
    if (flashcards.length === 0) {
      flashcards.push.apply(flashcards, temporaryCardsArray);
    }

    let cardTopic = document.querySelector('.card--front .topic');
    let cardImage = document.querySelector('.card--front .image');
    let cardContent = document.querySelector('.card--back .card__content');


    let randomIndex = createRandom();

    cardTopic.innerText = flashcards[randomIndex].topic;
    cardImage.innerHTML = `<img loading="lazy" src=${flashcards[randomIndex].image} alt=${flashcards[randomIndex].imageAlt}>`;
    cardContent.innerHTML = `
      <h3>${flashcards[randomIndex].species}</h3>
      <p>${flashcards[randomIndex].funfact}</p>
    `;

    currentSpecies = flashcards[randomIndex].species;

    temporaryCardsArray.push(flashcards[randomIndex]);
    flashcards.splice([randomIndex], 1);
  };




});