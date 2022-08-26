class Game {
  constructor() {
    this.map = [];
    this.enemies = [];
    this.enemyForBattle = [];
    this.player;
    this.boss;
    this.count = 0;
  }
  //SECTION HERE ACTUALLY CREATES THE PLAYER VARIABLE AND ASSIGNS STATS ETC
  createPlayer() {
    //prettier-ignore
    this.player = new Character("PooSheisty", newGame.stats(350, 50), newGame.stats(90, 30), newGame.stats(65, 70), "士");
  }
  addEnemies(numOfEnemies) {
    //prettier-ignore
    for (let i = 0; i < numOfEnemies; i++){
    this.enemies.push(new Character(`monster${i + 1}`, newGame.stats(500, 200), newGame.stats(100, 45), newGame.stats(10, 20), "敵"))
    }
  }

  addBoss() {
    this.boss = new Character(
      "Boss",
      newGame.stats(1255, 750),
      newGame.stats(200, 45),
      newGame.stats(50, 90),
      "鬼"
    );
  }
  stats(base, variableStat) {
    //  maybe a stat one with base and varible stat
    const randomStat = Math.round(Math.random() * variableStat) + base; // like replace these numbers with the params
    return randomStat;
  }
  checkGameStatus() {
    if (newGame.player.hp <= 0) {
      alert("You lost! game reset");
      newGame.addEnemies(4);
      newGame.createPlayer();
      console.log(newGame);
    }
  }

  makeMap() {
    let randomNum = Math.floor(Math.random() * mapSet.length); // gives random number(which we will use as an index of the mapset)

    this.map.push(pickMap(randomNum.toString())); // MUST USE  a function here so that a "new" map is generated each time; looks liek the map becomes reset.
  }

  //SHOULD BE RUN AFTER ENEMY IS DEFEATED
  gainEnemyStats(enemyIndex) {
    // gotta figure out how to target the monster you are fighting/killed
    let monHpPercentage = Math.round(newGame.enemies[enemyIndex].hp * 0.05);
    let monAtkPercentage = Math.round(newGame.enemies[enemyIndex].atk * 0.12);
    let monDefPercentage = Math.round(newGame.enemies[enemyIndex].def * 0.15);

    newGame.player.hp += monHpPercentage;
    newGame.player.atk += monAtkPercentage;
    newGame.player.def += monDefPercentage;
  }
  countOnOff(onOrOff) {
    if (onOrOff === "on") {
      newGame.count = 1;
    }
    if (onOrOff === "off") {
      newGame.count = 0;
    }
  }

  addBattleStatusWindow() {
    let battleBox = document.getElementById("battleBox");
    let battleStatusWindow = `<div id="battleBox2"><div id="monHp"><strong>MON HP: </strong><span>${
      newGame.enemies[Math.floor(Math.random() * newGame.enemies.length)].hp
    }</span></div>
  
    <div id="playerHp"><strong>PLAYER HP: </strong><span>${
      newGame.player.hp
    }</span></div>
  
   
    <button id="skirmishBtn">SKIRMISH</button> 
    <br>
    <button id="regAtk">REG ATK</button> 
    <button id="medAtkBtn">MED ATK</button>
    <button id="strongAtkBtn">STRONG ATK</button>
    <div id="statusBox"></div>
    </div>`;

    battleBox.innerHTML = battleStatusWindow;
  }

  runBattle() {
    // MAKE ANOTHER SCREEN COMES UP THAT/ Maybe just a screen that reads the battle
    // maybe 2 options: attack, run - just at first. Its more important to get it to work consitently before I add a ton of things to something I may still not quite fully understand
    //So first get a screen/window(?) to pop up and go away when certain conditions are met
    //In that pop up, include a message section and an attack, run options.

    newGame.getRandomEnemyForBattle();

    newGame.addBattleStatusWindow();
    document.getElementById(`skirmishBtn`).onclick = () => {
      if (newGame.player.hp <= 0 || newGame.enemyForBattle[0].hp <= 0) {
        return;
      }
      doBattle();
    };

    //MUST STOP KEYBOARD OR SWITCH KEYBOARD USAGE WHEN BATTLE IS RUNNING
  }

  removeDeadEnemies() {
    for (let i = 0; i < newGame.enemies.length; i++) {
      if (newGame.enemies[i].hp <= 0) {
        newGame.enemies.splice(i, 1);
        newGame.enemyForBattle.splice(0, 1);
      }
    }
  }

  removeAdjacentEnemy() {
    if (
      newGame.player.x !== 0 &&
      newGame.player.x !== newGame.map[0].length - 1
    ) {
      if (newGame.map[0][newGame.player.x][newGame.player.y + 1] === "敵") {
        newGame.map[0][newGame.player.x][newGame.player.y + 1] = "";
      } else if (
        newGame.map[0][newGame.player.x][newGame.player.y - 1] === "敵"
      ) {
        newGame.map[0][newGame.player.x][newGame.player.y - 1] = "";
      } else if (
        newGame.map[0][newGame.player.x - 1][newGame.player.y] === "敵"
      ) {
        newGame.map[0][newGame.player.x - 1][newGame.player.y] = "";
      } else if (
        newGame.map[0][newGame.player.x + 1][newGame.player.y] === "敵"
      ) {
        newGame.map[0][newGame.player.x + 1][newGame.player.y] = "";
      }
    } else if (newGame.player.x === 0) {
      if (newGame.map[0][newGame.player.x][newGame.player.y + 1] === "敵") {
        newGame.map[0][newGame.player.x][newGame.player.y + 1] = "";
      } else if (
        newGame.map[0][newGame.player.x][newGame.player.y - 1] === "敵"
      ) {
        newGame.map[0][newGame.player.x][newGame.player.y - 1] = "";
      } else if (
        newGame.map[0][newGame.player.x + 1][newGame.player.y] === "敵"
      ) {
        newGame.map[0][newGame.player.x + 1][newGame.player.y] = "";
      }
    } else if (newGame.player.x === newGame.map[0].length - 1) {
      if (newGame.map[0][newGame.player.x][newGame.player.y + 1] === "敵") {
        newGame.map[0][newGame.player.x][newGame.player.y + 1] = "";
      } else if (
        newGame.map[0][newGame.player.x][newGame.player.y - 1] === "敵"
      ) {
        newGame.map[0][newGame.player.x][newGame.player.y - 1] = "";
      } else if (
        newGame.map[0][newGame.player.x - 1][newGame.player.y] === "敵"
      ) {
        newGame.map[0][newGame.player.x - 1][newGame.player.y] = "";
      }
    }

    newGame.drawBoard();
  }

  getRandomEnemyForBattle() {
    let battleEenemy =
      newGame.enemies[Math.floor(Math.random() * newGame.enemies.length)];

    newGame.enemyForBattle.push(battleEenemy);
  }

  updateHtmlHp() {
    document.querySelector("#monHp span").innerHTML =
      newGame.enemyForBattle[0].hp;
    document.querySelector("#playerHp span").innerHTML = newGame.player.hp;
  }

  battleCheckWinLoss() {
    let statusBox = document.getElementById("statusBox");
    if (newGame.enemyForBattle[0].hp <= 0) {
      statusBox.innerText = `you have defeated the monster`;
      this.player.hp += Math.round(this.player.hp * 0.55);
      newGame.endBattle();
    }

    if (newGame.player.hp <= 0) {
      statusBox.innerText = `You died...`;

      setTimeout(() => {
        resetMap("playerLose");
      }, 1000);

      //reset the game or do whatever you did before when you collect all the guys.
    }
  }
  coinFlip() {
    let coin = ["heads", "tails"];

    return coin[Math.floor(Math.random() * coin.length)];
  }

  readFlip(result) {
    // result will be a function
    //prettier-ignore
    let monDmgMsg = `monster took ${newGame.player.playerAttack()} points damage`;
    //prettier-ignore
    let playDmgMsg = `player took ${newGame.enemyForBattle[0].monsterAttack()} points damage`;
    let statusBox = document.getElementById("statusBox");

    if (result === "heads") {
      //dmage enemy per your hp desu
      //prettier-ignore
      newGame.enemyForBattle[0].hp -= (newGame.player.playerAttack()) ;

      statusBox.innerText = monDmgMsg;

      newGame.updateHtmlHp();
      newGame.battleCheckWinLoss();
    }
    if (result === "tails") {
      //prettier-ignore
      newGame.player.hp -= (newGame.enemyForBattle[0].monsterAttack());
      statusBox.innerText = playDmgMsg;
      newGame.updateHtmlHp();
      newGame.battleCheckWinLoss();
    }
  }

  skirmish() {
    newGame.readFlip(newGame.coinFlip());
  }

  closeBattleWidnow() {
    let battleBox = document.getElementById("battleBox");
    battleBox.innerHTML = ``;
  }

  endBattle() {
    // This is related to the runBattle() method.
    newGame.removeDeadEnemies();
    newGame.removeAdjacentEnemy();
    newGame.countOnOff("off");

    setTimeout(() => {
      newGame.closeBattleWidnow();
    }, 500);

    setTimeout(() => {
      winCheck();
    }, 600);
  }
  initGameBoard() {
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

  drawBoard() {
    for (let row = 0; row < newGame.map[0].length; row++) {
      for (let col = 0; col < newGame.map[0][row].length; col++) {
        var cell = document.querySelector(`.cell${row}R${col}`);
        console.log(`.cell${row}R${col}`);
        console.log(cell);
        cell.innerText = newGame.map[0][row][col];

        if (newGame.map[0][row][col] === "壁") {
          document.getElementsByClassName(
            `cell${row}R${col}`
          )[0].innerHTML = `<img class = "wall" src="images/brickwall.jpg" height ="18px" width ="20px">`;
        }

        if (newGame.map[0][row][col] === "敵") {
          document.getElementsByClassName(
            `cell${row}R${col}`
          )[0].innerHTML = `<img class = "demon" src="images/demon.png" height ="18px" width ="20px">`;
        }

        //UNCOMMENT BIT BELOW TO USE IMAGE AT THE POSITION OF THE PLAYER!!!

        document.getElementsByClassName(
          `cell${newGame.player.x}R${newGame.player.y}`
        )[0].innerHTML = `<img class = "hero" src="images/hero.png" height ="18px" width ="20px">`;
      }
    }
  }
}

//※※※※※※※※※※INITALIZING GAME※※※※※※※※※※

let startGameBtn = document.querySelector("#startGame");
let newGame = new Game();
//clicking the button calls the methods that get the game set up
startGameBtn.onclick = () => {
  if (newGame.map.length > 0) {
    // startGameBtn.disabled  = true;
    // alert("Game already in progresss");
    return;
  } else {
    // startGameBtn.disabled = false;

    newGame.makeMap(); // sets up the 2d array BASED ON SAVE JAVASCRIPT STUFF

    newGame.addEnemies(4); // doesn't add anythign to the 2d array yet just enemies.
    // newGame.addBoss(); //ADDS THE BOSS
    newGame.createPlayer(); // makes player
    newGame.player.updatePlayerPosition();
    newGame.initGameBoard(); // sets up the html to refelect the  rows and cols of the js 2D array
    newGame.drawBoard(); // this actually DRAWS everything on the board like the player, enemies and walls
    console.log(newGame);
  }
};

document.onkeydown = (event) => {
  if (newGame.count < 1) {
    newGame.player.move();
  } else {
    return;
  }
};

function doBattle() {
  newGame.skirmish();
  newGame.removeDeadEnemies();
}

// document.getElementById(`skirmishBtn`).onclick = () => {
//   alert(`you have attacked!`);
// };

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
