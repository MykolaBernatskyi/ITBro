// let scoreFirstPlayer = 0;
// let scoreSecondPlayer = 0;
let scores, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
dice = Math.floor(Math.random() * 6) + 1;

// Усе можна використовувати, але усе має свої особливості!!!
// innerHTML - фактично працює з HTML елементами
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// innerText - може считувати стилі, але не буде виводити приховані елементи!
// document.querySelector('#current-' + activePlayer).innerText = dice;
// textContent - отримує значення усіх елементів, включаючи скріпти, стилі: можемо отримувати та передавати певні значення
document.querySelector('#current-' + activePlayer).textContent = dice;


