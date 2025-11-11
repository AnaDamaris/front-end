const colors = ["red", "green", "blue", "yellow"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let deck = [];
let playerHand = [];
let computerHand = [];
let discardPile = [];
let currentColor = "";
let currentValue = "";

const playerHandDiv = document.getElementById("player-hand");
const computerHandDiv = document.getElementById("computer-hand");
const discardDiv = document.getElementById("discard-pile");
const message = document.getElementById("message");
const drawButton = document.getElementById("draw-card");

function createDeck() {
  deck = [];
  for (let color of colors) {
    for (let number of numbers) {
      deck.push({ color, value: number });
    }
  }
  deck = deck.sort(() => Math.random() - 0.5);
}

function drawCard(hand, count = 1) {
  for (let i = 0; i < count; i++) {
    if (deck.length === 0) {
      deck = discardPile.splice(0, discardPile.length - 1);
      deck = deck.sort(() => Math.random() - 0.5);
    }
    hand.push(deck.pop());
  }
}

function startGame() {
  createDeck();
  playerHand = [];
  computerHand = [];
  discardPile = [];

  drawCard(playerHand, 7);
  drawCard(computerHand, 7);

  discardPile.push(deck.pop());
  currentColor = discardPile[0].color;
  currentValue = discardPile[0].value;

  updateDisplay();
  message.textContent = "Sua vez!";
}

function updateDisplay() {
  playerHandDiv.innerHTML = "";
  playerHand.forEach((card, index) => {
    const div = document.createElement("div");
    div.className = `card ${card.color}`;
    div.textContent = card.value;
    div.onclick = () => playCard(index);
    playerHandDiv.appendChild(div);
  });

  computerHandDiv.innerHTML = "";
  computerHand.forEach(() => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = "🂠";
    computerHandDiv.appendChild(div);
  });

  const top = discardPile[discardPile.length - 1];
  discardDiv.className = `card ${top.color}`;
  discardDiv.textContent = top.value;
}

function canPlay(card) {
  return card.color === currentColor || card.value === currentValue;
}

function playCard(index) {
  const card = playerHand[index];
  if (!canPlay(card)) {
    message.textContent = "Você não pode jogar essa carta!";
    return;
  }

  discardPile.push(card);
  playerHand.splice(index, 1);
  currentColor = card.color;
  currentValue = card.value;

  if (playerHand.length === 0) {
    message.textContent = "🎉 Você venceu!";
    drawButton.disabled = true;
    return;
  }

  updateDisplay();
  setTimeout(computerTurn, 1000);
}

function computerTurn() {
  message.textContent = "Vez do computador...";
  let playableIndex = computerHand.findIndex(canPlay);

  if (playableIndex >= 0) {
    const card = computerHand.splice(playableIndex, 1)[0];
    discardPile.push(card);
    currentColor = card.color;
    currentValue = card.value;
  } else {
    drawCard(computerHand, 1);
  }

  if (computerHand.length === 0) {
    message.textContent = "😢 O computador venceu!";
    drawButton.disabled = true;
  } else {
    message.textContent = "Sua vez!";
  }

  updateDisplay();
}

drawButton.onclick = () => {
  drawCard(playerHand, 1);
  updateDisplay();
  setTimeout(computerTurn, 1000);
};

startGame();
