let buttonContainer, images, reset, imgDivs, score, matchedPairs;
let flippedCards = [];
const initialize = () => {
    images = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png", "img7.png", "img8.png",
        "img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png", "img7.png", "img8.png",];

    reset = document.querySelector("button");
    cardContainer = document.getElementById("card-container")

    cardDivs = cardContainer.querySelectorAll(".flip-card-inner")
    frontImgDivs = cardContainer.querySelectorAll(".front");
    backImgDivs = cardContainer.querySelectorAll(".back");
    for (let i = 0; i < frontImgDivs.length; i++) {
        frontImgDivs[i].addEventListener("click", () => flipCard(cardDivs[i]));
    }
    images.sort(() => Math.random() - 0.5);
    frontImgDivs.forEach((img, idx) => {
        img.src = "images/front.png";
    });
    backImgDivs.forEach((img, idx) => {
        img.src = `images/${images[idx]}`;
    });
    score = 0;
    matchedPairs = 0;
}
const resetGame = () => {
    location.reload();
}
const match = () => {

}
const flipCard = (card) => {


    if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
        card.classList.add("flipped");
        flippedCards.push(card);
        console.log(card);
        score++;
        document.getElementById("score").innerHTML = score;
        card.style.transform = "rotatey(180deg)";
        card.style.transitionDuration = "0.5s";
        if (flippedCards.length === 2) {
            if (flippedCards[0] === flippedCards[1]) {
                flippedCards[0].classList.add("matched");
                flippedCards[1].classList.add("matched");
                matchedPairs++;
                document.getElementById("matched-pairs").innerHTML = matchedPairs;
                flippedCards = [];
            } else {
                setTimeout(() => {
                    card.classList.remove("flipped");
                },);
                flippedCards = [];
            }
            if (matchedPairs === 8) {
                setTimeout(() => alert("You win!"));
            }
        }else{
            card.classList.remove("flipped");
        }
    }
}