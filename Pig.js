class Pig extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;//completely visible
  }

  display() {
    console.log(this.body.speed);
    if (this.body.speed < 3) {

      super.display();
    } else {
      World.remove(world, this.body);

      push();//only to add to pig
      this.visibility = this.visibility -2;
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }

  }

};