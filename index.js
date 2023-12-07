
function rollDice() {

    // Dice 1
    var randomNumber1 = Math.ceil(Math.random() * 6);
    var image1 = document.querySelector(".img1");
    var randomImageSource1 = "./images/dice" + randomNumber1 + ".png";
    image1.src = randomImageSource1;


    // Dice 2
    var randomNumber2 = Math.ceil(Math.random() * 6);
    var image2 = document.querySelector(".img2");
    var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
    image2.src = randomImageSource2;


    // Who wins?
    var theWinner = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        theWinner.innerHTML = "🚩 Player 1 wins";
    }
    else if (randomNumber2 > randomNumber1) {
        theWinner.innerHTML = "Player 2 wins 🚩";
    }
    else {
        theWinner.innerHTML = "It's a draw!";
    }
}

var rollButton = document.querySelector(".roll");
rollButton.addEventListener("click", rollDice)