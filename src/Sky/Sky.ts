export default class Sky {
  private ctx: CanvasRenderingContext2D;
  private img: HTMLImageElement;
  private x: number;
  private y: number;
  private speed: number;

  constructor(ctx: CanvasRenderingContext2D, skyImg: HTMLImageElement, x: number, y: number, speed: number) {
    this.ctx = ctx;
    this.img = skyImg;
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  // 绘制天空的方法
  draw(): void {
    this.ctx.drawImage(this.img, this.x, this.y);
    this.x -= this.speed;
    if (this.x <= -this.ctx.canvas.width) {
      this.x += 2 * this.img.width;
    }
  }
}