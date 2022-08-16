//JAVASCRIPT CONNECTED
// window.onload = () => {
//     console.log("connecting and working");
//     alert("hellow");
// }


// HAVE A JS FILE FOR EACH CLASS, INDEX.JS IS FOR EVENT LISTENERS ETC.
// USE THAT GRID THING HE SAID ABOUT UGH
//need to figure out how to make map
// make only 1 player class and use 2 differnet methods 1 for making mosters and 1 for making the player
// or have plaeyr and monster class sepeartly

//FUNCTION USED FOR SETTING ALL STATS.
function stats (base, variableStat) {//  maybe a stat one with base and varible stat
  const randomHp = (Math.round(Math.random()*variableStat)+base);// like replace these numbers with the params
  return randomHp;
}

//PLAYER CLASS------------------------------------------------------------
class Player {
    constructor(){
      // have to do it as a function or it won't vary bwetween 2 differnt variables of this class(this isn't important for the player but it is for the monster class since there will be more than 1)
        this.hp = stats(250, 50); 
        this.atk = stats(70, 30);
        this.def = stats(65, 70);
    }
    attack(){
    const atkPwr70to100 = Math.round(this.atk*((Math.random()*.3) + .7)); 
    return atkPwr70to100;
    
    }
  
    takeDmg(dmg){ // get pass monster.attack() as argument to player.takeDmg(); player.takeDmg(monster.attach());
      let message;
    if (dmg <= this.def) {
       this.hp -= 1;
      message = `<div id ="monMessage"> 
      <span>the player took 1 point of damage </span>
    </div>`
      document.querySelector("#statusWindow").innerHTML = message;
       } else {
       this.hp -= (dmg-this.def)
      message = `<div id ="monMessage"> 
      <span>the player took ${dmg-this.def} points of damage </span>
    </div>`
      document.querySelector("#statusWindow").innerHTML = message;
       }
     }
  
  move() {
    // keydown even that lets me move you move the player
    
  }
}
//---------------------------------------------------------------------------------------

//MONSTER CLASS------------------------------------------------------------
class Monster {
  constructor() {
        this.hp = stats(500, 200); 
        this.atk = stats(100, 45);
        this.def = stats(10, 20);
    
  }
    attack(){
    const atkPwr70to100 = Math.round(this.atk*((Math.random()*.1) + .8)); 
    return atkPwr70to100;
    
  }
  
  takeDmg(dmg){ // pass monster.attack() as argument to player.takeDmg(); player.takeDmg(monster.attach());
     let message;  
    if (dmg <= this.def) {
       this.hp -= 1;
      message = `<div id ="monMessage"> 
      <span>the monster took 1 point of damage </span>
    </div>`
      document.querySelector("#statusWindow").innerHTML = message;
       } else {
       this.hp -= (dmg-this.def)
       message = `<div id ="monMessage"> 
      <span>the monster took ${dmg-this.def} points of damage </span>
    </div>`
       document.querySelector("#statusWindow").innerHTML = message;
       }
     }
    
    
  
  move() {
    // should move by themselves or  not at all maybe if its too hard. 
    //related to 2d for loop?
  }
}


class NewDungeon {// it is the thing that starts the game
  constructor() {
    this.enemies = [];
  
  }
  
  gameStart() {
  
    
  }
  
  generatePlayer(){
      this.player = new Player();
  }
  
   generateMonster(qtyOfMonsters){
     
     for (let i = 0; i < qtyOfMonsters; i++){
       
      
       this.enemies.push(new Monster());
       
     }
      
  }
  
  generateMap(){
    
  }
  
  playerAtk(){
    
  }
  
  mosterAtk(){
    
  }
  
}


//---------------------------------------------------------------------------------------

let dungeon1 = new NewDungeon();
dungeon1.generateMonster(5);
console.log(dungeon1.enemies)
console.log(dungeon1.player)
// TESTING METHODS/FINDING OBJECTS ETC.


let player1 = new Player;
let monster1 = new Monster;
// let player2 = new Player;
// let player3 = new Player;

let monHp = document.querySelector("#monHp span");
let atkMonBtn = document.querySelector("button#atkMonster")
let playerHp = document.querySelector("#playerHp span");
let atkPlayerBtn = document.querySelector("button#atkPlayer")

//READING MON HP ON INITILIZATION
monHp.innerText = monster1.hp;
playerHp.innerText = player1.hp;


atkMonBtn.onclick = () => {
  monster1.takeDmg(player1.attack()); // maybe should be in game 
  console.log({mon1HP: monster1.hp});
  monHp.innerText = monster1.hp;
  
}

atkPlayerBtn.onclick = () => {
  player1.takeDmg(monster1.attack()); // maybe should be in game 
  console.log({Player_HP: monster1.hp});
  playerHp.innerText = player1.hp;
  
}



console.log({player1:player1});

console.log({monster1: monster1});
// console.log({player2:player2});
// console.log({player3:player3});

