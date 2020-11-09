const getMoveName = id => {
  if (id == 1) {
    return 'Kamień';
  } else if (id == 2) {
    return 'Papier';
  } else if (id == 3) {
    return 'Nożyce';
  }
}
const randomNumber = Math.floor(Math.random() * 3 + 1);
const playerInput = prompt(`Wybierz swój ruch! 1: Kamień, 2: Papier, 3: Nożyce.`);

let computerMove = getMoveName(randomNumber);
let playerMove = getMoveName(playerInput);


const displayResult = (argCPU, argPlayer) => {
  printMessage(`Komputer zagrał ${argCPU}, a Ty zagrałeś ${argPlayer}`);

  if (argCPU === argPlayer) {
    printMessage(`Mamy remis`);
  } else if (argCPU == `Kamień` && argPlayer == `Papier`) {
    printMessage(`Brawo!!! Ty wygrywasz !!! :D`);
  } else if (argCPU == `Kamień` && argPlayer == `Nożyce`) {
    printMessage(`No niestety przegrałeś :(`);
  } else if (argCPU == `Papier` && argPlayer == `Kamień`) {
    printMessage(`No niestety przegrałeś :(`);
  } else if (argCPU == `Papier` && argPlayer == `Nożyce`) {
    printMessage(`Brawo!!! Ty wygrywasz !!! :D`);
  } else if (argCPU == `Nożyce` && argPlayer == `Kamień`) {
    printMessage(`Brawo!!! Ty wygrywasz !!! :D`);
  } else if (argCPU == `Nożyce` && argPlayer == `Papier`) {
    printMessage(`No niestety przegrałeś :(`);
  }
};
displayResult(computerMove, playerMove);
