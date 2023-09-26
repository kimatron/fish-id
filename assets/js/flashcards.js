/* jshint esversion: 8 */

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
    image: 'assets/images/lettuceseaslug.jpg',
    imageAlt: 'lettuce sea slug in blue water',
    species: 'Lettuce Sea Slug',
    funfact: 'Uses echolocation to navigate and find food',
  },
  {
    topic: 'Fish',
    image: 'assets/images/blacktipreefshark.jpg',
    imageAlt: 'Black Tip Reef Shark',
    species: 'Black Tip Reef Shark',
    funfact: 'One of the most common sharks found in shallow reef waters.',
  },
  {
    topic: 'Fish',
    image: 'assets/images/blenny.jpg',
    imageAlt: 'Blenny',
    species: 'Blenny',
    funfact: 'Known for their unique habit of living in crevices and holes on the sea floor.',
  },
  {
    topic: 'Fish',
    image: 'assets/images/bumpheadparrotfish.jpg',
    imageAlt: 'Bumphead Parrotfish',
    species: 'Bumphead Parrotfish',
    funfact: 'Has one of the largest beaks of all parrotfish species, used to feed on coral.',
  },
  {
    topic: 'Fish',
    image: 'assets/images/carribeansquid.jpg',
    imageAlt: 'Caribbean Reef Squid',
    species: 'Caribbean Reef Squid',
    funfact: 'Known for their ability to rapidly change color and pattern on their skin.',
  },
  {
    topic: 'Fish',
    image: 'assets/images/dustyjawfish.jpg',
    imageAlt: 'Dusty Jawfish',
    species: 'Dusty Jawfish',
    funfact: 'Builds a burrow by moving rocks and sediment with its mouth and jaws.',
  },
  {
    topic: 'Marine Invertebrate',
    image: 'assets/images/featherdusterworm.jpg',
    imageAlt: 'Feather Duster Worm',
    species: 'Feather Duster Worm',
    funfact: 'Builds a tube-like structure using calcium carbonate and extends its beautiful feathery tentacles to feed.',
  },
  {
    topic: 'Fish',
    image: 'assets/images/filefish.jpg',
    imageAlt: 'Filefish',
    species: 'Filefish',
    funfact: 'Camouflages itself among coral reefs by changing its color and pattern.',
  },
  {
    topic: 'Fish',
    image: 'assets/images/frogfish.jpg',
    imageAlt: 'Frogfish',
    species: 'Frogfish',
    funfact: 'Uses its unique lure (esca) on its forehead to attract prey.',
  },
  {
    topic: 'Fish',
    image: 'assets/images/golliathgrouper.jpg',
    imageAlt: 'Goliath Grouper',
    species: 'Goliath Grouper',
    funfact: 'One of the largest species of grouper, and can grow up to 8 feet long and weigh up to 800 pounds.',
  },
  {
    topic: 'Fish',
    image: 'assets/images/greenmoray.jpg',
    imageAlt: 'Green Moray Eel',
    species: 'Green Moray Eel',
    funfact: 'Not actually green, but rather brown with yellow mucus that covers its skin.',
  },
  {
    topic: 'Fish',
    image: 'assets/images/hogfish.jpg',
    imageAlt: 'Hogfish',
    species: 'Hogfish',
    funfact: 'Capable of changing its color and pattern to blend with its surroundings.',
  },
  {
    topic: 'Fish',
    image: 'assets/images/jawfish.jpg',
    imageAlt: 'Jawfish',
    species: 'Jawfish',
    funfact: 'Excavates and maintains a burrow, often seen with its mouth full of sand.',
  },
  {
    topic: 'Marine Invertebrate',
    image: 'assets/images/lettuceseaslug.jpg',
    imageAlt: 'Lettuce Sea Slug',
    species: 'Lettuce Sea Slug',
    funfact: 'Gets its name from its vibrant green color and leaf-like appearance.',
  },
  {
    topic: 'Fish',
    image: 'assets/images/mantaray.jpg',
    imageAlt: 'Manta Ray',
    species: 'Manta Ray',
    funfact: 'Has one of the largest brain-to-body ratios of all fish species.',
  },
  {
    topic: 'Marine Invertebrate',
    image: 'assets/images/nudibranch.jpg',
    imageAlt: 'Nudibranch',
    species: 'Nudibranch',
    funfact: 'Comes in a wide variety of colors and extravagant shapes, known for their toxic defense mechanism.',
  },
  {
    topic: 'Fish',
    image: 'assets/images/pipefish.jpg',
    imageAlt: 'Pipefish',
    species: 'Pipefish',
    funfact: 'Resembles a straight-bodied seahorse and can often be found hiding among seagrass or coral reefs.',
  },
  {
    topic: 'Fish',
    image: 'assets/images/redsnapper.jpg',
    imageAlt: 'Red Snapper',
    species: 'Red Snapper',
    funfact: 'A popular fish in recreational and commercial fishing, known for its bright red coloration and delicious taste.',
  },
  {
    topic: 'Fish',
    image: 'assets/images/sailfinblenny1.jpg',
    imageAlt: 'Sailfin Blenny',
    species: 'Sailfin Blenny',
    funfact: 'Has large dorsal fins that it can display in a sail-like fashion to intimidate rivals or attract mates.',
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