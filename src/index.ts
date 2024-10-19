import Game, { GameOptions } from './Game/Game.js'
const gameOptions: GameOptions = {
  speed: 3
}
const game = new Game(document.getElementById("canvas")! as HTMLCanvasElement, gameOptions);
game.gameStart();
