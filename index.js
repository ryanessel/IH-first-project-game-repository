//JAVASCRIPT CONNECTED
// window.onload = () => {
//     console.log("connecting and working");
//     alert("hellow");
// }

class Game {
  constructor() {
    this.map = [];
    this.enemies = [];
    this.player;
  }
  createPlayer() {
    //prettier-ignore
    this.player = new Character("PooSheisty", stats(250, 50), stats(70, 30), stats(65, 70));
  }
  addEnemies(numOfEnemies) {
    //prettier-ignore
    for (let i = 0; i < numOfEnemies; i++){
    this.enemies.push(new Character(`monster${i + 1}`, stats(500, 200), stats(100, 45), stats(10, 20) ))
    }
  }
  checkGameStatus() {
    if (newGame.player.hp <= 0) {
      alert("You lost! game reset");
      newGame.addEnemies(3);
      newGame.createPlayer();
      console.log(newGame);
    }
  }

  // GENERATE MAP HTML ELEMENTS USING JAVASCCRIPT

  //   createBoard(){
  //     let board = document.getElementById('gameBoard');
  //     for(let i = 0; i < this.numberOfGuesses; i++) {
  //         let row = document.createElement('div');
  //         row.className = row row-${i};

  //         for(let j = 0; j < 5; j++){
  //             let box = document.createElement('div');
  //             box.className = 'inputBoxes';

  //             row.appendChild(box);
  //         }
  //         board.appendChild(row);
  //     }
  // }

  // createMap() {
  //   let gameMap = document.getElementById("gameMap");
  //   for (let i = 0; i < newGame.map[0]; i++) {
  //     let row = document.createElement("tr");
  //     for (let j = 0; j > newGame.map[0][i]; j++) {
  //       gameMap.appendChild(row);
  //     }
  //   }
  // }
  

  makeMap() {
    let randomNum = Math.floor(Math.random() * mapSet.length); // gives random number(which we will use as an index of the mapset)
    let randomMap = mapSet[randomNum];

    this.map.push(randomMap);
  }
  runBattle() {
    // MAKE ANOTHER SCREEN COMES UP THAT/ Maybe just a screen that reads the battle
    // maybe 2 options: attack, run - just at first. Its more important to get it to work consitently before I add a ton of things to something I may still not quite fully understand
    //So first get a screen/window(?) to pop up and go away when certain conditions are met
    //In that pop up, include a message section and an attack, run options.
  }

  endBattle() {
    // This is related to the runBattle() method.
  }
}

let startGameBtn = document.querySelector("#startGame");
let newGame = new Game();
startGameBtn.onclick = () => {
  //calling the methods  that set up the
  newGame.makeMap(); // sets up the 2d array BASED ON SAVE JAVASCRIPT STUFF
  newGame.addEnemies(3); // doesn't add anythign to the 2d array yet just enemies.
  newGame.createPlayer(); // doesn't add anythign to the 2d array yet just enemies.
  newGame.player.updatePlayerPosition();
  createElemTest(); // should draw the map based on the js 2d array!
  drawBoard();

  console.log(newGame);
};

document.onkeydown = (event) => {
  newGame.player.move();
};

//creates a whole bunch at once.
function createElemTest() {
  let gameMap = document.getElementById("gameMap");
  for (let i = 0; i < newGame.map[0].length; i++) {
    let row = document.createElement("tr");
    row.className = `row${i}`;
    for (let j = 0; j < newGame.map[0][i].length; j++) {
      let cell = document.createElement("td");
      cell.className = `cell${i}R${j}`;

      row.appendChild(cell);
    }

    gameMap.appendChild(row);
  }
}
