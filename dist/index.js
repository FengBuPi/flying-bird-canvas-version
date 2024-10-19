import Game from './Game/Game.js';
const gameOptions = {
    speed: 3
};
const game = new Game(document.getElementById("canvas"), gameOptions);
game.gameStart();
// document.getElementById("easy").onclick = function () {
//   game.init(true, 3);
//   document.getElementById("second").innerText = "时间";
// }
// document.getElementById("hard").onclick = function () {
//   game.init(true, 5);
// }
// document.getElementById("end").onclick = function () {
//   game.init(false);
// }
