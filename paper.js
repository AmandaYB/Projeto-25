class Paper{
    constructor(x, y, r){
        var options={
            isStatic:false,
            restituition:0.3,
            friction:0,
            dessity:1.2
        }
        this.r = r;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body)
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        imageMode(CENTER)
        image(this.image, 0, 0, this.r, this.r)
        pop()
    }
}