class GradientAnimation {
    constructor() {
        this.parentElement = document.getElementById('pt_canvasParent');
        this.cnv = document.getElementById(`pt_bannerCanvasBg`);
        this.ctx = this.cnv.getContext(`2d`);
        this.circlesNum = 30;
        this.minRadius = 200;
        this.maxRadius = 200;
        this.speed = .005;

        (window.onresize = () => {
            this.setCanvasSize();
            this.createCircles();
        })();
        this.drawAnimation();

    }
    setCanvasSize() {
        this.w = this.cnv.width = this.parentElement.offsetWidth;
        this.h = this.cnv.height = this.parentElement.offsetHeight;
        if(this.parentElement.offsetWidth < 600) {
            this.circlesNum = 15;
            this.minRadius = 100;
            this.maxRadius = 100;
        } else {
            this.circlesNum = 30;
            this.minRadius = 200;
            this.maxRadius = 200;
        }
    }
    createCircles() {
        this.circles = [];
        for (let i = 0; i < this.circlesNum; ++i) {
            this.circles.push(new Circle(this.w, this.h, this.minRadius, this.maxRadius));
        }
    }
    drawCircles() {
        this.circles.forEach(circle => circle.draw(this.ctx, this.speed));
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.w, this.h);
    }
    drawAnimation() {
        this.clearCanvas();
        this.drawCircles();
        window.requestAnimationFrame(() => this.drawAnimation());
    }
}

class Circle {
    constructor(w, h, minR, maxR) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.angle = Math.random() * Math.PI * 2;
        this.radius = Math.random() * (maxR - minR) + minR;
        this.firstColor = `rgba(255,255,255,${(Math.random() * 100) / 100})`;
        this.secondColor = `rgba(255,255,255,${(Math.random() * 100) / 100})`;
    }
    draw(ctx, speed) {
        this.angle += speed;
        const x = this.x + Math.cos(this.angle) * 200;
        const y = this.y + Math.sin(this.angle) * 200;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
        gradient.addColorStop(0, this.firstColor);
        gradient.addColorStop(1, this.secondColor);

        ctx.globalCompositeOperation = `overlay`;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

window.onload = () => {
    new GradientAnimation();
}