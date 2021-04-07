class Bob{
    constructor(x, y, r) {
        var options = {
            'friction':0,
            'density':0.5,
            'isStatic':false,
            'restitution':1
        }
        this.x=x;
        this.y=y;       
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        World.add(world, this.body);
      }
      
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER)
        ellipse(0, 0, this.r, this.r);
        stroke("white")
        fill("white");
        pop();
      }
}