const playGame = (playerInput) => {
  clearMessages();
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
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);

  const displayResult = (argCPU, argPlayer) => {
    printMessage(`Komputer zagrał ${argCPU}, a Ty zagrałeś ${argPlayer}`);

    if (argCPU === argPlayer) {
      printMessage(`Mamy remis`);
    } else if (argCPU == `Kamień` && argPlayer == `Papier`) {
      printMessage(`Brawo!!! Ty wygrywasz !!! :D`);
    } else if (argCPU == `Papier` && argPlayer == `Nożyce`) {
      printMessage(`Brawo!!! Ty wygrywasz !!! :D`);
    } else if (argCPU == `Nożyce` && argPlayer == `Kamień`) {
      printMessage(`Brawo!!! Ty wygrywasz !!! :D`);
    } else {
      printMessage(`Niestety przegrywasz :(`);
    }
  };
  displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});