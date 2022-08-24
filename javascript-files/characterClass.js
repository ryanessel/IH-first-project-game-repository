//this semi works// should this be a method of the character class???

class Character {
  //prettier-ignore
  constructor(name, hpFunc, atkFunc, defFunc, symbol) { // all use the same stats() function
    this.name = name;
    this.symbol = symbol;
    this.hp = hpFunc;
    this.atk = atkFunc;
    this.def = defFunc;
    // Player Position
    this.x = 0;
    this.y = 0;
  }

  takeDmg(dmg) {
    // get pass monster.attack() as argument to newGame.player.takeDmg(); newGame.player.takeDmg(monster.attach());
    let message;
    if (dmg <= this.def) {
      this.hp -= 1;
      message = `<div id ="monMessage"> 
      <span>the newGame.player took 1 point of damage </span>
      </div>`;
      document.querySelector("#statusWindow").innerHTML = message;
    } else {
      this.hp -= dmg - this.def;
      message = `<div id ="monMessage"> 
      <span>the newGame.player took ${dmg - this.def} points of damage </span>
      </div>`;
      document.querySelector("#statusWindow").innerHTML = message;
    }
    newGame.checkGameStatus();
  }

  playerAttack() {
    if (newGame.player.atk - newGame.enemyForBattle[0].def <= 0) {
      return 1;
    } else {
      return newGame.player.atk - newGame.enemyForBattle[0].def;
    }
  }

  monsterAttack() {
    if (newGame.enemyForBattle[0].atk - newGame.player.def <= 0) {
      return 1;
    } else {
      return newGame.enemyForBattle[0].atk - newGame.player.def;
    }
  }

  move() {
    console.log(newGame.player.message);

    if (event.code === "ArrowUp" || event.code === "KeyW") {
      if (newGame.map[0][newGame.player.x - 1][newGame.player.y] === "壁") {
        // alert("there's an obstacle in the path!");
        return;
      } else {
        newGame.player.x -= 1;
        console.log(newGame.player.x, newGame.player.y);
        console.log(newGame.player);
      }
    } else if (event.code === "ArrowDown" || event.code === "KeyS") {
      if (newGame.map[0][newGame.player.x + 1][newGame.player.y] === "壁") {
        // alert("there's an obstacle in the path!");
        return;
      } else {
        newGame.player.x += 1;
        console.log(newGame.player.x, newGame.player.y);
        console.log(newGame.player);
      }
    } else if (event.code === "ArrowRight" || event.code === "KeyD") {
      if (
        newGame.map[0][newGame.player.x][newGame.player.y + 1] === "壁" ||
        newGame.map[0][newGame.player.x][newGame.player.y + 1] === undefined
      ) {
        // alert("there's an obstacle in the path!");
        return;
      } else {
        newGame.player.y += 1;
        console.log(newGame.player.x, newGame.player.y);
        console.log(newGame.player);
      }
    } else if (event.code === "ArrowLeft" || event.code === "KeyA") {
      if (
        newGame.map[0][newGame.player.x][newGame.player.y - 1] === "壁" ||
        newGame.map[0][newGame.player.x][newGame.player.y - 1] === undefined
      ) {
        // alert("there's an obstacle in the path!");
        return;
      } else {
        newGame.player.y -= 1;
        console.log(newGame.player.x, newGame.player.y);
        console.log(newGame.player);
      }
    }

    newGame.player.updatePlayerPosition();
    newGame.drawBoard();

    winCheck();
    // drawBoard() used to be here
    console.log(newGame.map[0]);
  }

  updatePlayerPosition() {
    console.log(newGame.player.x, newGame.player.y);
    for (let i = 0; i < newGame.map[0].length; i++) {
      for (let j = 0; j < newGame.map[0].length; j++) {
        if (i === newGame.player.x && j === newGame.player.y) {
          newGame.map[0][i][j] = newGame.player.symbol;
          console.log(i, j);
        } else if (
          newGame.map[0][i][j] !== "敵" &&
          newGame.map[0][i][j] !== "壁"
        ) {
          newGame.map[0][i][j] = " ";
        }
      }
    }
    //ENEMY COLISSION SECTIOIN!!!!!!!!!!!!!!!
    if (
      newGame.player.x !== 0 &&
      newGame.player.x !== newGame.map[0].length - 1
    ) {
      if (
        newGame.map[0][newGame.player.x][newGame.player.y + 1] === "敵" ||
        newGame.map[0][newGame.player.x][newGame.player.y - 1] === "敵" ||
        newGame.map[0][newGame.player.x - 1][newGame.player.y] === "敵" ||
        newGame.map[0][newGame.player.x + 1][newGame.player.y] === "敵"
      ) {
        //Timout allows the message to displayed slightly after the map is updated so we can see the player being adjacent to the enemy
        newGame.countOnOff("on");
        setTimeout(() => {
          alert("battle start");
          newGame.runBattle();
        }, 10);
      }
    } else if (newGame.player.x === 0) {
      //top of the array
      if (
        newGame.map[0][newGame.player.x][newGame.player.y + 1] === "敵" ||
        newGame.map[0][newGame.player.x][newGame.player.y - 1] === "敵" ||
        newGame.map[0][newGame.player.x + 1][newGame.player.y] === "敵"
      ) {
        //Timout allows the message to displayed slightly after the map is updated so we can see the player being adjacent to the enemy
        newGame.countOnOff("on");
        setTimeout(() => {
          alert("battle start");
          newGame.runBattle();
        }, 10);
      }
    } else if (newGame.player.x === newGame.map[0].length - 1) {
      // end(right side of array)
      if (
        newGame.map[0][newGame.player.x][newGame.player.y + 1] === "敵" ||
        newGame.map[0][newGame.player.x][newGame.player.y - 1] === "敵" ||
        newGame.map[0][newGame.player.x - 1][newGame.player.y] === "敵"
      ) {
        //Timout allows the message to displayed slightly after the map is updated so we can see the player being adjacent to the enemy
        newGame.countOnOff("on");
        setTimeout(() => {
          alert("battle start");
          newGame.runBattle();
        }, 10);
      }
    }
    return newGame.map[0];
  }
}
