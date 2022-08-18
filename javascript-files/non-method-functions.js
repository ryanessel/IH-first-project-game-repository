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
  
        row.appendChild(cell);// adds the x# of <td> into the <tr>; makes row with x# columns
      }
      gameMap.appendChild(row);// adds the <tr> with the x# of <td> to the <table>
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
  