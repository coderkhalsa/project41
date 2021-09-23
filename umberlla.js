class Umberlla{
    constructor(x,y){
        var options = {
isStatic: true,
    }
    this.image = loadImage("Walking Frame/walking_1.png",);
    this.umberlla = Bodies.circle(x,y,50,options);
    this.radius = 50;
    World.add(world,this.umberlla)
    
    }

    display(){
        var pos = this.umberlla.position;
        imageMode( CENTER);
        image(this.image,pos.x,pos.y+70,300,300)
    }
}