// JavaScript code

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
    topic: 'Mammals',
    image: 'assets/images/lettuceseaslug.jpg',
    imageAlt: 'dolphin swimming',
    species: 'Dolphin',
    funfact: 'Uses echolocation to navigate and find food',
  },
];

const card = document.querySelector('.card');
const cardNextButton = document.querySelector('#card__next');
let currentSpecies;
let temporaryCardsArray = [];

document.addEventListener('DOMContentLoaded', function () {
  generateCard();

  cardNextButton.addEventListener('click', generateCard);

  card.addEventListener('click', function (e) {
    e.preventDefault();
    card.classList.toggle('is-flipped');
  });

});

const generateCard = function () {
  card.classList.remove('is-flipped');
  if (flashcards.length === 0) {
    flashcards.push.apply(flashcards, temporaryCardsArray);
  }

  let cardTopic = document.querySelector('.card--front .topic');
  let cardImage = document.querySelector('.card--front .image');
  let cardContent = document.querySelector('.card--back .card__content');

  let randomIndex = Math.floor(Math.random() * flashcards.length);

  cardTopic.innerText = flashcards[randomIndex].topic;
  cardImage.innerHTML = `<img loading="lazy" src=${flashcards[randomIndex].image} alt=${flashcards[randomIndex].imageAlt}>`;
  cardContent.innerHTML = `
    <h3>${flashcards[randomIndex].species}</h3>
    <p>${flashcards[randomIndex].funfact}</p>
  `;

  currentSpecies = flashcards[randomIndex].species;

  temporaryCardsArray.push(flashcards[randomIndex]);
  flashcards.splice(randomIndex, 1);
};