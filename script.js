const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const cards = symbols.concat(symbols); // Duplicate the symbols to create pairs
let openedCards = [];
let matchedPairs = 0;
let moves = 0;

const container = document.getElementById('game-container');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCard(symbol) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = symbol;
    card.addEventListener('click', () => {
        if (openedCards.length < 2 && !openedCards.includes(card) && !card.classList.contains('matched')) {
            card.classList.add('flipped');
            openedCards.push(card);
            if (openedCards.length === 2) {
                moves++;
                document.getElementById('moves').textContent = moves;
                if (openedCards[0].textContent === openedCards[1].textContent) {
                    openedCards.forEach(card => card.classList.add('matched'));
                    matchedPairs++;
                    openedCards = [];
                    if (matchedPairs === symbols.length) {
                        alert(`Congratulations! You won in ${moves} moves.`);
                    }
                } else {
                    setTimeout(() => {
                        openedCards.forEach(card => card.classList.remove('flipped'));
                        openedCards = [];
                    }, 1000);
                }
            }
        }
    });
    return card;
}

shuffle(cards);

for (const symbol of cards) {
    const card = createCard(symbol);
    container.appendChild(card);
}

const movesElement = document.createElement('p');
movesElement.textContent = 'Moves: 0';
movesElement.id = 'moves';
container.insertAdjacentElement('beforebegin', movesElement);
