var board;
class TicTac {
  entry: number;
  constructor(boardentry) {
    this.entry = boardentry;
  }
  // createRandom(entryPlace){
  //     board+= entryPlace;

  // }
  click(num) {
    if (!board) board = [];
    if (board.length >= 9) return;

    if (!board.includes(num)) board.push(num);
    document.getElementById(num).innerText = "X";
    let a = (<HTMLInputElement>document.getElementById("1")).innerText;
    let b = (<HTMLInputElement>document.getElementById("2")).innerText;
    let c = (<HTMLInputElement>document.getElementById("3")).innerText;
    let d = (<HTMLInputElement>document.getElementById("4")).innerText;
    let e = (<HTMLInputElement>document.getElementById("5")).innerText;
    let f = (<HTMLInputElement>document.getElementById("6")).innerText;
    let g = (<HTMLInputElement>document.getElementById("7")).innerText;
    let h = (<HTMLInputElement>document.getElementById("8")).innerText;
    let i = (<HTMLInputElement>document.getElementById("9")).innerText;

    if (
      (a == "X" && b == "X" && c == "X") ||
      (d == "X" && e == "X" && f == "X") ||
      (g == "X" && h == "X" && i == "X") ||
      (a == "X" && d == "X" && g == "X") ||
      (b == "X" && e == "X" && h == "X") ||
      (c == "X" && f == "X" && i == "X") ||
      (a == "X" && e == "X" && i == "X") ||
      (c == "X" && e == "X" && g == "X")
    ) {
      alert("You Win");
      return;
    } else if (
      (a == "O" && b == "O" && c == "O") ||
      (d == "O" && e == "O" && f == "O") ||
      (g == "O" && h == "O" && i == "O") ||
      (a == "O" && d == "O" && g == "O") ||
      (b == "O" && e == "O" && h == "O") ||
      (c == "O" && f == "O" && i == "O") ||
      (a == "O" && e == "O" && i == "O") ||
      (c == "O" && e == "O" && g == "O")
    ) {
      alert("You Lose");
      return;
    }
    let newNum = this.randomRange();
    if (!board.includes(newNum)) {
      document.getElementById(`${newNum}`).innerText = "O";
      board.push(newNum);
    } else {
      this.click(num);
    }
  }

  randomRange() {
    return Math.floor(Math.random() * 9 + 1);
  }
}

function quadClick(num: number) {
  let ticTac = new TicTac(num);
  ticTac.click(num);
}
