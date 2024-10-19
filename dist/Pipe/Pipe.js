export default class Pipe {
    ctx;
    topImg;
    botImg;
    x;
    speed;
    space = 200;
    imgHeight;
    imgWidth;
    topY;
    botY;
    constructor(ctx, topImg, botImg, x, speed) {
        this.ctx = ctx;
        this.topImg = topImg;
        this.botImg = botImg;
        this.x = x + 400;
        this.speed = speed;
        this.imgHeight = this.topImg.height;
        this.imgWidth = this.topImg.width;
        this.initHeight();
    }
    // 绘制管道的方法
    draw() {
        this.ctx.drawImage(this.topImg, this.x, this.topY);
        this.ctx.drawImage(this.botImg, this.x, this.botY);
        this.ctx.rect(this.x, this.topY, this.imgWidth, this.imgHeight);
        this.ctx.rect(this.x, this.botY, this.imgWidth, this.imgHeight);
        this.x -= this.speed;
        if (this.x <= -this.topImg.width) {
            this.x += 18 * this.imgWidth;
        }
    }
    // 初始化管道高度的方法
    initHeight() {
        const randomH = 80 * Math.random();
        const minH = 140;
        const h = randomH + minH;
        this.topY = -this.imgHeight + h;
        this.botY = h + this.space;
    }
}
