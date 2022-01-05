// let scoreFirstPlayer = 0;
// let scoreSecondPlayer = 0;
let scores, roundScore, activePlayer, dice, gamePlaying;

init();

// Усе можна використовувати, але усе має свої особливості!!!
// innerHTML - фактично працює з HTML елементами
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// innerText - може считувати стилі, але не буде виводити приховані елементи!
// document.querySelector('#current-' + activePlayer).innerText = dice;
// textContent - отримує значення усіх елементів, включаючи скріпти, стилі: можемо отримувати та передавати певні значення
//document.querySelector('#current-' + activePlayer).textContent = dice;

// Можна працювати з даними (зчитувати їх)
// let x = document.querySelector('#score-0').textContent;
//console.log(x);

//працюємо з кнопкою, яка запускає кидання кубика
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        dice = Math.floor(Math.random() * 6) + 1;
        let diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + ".png";

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer()
        }
    }
});

// просдуховування "btn-hold"
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // add current score to global score
        scores[activePlayer] += roundScore;
        // update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //check if player won the game
        if (scores[activePlayer] >= 10) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // змінюємо статус активного іграка
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // прибираємо кубик, коли він не потрібен.
    document.querySelector('.dice').style.display = 'none';

}

// просдуховування "btn-new"
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
// працюємо з кубиком, але для початку ми його приховаємо
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

}



