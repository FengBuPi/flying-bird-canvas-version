export default class Land {
    ctx;
    landImg;
    x;
    y;
    speed;
    constructor(ctx, landImg, x, speed) {
        this.ctx = ctx;
        this.landImg = landImg;
        this.x = x;
        this.y = this.ctx.canvas.height - this.landImg.height;
        this.speed = speed;
    }
    // 绘制地面的方法
    draw() {
        this.ctx.drawImage(this.landImg, this.x, this.y);
        this.x -= this.speed;
        if (this.x <= -this.landImg.width) {
            this.x += 4 * this.landImg.width;
        }
    }
}
