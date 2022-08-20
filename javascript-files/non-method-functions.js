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

function winCheck() {
  setTimeout(() => {
    if (checkNumOfEnemies() === 0) {
      alert(`No more enemies! You won the game!`);
      removeOldMap();
    } else {
      console.log("there are still enemies");
    }
  }, 10);
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

playerAvatar.innerHTML = `<img src="images/pikachu image.png" height ="20px" width ="20px">`;
