class Basket{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        imageMode(CENTER);
        image(this.image,120,0,this.width+220,this.height);
        pop();
    }
}