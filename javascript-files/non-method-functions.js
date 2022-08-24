//Allows you to set random varided stats based on your "base"input and "variableStat" input
function stats(base, variableStat) {
  const randomStat = Math.round(Math.random() * variableStat) + base; // like replace these numbers with the params
  return randomStat;
}

//used to make html that reflects rows and columns of  the target 2d array; in this case its "newGame.map[0][i], an array that is supposed to be a map"
function createElemTest() {
  let gameMap = document.getElementById("gameMap");
  for (let i = 0; i < newGame.map[0].length; i++) {
    let row = document.createElement("tr");
    row.className = `row${i}`;
    for (let j = 0; j < newGame.map[0][i].length; j++) {
      let cell = document.createElement("td");
      cell.className = `cell${i}R${j}`;

      row.appendChild(cell); // adds the x# of <td> into the <tr>; makes row with x# columns
    }
    gameMap.appendChild(row); // adds the <tr> with the x# of <td> to the <table>
  }
}

//used to make html display the positions of everything in the 2D array
function drawBoard() {
  for (let row = 0; row < newGame.map[0].length; row++) {
    for (let col = 0; col < newGame.map[0][row].length; col++) {
      var cell = document.querySelector(`.cell${row}R${col}`);
      console.log(`.cell${row}R${col}`);
      console.log(cell);
      cell.innerText = newGame.map[0][row][col];
    }
  }
}

function countElem2D(string) {
  let stringCount = 0;
  for (let i = 0; i < newGame.map[0].length; i++) {
    for (let j = 0; j < newGame.map[0][i].length; j++) {
      if (newGame.map[0][i][j] === string) {
        stringCount += 1;
      }
    }
  }

  return stringCount;
}

function checkNumOfEnemies() {
  let stringCount = 0;
  for (let i = 0; i < newGame.map[0].length; i++) {
    for (let j = 0; j < newGame.map[0][i].length; j++) {
      if (newGame.map[0][i][j] === "敵") {
        stringCount += 1;
      }
    }
  }

  return stringCount;
}

function killAllEnemies() {
  for (let i = 0; i < newGame.map[0].length; i++) {
    for (let j = 0; j < newGame.map[0][i].length; j++) {
      if (newGame.map[0][i][j] === "敵") {
        newGame.map[0][i][j] === "　";
      }
    }
  }

  newGame.drawBoard();
}

function removeAdjacentEnemy() {
  if (newGame.map[0][newGame.player.x][newGame.player.y + 1] === "敵") {
    newGame.map[0][newGame.player.x][newGame.player.y + 1] = "";
  } else if (newGame.map[0][newGame.player.x][newGame.player.y - 1] === "敵") {
    newGame.map[0][newGame.player.x][newGame.player.y - 1] = "";
  } else if (newGame.map[0][newGame.player.x - 1][newGame.player.y] === "敵") {
    newGame.map[0][newGame.player.x - 1][newGame.player.y] = "";
  } else if (newGame.map[0][newGame.player.x + 1][newGame.player.y] === "敵") {
    newGame.map[0][newGame.player.x + 1][newGame.player.y] = "";
  }

  newGame.drawBoard();
}

function winCheck() {
  setTimeout(() => {
    if (checkNumOfEnemies() === 0) {
      resetMap("playerWin");
    } else {
      console.log("there are still enemies");
    }
  }, 1000);
}

function removeOldMap() {
  // garage = garage1;
  // park = park1;
  // graveyard = graveyard1;
  newGame.map.shift(); //removes array from the array counter
  document.getElementById("gameMap").innerHTML = ""; // clears the html of that same array.
}

// stuff for if we want to have a battle when we get near the enemies.
function typeoidBattleGame() {
  console.log("typeoidBattle Game Start!!!!!!");
}

//trying to randomize position of charcters on the mapperino

function playerPositionRandomizer() {
  let initialY = newGame.player.y;
  let initialX = newGame.player.x;

  newGame.player.y = Math.floor(newGame.map[0].length * Math.random());
  newGame.player.x = Math.floor(newGame.map[0][0].length * Math.random());
  if (
    newGame.map[0][newGame.player.x][newGame.player.y] === "壁" ||
    newGame.map[0][newGame.player.x][newGame.player.y] === "敵"
  ) {
    newGame.player.y = initialY;
    newGame.player.x = initialX;
    return;
  } else {
    newGame.player.updatePlayerPosition();
    newGame.drawBoard();
  }
}

function addBattleStatusWindow() {
  let battleBox = document.getElementById("battleBox");
  let battleStatusWindow = `<div id="battleBox2"><div id="monHp"><strong>MON HP: </strong><span>${
    newGame.enemies[Math.floor(Math.random() * newGame.enemies.length)].hp
  }</span></div>

  <div id="playerHp"><strong>PLAYER HP: </strong><span>${
    newGame.player.hp
  }</span></div>

  <div id="statusBox"></div>

  <button id="skirmishBtn">SKIRMISH</button></div>`;

  battleBox.innerHTML = battleStatusWindow;
}

function removePlayer() {
  delete newGame.player;
}

function removeEnemiesFromArray() {
  newGame.enemies.length = 0;
}

function removeBattleEnemy() {
  newGame.enemyForBattle.length = 0;
}

function resetMap(resetType) {
  if (resetType === "playerWin") {
    removeOldMap();
    removePlayer();
    removeEnemiesFromArray();
    removeBattleEnemy();
    newGame.closeBattleWidnow();
    newGame.countOnOff("off");
    alert(`No more enemies! You won the game!`);
  }

  if (resetType === "playerLose") {
    removeOldMap();
    removePlayer();
    removeEnemiesFromArray();
    removeBattleEnemy();
    newGame.closeBattleWidnow();
    newGame.countOnOff("off");
    alert("Game Over");
  }
}

// function readFlip(result) {
//   // result will be a function
//   let monDmgMsg = `monster took ${player.atk} points damage`;
//   let playDmgMsg = `player took ${monster.atk} points damage`;
//   let statusBox = document.getElementById("statusBox");

//   if (result === "heads") {
//     //dmage enemy per your hp desu
//     monster.hp -= player.atk;

//     statusBox.innerText = monDmgMsg;

//     updateHtmlHp();
//     battleCheckWinLoss();
//   }
//   if (result === "tails") {
//     player.hp -= monster.atk;
//     statusBox.innerText = playDmgMsg;
//     updateHtmlHp();
//     battleCheckWinLoss();
//   }
// }

// function coinFlip() {
//   let coin = ["heads", "tails"];

//   return coin[Math.floor(Math.random() * coin.length)];
// }

// function skirmish() {
//   readFlip(coinFlip());
// }

//

// document.getElementsByClassName(
//   `cell${newGame.player.x}R${newGame.player.y}`
// )[0];

// let currentPlayerPosition = document.getElementsByClassName(
//   `cell${newGame.player.x}R${newGame.player.y}`
// )[0];

//THIS IS GETS THE DOM OBJECT THAT WOULD BE WHER ETHE PLAYER WOULD BE AT ANY POINT
// let playerAvatar = document.getElementsByClassName(
//   `cell${newGame.player.x}R${newGame.player.y}`
// )[0];

// playerAvatar.innerHTML = `<img src="images/pikachu image.png" height ="20px" width ="20px">`;
