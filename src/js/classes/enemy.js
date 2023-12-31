// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- ENEMY CLASS --

class Enemy extends Sprite {

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // Initial values for X, Y and player radius size.
    constructor(x, y, radius) {

        // Get access to Sprite constructor and variables.
        super(x, y);

        this.radius = radius;
        this.speed = 1;

        // Pick random color.
        this.color = randomColor();
        // Variable to destroy enemy.
        this.destroy = false;
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // -- MOVE ENEMY --

    move(target) {

        // Move enemy towards player.
        let dirX = target.x - this.x;
        let dirY = target.y - this.y;

        var angle = Math.atan2(dirY, dirX);

        // Draw enemy.
        this.x += Math.cos(angle) * this.speed;
        this.y += Math.sin(angle) * this.speed;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        ctx.fill();
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- 
}

// ---- ---- ---- ---- ---- ---- ---- ---- 