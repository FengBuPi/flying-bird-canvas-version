export default class Bird {
    ctx;
    birdImg;
    x = 100;
    y = 100;
    birdWidth;
    birdHeight;
    index = 0;
    v0 = 0;
    acc = 0.0005;
    startTime = Date.now();
    maxSpeed = 0.3;
    maxAngle = Math.PI / 4;
    constructor(ctx, birdImg) {
        this.ctx = ctx;
        this.birdImg = birdImg;
        this.birdWidth = this.birdImg.width / 3;
        this.birdHeight = this.birdImg.height;
        this.initFly();
    }
    // 绘制小鸟的方法
    draw() {
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
        this.ctx.drawImage(this.birdImg, Math.floor(this.index / 5) * this.birdWidth, 0, this.birdWidth, this.birdHeight, -this.birdWidth / 2, -this.birdHeight / 2, this.birdWidth, this.birdHeight);
        this.index++;
        if (this.index > 14) {
            this.index = 0;
        }
        this.ctx.restore();
    }
    // 初始化飞行的方法
    initFly() {
        const that = this;
        this.ctx.canvas.onclick = function () {
            that.v0 = -0.3;
        };
    }
}
