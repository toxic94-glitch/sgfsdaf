class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,390,9999,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill("Black");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,9999,20);
    }
}