// class Ship {
// constructor(x, y) {
// this.x = x;
// this.y = y;
// }

// }

// class Game {
// constructor(){
// this.gameBoard;
// }
// }

// class PLayer {
// constructor(name) {
// this.playerGameBoard = [];
// this.name = name;
// }

// }

// put in method called makeMap(); then put that method, inside a method called startGame();
//then set it up so that when you click start game it runs a startGame(); all inside of which will run mutiple funcitons getting "load" everything that is needed for the game desu.

//NOT sure i wanna do auto generated maps or if I just want to make like 5 maps then put them each in an array and randomly access one when setting up the game in the gameStart(); method.
// maybe roll a dice adds movement to your movement pool. like movePoints: 0; but you roll 4s sided dice etc
let garage = [
["　", "　", "　", "　", "　", "　", "　", "　", "　", "　", "　", "　"],
["　", "　", "　", "敵", "　", "　", "　", "　", "　", "　", "　", "　"],
["　", "　", "　", "　", "壁", "壁", "壁", "　", "　", "壁", "　", "　"],
["　", "　", "　", "　", "壁", "　", "壁", "　", "　", "壁","　", "　"],
["　","　", "　", "　", "壁", "　", "壁", "壁", "壁", "壁", "　", "　"],
["　", "　", "　", "　", "　", "　", "　", "　", "　", "壁", "　", "　"],
["　","　", "　", "　", "　", "　", "　", "敵", "　", "壁","　", "　"],
["　", "　", "　", "　", "　", "　", "　", "　", "　", "壁", "　", "　"],
["　", "　", "　", "　", "　", "　", "　", "　", "　", "　", "　", "　"],
["　", "　", "　", "　", "　", "　", "壁", "壁", "壁", "壁", "　", "　"],
["　","　", "　", "　", "　", "敵", "　", "　", "　", "　", "　", "　"],
["　", "敵", "　", "　", "　", "　", "　", "　", "　", "　", "　", "　",],
]

let player = {
name: "士",
img: "https://c.tenor.com/3v76Dup6RZAAAAAd/fligugigu-tik-tok-tenacious-d.gif",
x: 0,
y: 0
}
updatePlayerPosition();

let enemy = {
name: "益",
x: 1,
y: 1
}

//this.cardImage =${this.value}${this.value} should set it

// THIS THING LETS YOU "MOVE" YOUR GUY AROUND THE array
// must be a move(); inside of the player class on your.and the player should be called as "this.player"
document.addEventListener('keydown', (event) => {

// if (garage[player.x][player.y - 1] === undefined){
// return
// }
// All this stuff should be in the player "move();" method. and then that method inside of the this onclick listener
if (event.code === 'ArrowUp' || event.code === 'KeyW' ) {
if (garage[player.x -1 ][player.y] === "壁" || garage[player.x -1 ][player.y] === "敵") {
// alert("there's an obstacle in the path!");
return;
} else {

      player.x -= 1;
      console.log(player.x, player.y)
      console.log(player)
       }

    } else if (event.code === 'ArrowDown' || event.code ===  'KeyS') {

      if (garage[player.x +1 ][player.y] === "壁"  || garage[player.x +1 ][player.y] === "敵" ) {
       // alert("there's an obstacle in the path!");
       return;
     } else {

      player.x += 1;
      console.log(player.x, player.y);
      console.log(player)
     }

    } else if (event.code === 'ArrowRight' || event.code ===  'KeyD' ) {
      if (garage[player.x ][player.y +1] === "壁" || garage[player.x ][player.y +1] === "敵" || garage[player.x][player.y + 1] === undefined) {
       // alert("there's an obstacle in the path!");
       return;
     } else {

      player.y += 1;
      console.log(player.x, player.y);
      console.log(player)
     }

    } else if (event.code === 'ArrowLeft' || event.code ===  'KeyA') {
      if (garage[player.x ][player.y -1] === "壁" || garage[player.x ][player.y -1] === "敵" || garage[player.x][player.y - 1] === undefined) {
       // alert("there's an obstacle in the path!");
       return;
     } else {

      player.y -= 1;
      console.log(player.x, player.y);
      console.log(player)
     }
    }
    updatePlayerPosition();
    console.log(garage);

})
// console.log(garage[0][2])

//FUNCTION START
function updatePlayerPosition () {

console.log(player.x, player.y)
for (let i = 0; i < garage.length; i++) {
for(let j = 0; j < garage.length; j++) {
if (i === player.x && j === player.y) {
garage[i][j] = player.name
console.log(i, j)
}

    else if (garage[i][j] !== "敵" && garage[i][j] !== "壁"){
        garage[i][j] = "　"
      }

}

}

     // CHECKS IF PLAYER IS ADJACENT TO ENEMY AFTER MOVMENT-  also changes how it checks if enemy is adjacent if the player is at the op or botom row; it doesn't check in in the row minus zero or the row beoynd the length of the array minus 1!

if (player.x !== 0 && player.x !== garage.length -1){
if (garage[player.x][player.y +1] === "敵" || garage[player.x][player.y -1] ==="敵" || garage[player.x -1][player.y] ==="敵" || garage[player.x +1][player.y] ==="敵") {
//Timout allows the message to displayed slightly after the map is updated so we can see the player being adjacent to the enemy
setTimeout(() => {alert("battle start")}, 10);

        } }  else if (player.x === 0) {
              if (garage[player.x][player.y +1] === "敵" || garage[player.x][player.y -1] ==="敵" || garage[player.x +1][player.y] ==="敵") {
       //Timout allows the message to displayed slightly after the map is updated so we can see the player being adjacent to the enemy
       setTimeout(() => {alert("battle start")}, 10);

        }

        } else if (player.x === garage.length -1) {
              if (garage[player.x][player.y +1] === "敵" || garage[player.x][player.y -1] ==="敵" || garage[player.x -1][player.y] ==="敵" ) {
       //Timout allows the message to displayed slightly after the map is updated so we can see the player being adjacent to the enemy
       setTimeout(() => {alert("battle start")}, 10);

        }

        }
       return garage;

      }

//FUNCTION END!!!

console.log(garage)
console.log(garage[player.x][player.y + 1])

//ITERATIES DIAGONALLY FOR [0][0] in the array to bottomw right
// for (let i = 0; i < garage.length; i++) {
// console.log(garage[i][i]);

// }

console.log(garage[0].length\* garage.length)
