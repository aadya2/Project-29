class Polygon{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
      //  var angle = this.body.angle;
        push();
        var pos = this.body.position;
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        fill("yellow");
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
      }
}