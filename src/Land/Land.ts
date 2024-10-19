export default class Land {
  private ctx: CanvasRenderingContext2D;
  private landImg: HTMLImageElement;
  private x: number;
  private y: number;
  private speed: number;

  constructor(ctx: CanvasRenderingContext2D, landImg: HTMLImageElement, x: number, speed: number) {
    this.ctx = ctx;
    this.landImg = landImg;
    this.x = x;
    this.y = this.ctx.canvas.height - this.landImg.height;
    this.speed = speed;
  }

  // 绘制地面的方法
  draw(): void {
    this.ctx.drawImage(this.landImg, this.x, this.y);
    this.x -= this.speed;
    if (this.x <= -this.landImg.width) {
      this.x += 4 * this.landImg.width;
    }
  }
}