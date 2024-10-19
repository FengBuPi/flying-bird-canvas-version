export default class Sky {
    ctx;
    img;
    x;
    y;
    speed;
    constructor(ctx, skyImg, x, y, speed) {
        this.ctx = ctx;
        this.img = skyImg;
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    // 绘制天空的方法
    draw() {
        this.ctx.drawImage(this.img, this.x, this.y);
        this.x -= this.speed;
        if (this.x <= -this.ctx.canvas.width) {
            this.x += 2 * this.img.width;
        }
    }
}
