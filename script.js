const images = [
    'img1.png',
    'img2.png',
    'img3.png',
    'img4.png',
    'img5.png',
    'img6.png',
    'img7.png',
    'img8.png',
    'img1.png',
    'img2.png',
    'img3.png',
    'img4.png',
    'img5.png',
    'img6.png',
    'img7.png',
    'img8.png',
];

const gameContainer = document.querySelector('.game-container');
let cards = [];
let flippedCards = [];
let matches = 0;
let score = 0;

// Shuffle the images array
images.sort(() => Math.random() - 0.5);

// Create card elements and add to the game container
images.forEach((img) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.img = img; // Store the image filename as a data attribute
    card.innerHTML = `<img src="images/back.png" alt="Card Back">`;
    card.addEventListener('click', () => flipCard(card));
    gameContainer.appendChild(card);
    cards.push(card);
});

console.log(images); // Answer Key

function flipCard(card) {
    score++;
    document.getElementById("score").innerHTML = score;
    if (flippedCards.length < 2 && !flippedCards.includes(card) && !card.classList.contains('hidden')) {
        card.innerHTML = `<img src="images/${card.classList.contains('flipped') ? 'back.png' : card.dataset.img}" alt="Card">`;
        flippedCards.push(card);
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    
    const [card1, card2] = flippedCards;
    const img1 = card1.dataset.img;
    const img2 = card2.dataset.img;

    if (img1 === img2) {
        card1.removeEventListener('click', () => flipCard(card1));
        card2.removeEventListener('click', () => flipCard(card2));
        flippedCards = [];
        matches++;
        document.getElementById("matched-pairs").innerHTML = matches;

        if (matches === images.length / 2) {
            setTimeout(() => alert('Congratulations! You won!'), 500);
        }
    } else {
        card1.innerHTML = `<img src="images/back.png" alt="Card Back">`;
        card2.innerHTML = `<img src="images/back.png" alt="Card Back">`;
        flippedCards = [];
    }
}

function resetGame(){
    location.reload();
}