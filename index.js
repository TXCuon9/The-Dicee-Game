const playGame = () => {
    // Create random number
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    // console.log(randomNumber1);

    // Get the img
    const changeDicee1 = document.querySelector('.img1');
    const changeDicee2 = document.querySelector('.img2');

    // Change the value
    changeDicee1.src = `images/dice${randomNumber1}.png`;
    changeDicee2.src = `images/dice${randomNumber2}.png`;

    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML = "🚩 Player 1 Wins";
    }
    else {
        document.querySelector('h1').innerHTML = "Player 2 Wins 🚩";
    }
}

// Get button
const button = document.getElementById('btn');
button.onclick = playGame;


