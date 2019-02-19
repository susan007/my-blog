<template>
    <div>
        <h5>使用键盘上下左右键控制圈圈移动，快来试试吧！</h5>
        <canvas></canvas>
    </div>
</template>

<script>
    export default {
        name: "bool-game",
        mounted() {
            this.play()
        },
        methods: {
            play() {
                const BALLS_COUNT = 50;
                const BALL_SIZE_MIN = 10;
                const BALL_SIZE_MAX = 20;
                const BALL_SPEED_MAX = 4;
                // 球和恶魔圈
                let balls = [];
                let count = 0;
                // 设定画布和初始数据
                let canvas = document.querySelector('canvas');
                let ctx = canvas.getContext('2d');
                // 获取屏幕宽高
                let width = canvas.width = window.innerWidth/2.5;
                let height = canvas.height = window.innerHeight/2.5;

                // 形状父类
                class Shape {
                    // 构造函数
                    constructor(x, y, velX, velY, exists) {
                        this.x = x;
                        this.y = y;
                        this.velX = velX;
                        this.velY = velY;
                        this.exists = exists;
                    }
                }

                // 形状子类 球
                class Ball extends Shape {
                    // 构造函数
                    constructor(x, y, velX, velY, color, size, exists) {
                        super(x, y, velX, velY, exists);
                        this.color = color;
                        this.size = size;
                    }

                    draw() {
                        // 画实心球（参考canvas）
                        ctx.beginPath();
                        ctx.fillStyle = this.color;
                        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                        ctx.fill();
                    }

                    update() {
                        // 变更球的坐标
                        // 当实心球位置超出window的宽，则减少其x坐标的值
                        if ((this.x + this.size) >= width) {
                            this.velX = -(this.velX);
                        }

                        if ((this.x - this.size) <= 0) {
                            this.velX = -(this.velX);
                        }
                        // 当实心球y增加到window最底部，则执行减少其y坐标
                        if ((this.y + this.size) >= height) {
                            this.velY = -(this.velY);
                        }

                        if ((this.y - this.size) <= 0) {
                            this.velY = -(this.velY);
                        }

                        this.x += this.velX;
                        this.y += this.velY;
                    }

                    collisionDetect() {
                        // 如果两个球相遇 就更改实心球的颜色（或许我的理解有误，各位看官发表你萌的看法）
                        for (let j = 0; j < balls.length; j++) {
                            if (this !== balls[j]) {
                                let dx = this.x - balls[j].x;
                                let dy = this.y - balls[j].y;
                                let distance = Math.sqrt(dx * dx + dy * dy);
                                if (distance < this.size + balls[j].size && balls[j].exists) {
                                    balls[j].color = this.color = randomColor();
                                }
                            }
                        }
                    }
                }

                // 形状子类 恶魔圈
                class EvilCircle extends Shape {
                    constructor(x, y, exists) {
                        super(x, y, exists);
                        this.velX = BALL_SPEED_MAX;
                        this.velY = BALL_SPEED_MAX;
                        this.color = "white";
                        this.size = 20;
                        this.setControls();
                    }

                    draw() {
                        ctx.beginPath();
                        ctx.strokeStyle = this.color;
                        ctx.lineWidth = 4;
                        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                        ctx.stroke();
                    }

                    checkBounds() {
                        if ((this.x + this.size) >= width) {
                            this.x -= this.size;
                        }

                        if ((this.x - this.size) <= 0) {
                            this.x += this.size;
                        }

                        if ((this.y + this.size) >= height) {
                            this.y -= this.size;
                        }

                        if ((this.y - this.size) <= 0) {
                            this.y += this.size;
                        }
                    }

                    setControls() {
                        // 设置键盘控制事件 当按下某个键则改变恶魔圈的坐标
                        window.onkeydown = (e) => {
                            switch (e.key) {
                                case 'a':
                                case 'A':
                                case 'ArrowLeft':
                                    this.x -= this.velX;
                                    break;
                                case 'd':
                                case 'D':
                                case 'ArrowRight':
                                    this.x += this.velX;
                                    break;
                                case 'w':
                                case 'W':
                                case 'ArrowUp':
                                    this.y -= this.velY;
                                    break;
                                case 's':
                                case 'S':
                                case 'ArrowDown':
                                    this.y += this.velY;
                                    break;
                            }
                        };
                    }

                    collisionDetect() {
                        // 隐藏实心球（将exists设置为false） 其实这里也可以将balls[j].size置为0达到目的
                        for (let j = 0; j < balls.length; j++) {
                            if (balls[j].exists) {
                                let dx = this.x - balls[j].x;
                                let dy = this.y - balls[j].y;
                                let distance = Math.sqrt(dx * dx + dy * dy);
                                if (distance < this.size + balls[j].size) {
                                    balls[j].exists = false;
                                    count--;
                                }
                            }
                        }
                    }
                }

                // 实例化一个恶魔圈
                let evilBall = new EvilCircle(
                    width / 2,
                    height / 2,
                    true
                );

                // 生成随机数的函数
                function random(min, max) {
                    return Math.floor(Math.random() * (max - min)) + min;
                }

                // 生成随机颜色的函数
                function randomColor() {
                    return 'rgb(' +
                        random(0, 255) + ', ' +
                        random(0, 255) + ', ' +
                        random(0, 255) + ')';
                }

                // 定义一个循环来不停地播放
                function loop() {
                    // 绘制整体画布
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
                    ctx.fillRect(0, 0, width, height);
                    // 实例化每一个球
                    while (balls.length < BALLS_COUNT) {
                        let size = random(BALL_SIZE_MIN, BALL_SIZE_MAX);
                        let ball = new Ball(
                            // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
                            random(0 + size, width - size),
                            random(0 + size, height - size),
                            random(-BALL_SPEED_MAX, BALL_SPEED_MAX),
                            random(-BALL_SPEED_MAX, BALL_SPEED_MAX),
                            randomColor(),
                            size,
                            true
                        );
                        balls.push(ball);
                        count++;
                    }
                    // 绘制每一个球
                    for (let i = 0; i < balls.length; i++) {
                        if (balls[i].exists) {
                            balls[i].draw();
                            balls[i].update();
                            balls[i].collisionDetect();
                        }
                    }
                    // 绘制恶魔圈
                    evilBall.draw();
                    evilBall.checkBounds();
                    evilBall.collisionDetect();
                    evilBall.setControls()
                    requestAnimationFrame(loop);
                }

                // 执行动画
                loop();
            }
        }
    }
</script>

<style scoped>

</style>
