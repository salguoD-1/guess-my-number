'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// Selecionando o elemento button
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // Lógica caso não seja passado nenhum valor no campo de input.
  if (!guess) {
    document.querySelector('.message').textContent = '🔴 No Number!';
    // Quando o player vence o jogo
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    // Modificando a cor de fundo caso o player vença o jogo.
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Modificando o width da classe number
    document.querySelector('.number').style.width = '30rem';

    // Lógica para armazenar o highscore.
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Quando o valor passado é maior do que o valor sorteado
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = '📈 Too high!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥺 You lost the game!';
      document.querySelector('.score').textContent = score = 0;
    }
    // Quando o valor passado é menor que o valor sorteado
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = '📉 Too low!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥺 You lost the game!';
      document.querySelector('.score').textContent = score = 0;
    }
  }
});

// Resetando as configurações
document.querySelector('.again').addEventListener('click', () => {
  // Criando um novo número aleatório
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
  // Usamos .value para mudar o valor do input para sendo vazio.
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// .addEventListener() é um método que possui dois parâmetros, primeiro o tipo  de evento e o segundo é o que fazer com esse evento caso ele ocorra. Fazemos isso definindo uma função que irá executar quando o o botão for clicado. Chamamos essa função de event handler(Manipulador de eventos).
