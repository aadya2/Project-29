class Box extends BaseClass {
    constructor(x, y){
      super(x,y,30, 40);
      this.width = 30;
      this.height = 40;
      //this.image = loadImage("wood1.png");
  
    }
    display(){
      super.display();
      var pos = this.body.position;
     // imageMode(CENTER);
      fill("pink")
      rect(pos.x, pos.y, this.width, this.height);
    }
  
  };
  