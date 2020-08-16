var board;
var TicTac = /** @class */ (function () {
    function TicTac(boardentry) {
        this.entry = boardentry;
    }
    // createRandom(entryPlace){
    //     board+= entryPlace;
    // }
    TicTac.prototype.click = function (num) {
        if (!board)
            board = [];
        if (board.length >= 9)
            return;
        if (!board.includes(num))
            board.push(num);
        document.getElementById(num).innerText = "X";
        var a = document.getElementById("1").innerText;
        var b = document.getElementById("2").innerText;
        var c = document.getElementById("3").innerText;
        var d = document.getElementById("4").innerText;
        var e = document.getElementById("5").innerText;
        var f = document.getElementById("6").innerText;
        var g = document.getElementById("7").innerText;
        var h = document.getElementById("8").innerText;
        var i = document.getElementById("9").innerText;
        if ((a == "X" && b == "X" && c == "X") ||
            (d == "X" && e == "X" && f == "X") ||
            (g == "X" && h == "X" && i == "X") ||
            (a == "X" && d == "X" && g == "X") ||
            (b == "X" && e == "X" && h == "X") ||
            (c == "X" && f == "X" && i == "X") ||
            (a == "X" && e == "X" && i == "X") ||
            (c == "X" && e == "X" && g == "X")) {
            alert("You Win");
            return;
        }
        else if ((a == "O" && b == "O" && c == "O") ||
            (d == "O" && e == "O" && f == "O") ||
            (g == "O" && h == "O" && i == "O") ||
            (a == "O" && d == "O" && g == "O") ||
            (b == "O" && e == "O" && h == "O") ||
            (c == "O" && f == "O" && i == "O") ||
            (a == "O" && e == "O" && i == "O") ||
            (c == "O" && e == "O" && g == "O")) {
            alert("You Lose");
            return;
        }
        var newNum = this.randomRange();
        if (!board.includes(newNum)) {
            document.getElementById("" + newNum).innerText = "O";
            board.push(newNum);
        }
        else {
            this.click(num);
        }
    };
    TicTac.prototype.randomRange = function () {
        return Math.floor(Math.random() * 9 + 1);
    };
    return TicTac;
}());
function quadClick(num) {
    var ticTac = new TicTac(num);
    ticTac.click(num);
}
