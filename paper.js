class Paper {
    constructor(x, y, radius) {
        var options ={
            isStatic: false,
            restitiution:0.3,
            friction:0.5,
            density:1.2
        }
      this.body = Matter.Bodies.circle(x, y, radius, options);
      
      World.add(world, this.body);
    }
    display() {
        var pos =this.body.position;
      circleMode(CENTER);
      fill("purple");
      circle(pos.x, pos.y, this.width, this.height);
    }
}
