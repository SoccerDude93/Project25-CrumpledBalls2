class Dustbin {
    constructor(x,y,width,height){
        var options ={
            isStatic:false
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

        lCrateSprite=createSprite(300, 610, 20, 100);
	lCrateSprite.shapeColor = "red";

	mCrateSprite=createSprite(410, 650, 200, 20);
	mCrateSprite.shapeColor = "red";

	rCrateSprite=createSprite(500, 610, 20, 100);
	rCrateSprite.shapeColor = "red";
    }
    display() {
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
}
function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85, y:-85});
    }
}