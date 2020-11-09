let computerMove;
let playerMove;
const randomNumber = Math.floor(Math.random() * 3 + 1);
const playerInput = prompt(`Wybierz swój ruch! 1: Kamień, 2: Papier, 3: Nożyce.`);
console.log(`gracz wpisał ${playerInput}`);

if (randomNumber == 1) {
  computerMove = 'Kamień';
} else if (randomNumber == 2) {
  computerMove = 'Papier';
} else if (randomNumber == 3) {
  computerMove = 'Nożyce';
}

console.log(`Ruch komputera to: ${computerMove}`);

if (playerInput == '1') {
  playerMove = 'Kamień';
} else if (playerInput == '2') {
  playerMove = 'Papier';
} else if (playerInput == '3') {
  playerMove = 'Nożyce';
}

if (computerMove == 'Kamień' && playerMove == 'Papier') {
  printMessage(`Brawo!!! Ty wygrywasz !!! :D`);
} else if (computerMove == 'Kamień' && playerMove == 'Nożyce') {
  printMessage(`No niestety przegrałeś :(`);
} else if (computerMove == 'Kamień' && playerMove == 'Kamień') {
  printMessage(`Mamy remis`);
}

if (computerMove == 'Papier' && playerMove == 'Kamień') {
  printMessage(`No niestety przegrałeś :(`);
} else if (computerMove == 'Papier' && playerMove == 'Papier') {
  printMessage(`Mamy remis`);
} else if (computerMove == 'Papier' && playerMove == 'Nożyce') {
  printMessage(`Brawo!!! Ty wygrywasz !!! :D`);
}

if (computerMove == 'Nożyce' && playerMove == 'Kamień') {
  printMessage(`Brawo!!! Ty wygrywasz !!! :D`);
} else if (computerMove == 'Nożyce' && playerMove == 'Papier') {
  printMessage(`No niestety przegrałeś :(`);
} else if (computerMove == 'Nożyce' && playerMove == 'Nożyce') {
  printMessage(`Mamy remis`);
}


printMessage(`Ruch komputera to: ${computerMove}`);
printMessage(`Twój ruch to: ${playerMove}`);