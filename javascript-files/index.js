


class Game {
  constructor() {
    this.map = [];
    this.enemies = [];
    this.player;
  }
  //SECTION HERE ACTUALLY CREATES THE PLAYER VARIABLE AND ASSIGNS STATS ETC
  createPlayer() {
    //prettier-ignore
    this.player = new Character("PooSheisty", newGame.stats(250, 50), newGame.stats(70, 30), newGame.stats(65, 70));
  }
  addEnemies(numOfEnemies) {
    //prettier-ignore
    for (let i = 0; i < numOfEnemies; i++){
    this.enemies.push(new Character(`monster${i + 1}`, newGame.stats(500, 200), newGame.stats(100, 45), newGame.stats(10, 20)))
    }
  }
  stats(base, variableStat) {
    //  maybe a stat one with base and varible stat
    const randomStat = Math.round(Math.random() * variableStat) + base; // like replace these numbers with the params
    return randomStat;
  }
  checkGameStatus() {
    if (newGame.player.hp <= 0) {
      alert("You lost! game reset");
      newGame.addEnemies(3);
      newGame.createPlayer();
      console.log(newGame);
    }
  }
 
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
    let textBox = document.getElementById("statusWindow");
    textBox.innerText = "バトルスタート！！！";
    //MUST STOP KEYBOARD OR SWITCH KEYBOARD USAGE WHEN BATTLE IS RUNNING
  }

  endBattle() {
    // This is related to the runBattle() method.
  }
  initGameBoard() {
    let gameMap = document.getElementById("gameMap");
    for (let i = 0; i < newGame.map[0].length; i++) {
      let row = document.createElement("tr");
      row.className = `row${i}`;
      for (let j = 0; j < newGame.map[0][i].length; j++) {
        let cell = document.createElement("td");
        cell.className = `cell${i}R${j}`;
  
        row.appendChild(cell);// adds the x# of <td> into the <tr>; makes row with x# columns
      }
      gameMap.appendChild(row);// adds the <tr> with the x# of <td> to the <table>
    }
  }

  drawBoard() {
  for (let row = 0; row < newGame.map[0].length; row++) {
    for (let col = 0; col < newGame.map[0][row].length; col++) {
      var cell = document.querySelector(`.cell${row}R${col}`);
      console.log(`.cell${row}R${col}`);
      console.log(cell);
      cell.innerText = newGame.map[0][row][col];
    }
  }
}


}


//※※※※※※※※※※INITALIZING GAME※※※※※※※※※※

let startGameBtn = document.querySelector("#startGame");
let newGame = new Game();
//clicking the button calls the methods that get the game set up
startGameBtn.onclick = () => {
  newGame.makeMap(); // sets up the 2d array BASED ON SAVE JAVASCRIPT STUFF
  newGame.addEnemies(3); // doesn't add anythign to the 2d array yet just enemies.
  newGame.createPlayer(); // makes player
  newGame.player.updatePlayerPosition();
  newGame.initGameBoard(); // sets up the html to refelect the  rows and cols of the js 2D array
  newGame.drawBoard();// this actually DRAWS everything on the board like the player, enemies and walls

  console.log(newGame);
};

document.onkeydown = (event) => {
  newGame.player.move();
};


// NOTES EXTRA STUFF
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