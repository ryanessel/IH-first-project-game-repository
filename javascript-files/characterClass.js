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
//ONLY FOR PLAYER USE!!!
// MAKE THESE ALL CLEARER BY PUTTING THE DAMAGE CALC IN A VARAIBlE
//RIGHT NOW IT IS NEARLY UNREADABLE


  normalAtk(){
    //90% accuracy
    //33% attack power
    newGame.antiSpamSwitch("on");
    setTimeout(() => {
      newGame.enemyForBattle[0].monVariableDmgAtk();
      setTimeout(() => {
        statusBox.innerHTML = `<i>HOW WILL YOU ATTACK?</i>`;
      }, 2000)
    }, 2500);


    let chance = Math.floor(Math.random()*100);
    let baseChanceToHit = 90;
    let dmgToEnemyCalc = Math.round(newGame.player.atk* .33) - newGame.enemyForBattle[0].def;
    let statusBox =   document.getElementById("statusBox");
    
    if ( chance <= baseChanceToHit ) {
      console.log({chance:chance});
      //run attackFunction
      //prettier-ignore
        if (dmgToEnemyCalc <= 0){

          statusBox.innerHTML =  `PLAYER ATTACKS`

          setTimeout(() => {
            newGame.enemyForBattle[0].hp -= 1;
            newGame.updateHtmlHp();
            statusBox.innerHTML = `ENEMY TOOK<strong> ${1} </strong>POINT OF DAMAGE`
            setTimeout(() => {
              newGame.battleCheckWinLoss();
            }, 800)

          }, 800);
        

        } else {

          statusBox.innerHTML =  `PLAYER ATTACKS`

          setTimeout(() => {
            newGame.enemyForBattle[0].hp -=  dmgToEnemyCalc;
            newGame.updateHtmlHp();
            statusBox.innerHTML = `ENEMY TOOK<strong> ${dmgToEnemyCalc}</strong> POINTS OF DAMAGE`
            setTimeout(() => {
              newGame.battleCheckWinLoss();
            }, 800)
          
          }, 800);
        
        }
      
    } else if (chance > baseChanceToHit) {
      //innnerTHML = "MISS!!!"
      statusBox.innerHTML =  `PLAYER ATTACKS`
      setTimeout(()=> {
        statusBox.innerHTML =  `PLAYER MISS!!!`
      }, 800)

    
    }
    

  }
  mediumAtk(){
    //66%
    //66%
    newGame.antiSpamSwitch("on");

    setTimeout(() => {
      newGame.enemyForBattle[0].monVariableDmgAtk();

      setTimeout(() => {
        statusBox.innerHTML = `<i>HOW WILL YOU ATTACK?</i>`;
      }, 2000)

    }, 2500);

    let chance = Math.floor(Math.random()*100);
    let baseChanceToHit = 66;
    let dmgToEnemyCalc = Math.round(newGame.player.atk* .66) - newGame.enemyForBattle[0].def;
    let statusBox =   document.getElementById("statusBox"); // use inner html not TEXT
    
    if ( chance <= baseChanceToHit ) {
      console.log({chance:chance});
      //run attackFunction
      //prettier-ignore
        if (dmgToEnemyCalc <= 0){

          statusBox.innerHTML =  `PLAYER ATTACKS`

          setTimeout(() => {
            newGame.enemyForBattle[0].hp -= 1;
            newGame.updateHtmlHp();
            statusBox.innerHTML = `ENEMY TOOK<strong> ${1} </strong>POINT OF DAMAGE`
            setTimeout(() => {
              newGame.battleCheckWinLoss();
            }, 800)
          }, 800);
        

        } else {

          statusBox.innerHTML =  `PLAYER ATTACKS`

          setTimeout(() => {
            newGame.enemyForBattle[0].hp -=  dmgToEnemyCalc;
            newGame.updateHtmlHp();
            statusBox.innerHTML = `ENEMY TOOK<strong> ${dmgToEnemyCalc}</strong> POINTS OF DAMAGE`
            setTimeout(() => {
              newGame.battleCheckWinLoss();
            }, 800)
          }, 800);
        
        }
      
    } else if (chance > baseChanceToHit) {
      //innnerTHML = "MISS!!!"
      statusBox.innerHTML =  `PLAYER ATTACKS`
      setTimeout(()=> {
        statusBox.innerHTML =  `PLAYER MISS!!!`
      }, 800)

    
    }

  }
  strongAtk(){
    //28% accuraacy 
    //90% + Math.random()* .40 (chance for 130% atk pwr to be apply)
    //if you miss the enemy attacks 3 times!
    newGame.antiSpamSwitch("on");
    // setTimeout(() => {
    //   newGame.enemyForBattle[0].monVariableDmgAtk();
    // }, 3500);


    let chance = Math.floor(Math.random()*100);
    let baseChanceToHit = 14;
    let dmgToEnemyCalc =(Math.round(newGame.player.atk* 1.50) + (Math.round(Math.random() * newGame.player.atk* .50))) - newGame.enemyForBattle[0].def;
    let statusBox =   document.getElementById("statusBox"); // use inner html not TEXT
    
    if ( chance <= baseChanceToHit ) {
      console.log({chance:chance});
      //run attackFunction
      //prettier-ignore
        if (dmgToEnemyCalc <= 0){

          statusBox.innerHTML =  `PLAYER ATTACKS`

          setTimeout(() => {
            newGame.enemyForBattle[0].hp -= 1;
            newGame.updateHtmlHp();
            statusBox.innerHTML = `ENEMY TOOK<strong> ${1} </strong>POINT OF DAMAGE`
            newGame.battleCheckWinLoss();
          }, 800);
        

        } else {

          statusBox.innerHTML =  `PLAYER ATTACKS`

          setTimeout(() => {
            newGame.enemyForBattle[0].hp -=  dmgToEnemyCalc;
            newGame.updateHtmlHp();
          
            statusBox.innerHTML = `ENEMY TOOK<strong> ${dmgToEnemyCalc}</strong> POINTS OF DAMAGE`
            newGame.battleCheckWinLoss();
            setTimeout(() => {
            
              statusBox.innerHTML = `ENEMY WAS STAGGERED!!! `
             
              setTimeout(() => {
              statusBox.innerHTML = `<i>HOW WILL YOU ATTACK?</i>`;
              newGame.antiSpamSwitch("off");
              }, 1000)
            
            }, 1000);
          }, 800);
        
        }
      
    } else if (chance > baseChanceToHit) {
      //innnerTHML = "MISS!!!"
      statusBox.innerHTML =  `PLAYER ATTACKS`
      setTimeout(()=> {
        statusBox.innerHTML =  `PLAYER MISS!!!`

        setTimeout (() => {
          statusBox.innerHTML =  `PLAYER STUMBLES!!!`
          
          setTimeout(() =>{
            statusBox.innerHTML =  `MOSNTER ATTACKS 3 TIMES!!!`;

            setTimeout(() => {
              newGame.enemyForBattle[0].mosnterTripleAtk();
            })

          }, 700)
        
        }, 800) 
     

        setTimeout(() => {

          setTimeout(() => {

            statusBox.innerHTML = `<i>HOW WILL YOU ATTACK?</i>`;
            }, 8000)
        }, 800)

      }, 800)

    
    }


  }


  playerAttack() {
    if (newGame.player.atk - newGame.enemyForBattle[0].def <= 0) {
      return 1;
    } else {
      return newGame.player.atk - newGame.enemyForBattle[0].def;
    }
  }

  monVariableDmgAtk() {

    let monVaraibleDmg = (Math.round(newGame.enemyForBattle[0].atk*.43)) + (Math.floor(Math.random()*newGame.enemyForBattle[0].atk*.20))
    let chance = Math.floor(Math.random()*100);
    let baseChanceToHit = 80;
    let statusBox =   document.getElementById("statusBox");


    if ( chance <= baseChanceToHit ) {
      
      //run attackFunction
      //prettier-ignore
      if (monVaraibleDmg - newGame.player.def <= 0) {

        statusBox.innerText = `ENEMY ATTACKS`  
      setTimeout(() => {
        newGame.player.hp -= 1;
        newGame.updateHtmlHp();
        statusBox.innerHTML = `PLAYER TOOK <strong> ${1}</strong> POINT OF DAMAGE`
        newGame.battleCheckWinLoss();
        newGame.antiSpamSwitch("off");
      }, 800)

      } else {
        statusBox.innerText = `ENEMY ATTACKS`
   //set timeouit
         setTimeout(() => {
          newGame.player.hp -=  monVaraibleDmg - newGame.player.def;
          newGame.updateHtmlHp();
          statusBox.innerHTML = `PLAYER TOOK <strong>${monVaraibleDmg - newGame.player.def}</strong> POINT OF DAMAGE`
          newGame.battleCheckWinLoss();
          newGame.antiSpamSwitch("off");
      }, 800)

      }
      
    } else if (chance > baseChanceToHit) {
      //innnerTHML = "MISS!!!"
    statusBox.innerHTML = `ENEMY ATTACKS`

    setTimeout(() => {
      statusBox.innerHTML = `ENEMY MISS!!!`
      newGame.antiSpamSwitch("off");
    }, 800)

    }

  }

  mosnterTripleAtk() {
    let statusBox =   document.getElementById("statusBox");

    newGame.antiSpamSwitch("on");
    setTimeout(() => {

      this.monVariableDmgAtk();
      setTimeout(() => {
        statusBox.innerText = `1st ATTACK:  ` + statusBox.innerText;
        newGame.updateHtmlHp();
      }, 800)


    }, 1000)
  
    newGame.antiSpamSwitch("on");
    setTimeout(() => {
      this.monVariableDmgAtk();
      setTimeout(() => {
        statusBox.innerText = `2nd ATTACK:  ` + statusBox.innerText;
        newGame.updateHtmlHp();
      }, 800)
    }, 3000)

    newGame.antiSpamSwitch("on");
    setTimeout(() => {
      this.monVariableDmgAtk();
      setTimeout(() => {
        statusBox.innerText = `3rd ATTACK:  ` + statusBox.innerText;
        newGame.updateHtmlHp();
      }, 800)
    }, 5000)
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
