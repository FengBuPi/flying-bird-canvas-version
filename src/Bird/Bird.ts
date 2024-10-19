export default class Bird {
  private ctx: CanvasRenderingContext2D;
  private birdImg: HTMLImageElement;
  public x: number = 100;
  public y: number = 100;
  private birdWidth: number;
  private birdHeight: number;
  private index: number = 0;
  private v0: number = 0;
  private acc: number = 0.0005;
  private startTime: number = Date.now();
  private maxSpeed: number = 0.3;
  private maxAngle: number = Math.PI / 4;

  constructor(ctx: CanvasRenderingContext2D, birdImg: HTMLImageElement) {
    this.ctx = ctx;
    this.birdImg = birdImg;
    this.birdWidth = this.birdImg.width / 3;
    this.birdHeight = this.birdImg.height;
    this.initFly();
  }

  // 绘制小鸟的方法
  draw(): void {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    const currentTime = Date.now();
    const deltaTime = currentTime - this.startTime;
    this.startTime = currentTime;
    const h = this.v0 * deltaTime + this.acc * deltaTime * deltaTime / 2;
    this.y += h;
    this.v0 += this.acc * deltaTime;
    let angle = this.v0 / this.maxSpeed * this.maxAngle;
    if (angle > this.maxAngle) {
      angle = this.maxAngle;
    }
    this.ctx.rotate(angle);
    this.ctx.drawImage(
      this.birdImg,
      Math.floor(this.index / 5) * this.birdWidth,
      0,
      this.birdWidth,
      this.birdHeight,
      -this.birdWidth / 2,
      -this.birdHeight / 2,
      this.birdWidth,
      this.birdHeight
    );
    this.index++;
    if (this.index > 14) {
      this.index = 0;
    }
    this.ctx.restore();
  }

  // 初始化飞行的方法
  initFly(): void {
    const that = this;
    this.ctx.canvas.onclick = function () {
      that.v0 = -0.3;
    };
  }
}