class Ball{
    constructor(x,y,r){
        var options={
            'friction':0.8,
            'density':1,
            'restitution':1.2
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.image = loadImage("ball.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}