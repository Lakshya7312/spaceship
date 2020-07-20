class Player {
    constructor(x, y) {
        var options = {
            'friction': 0.1,
            'density': 0.3
        }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        thus.body.addAnimation(playerAnime);
        rect(pos.x, pos.y, this.width, this.height);

        if(keyCode === 32) {
            this.body.velocityY = -5;
        }
    }
}