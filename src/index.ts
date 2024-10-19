import Game, { GameOptions } from './Game/Game.js'
const gameOptions: GameOptions = {
  speed: 3
}
const game = new Game(document.getElementById("canvas")! as HTMLCanvasElement, gameOptions);
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