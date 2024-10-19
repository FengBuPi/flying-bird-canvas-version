import Bird from '../Bird/Bird.js';
import Land from '../Land/Land.js';
import Pipe from '../Pipe/Pipe.js';
import Sky from '../Sky/Sky.js';

const skyImage = new Image();
skyImage.src = '../../asset/images/sky.png';

const landImage = new Image();
landImage.src = '../../asset/images/land.png';

const pipe1Image = new Image();
pipe1Image.src = '../../asset/images/pipe1.png';

const pipe2Image = new Image();
pipe2Image.src = '../../asset/images/pipe2.png';

const birdImage = new Image();
birdImage.src = '../../asset/images/birds.png';

interface Drawable {
  draw(): void;
}
export interface GameOptions {
  speed: number; // 游戏速度
}

export default class Game {
  ctx: CanvasRenderingContext2D;
  gameOptions: GameOptions;

  speed: number; // 游戏速度

  drawableList: Array<Drawable>;
  bird!: Bird;

  constructor(ctx: HTMLCanvasElement, gameOptions: GameOptions) {
    this.ctx = ctx.getContext('2d')!;
    this.gameOptions = gameOptions;
    this.speed = gameOptions.speed;
    this.drawableList = [];
  }

  initGame() {
    this.speed = this.gameOptions.speed;
    this.initSky();
    this.initPipe();
    this.initLand();
    this.initBird();
  }

  initSky() {
    // 初始化天空
    for (let i = 0; i < 2; i++) {
      const sky = new Sky(this.ctx, skyImage, i * this.ctx.canvas.width, 0, this.speed);
      this.drawableList.push(sky);
    }
  }

  initPipe() {
    // 初始化管道
    const topImg = pipe2Image;
    const botImg = pipe1Image;
    for (let i = 0; i < 6; i++) {
      const pipe = new Pipe(this.ctx, topImg, botImg, i * 3 * topImg.width, this.speed);
      this.drawableList.push(pipe);
    }
  }

  initLand() {
    // 初始化陆地
    const landImg = landImage;
    for (let i = 0; i < 4; i++) {
      const land = new Land(this.ctx, landImg, i * landImg.width, this.speed);
      this.drawableList.push(land);
    }
  }

  initBird() {
    // 初始化鸟
    this.bird = new Bird(this.ctx, birdImage);
    this.drawableList.push(this.bird);
  }

  animation() {
    // 清除画布
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    // 开启新路径
    this.ctx.beginPath();

    // 画图片
    this.drawableList.forEach((item) => {
      item.draw();
    });

    // // 1. 碰到地面 gameover
    // if (this.bird.y > this.ctx.canvas.height - landImage.height - 10) {
    //   this.running = false;
    // }

    // // 2. 碰到天花板 gameover
    // if (this.bird.y < 0 + 10) {
    //   this.running = false;
    // }

    // // 3. 碰到管道 gameover
    // if (this.ctx.isPointInPath(this.bird.x + 10, this.bird.y)) {
    //   this.running = false;
    // }

    // if (this.running) {
    requestAnimationFrame(this.animation.bind(this));
    // }
  }

  gameStart() {
    this.initGame();
    // 启动动画函数
    this.animation();
  }
}