class Room {
    constructor(wall, floor) {
      this.v = p5.Vector.random3D();
      this.walltexture = wall;
      this.floorTexture = floor;
    }
  
    show() {
      push();
      fill(255,255,255);
      texture(this.walltexture);
      box(1000);
      
      pop();
      //ambientLight(50);
      // ambientLight(100);
      // let dirX = (mouseX / width - 0.5) * 2;
      // let dirY = (mouseY / height - 0.5) * 2;
      // directionalLight(250, 250, 250, dirX, dirY, -1);
      translate(0,  0, 0);
      fill(255);
      this.putLightBulb()
    }

    putLightBulb(w) {
      let locX = width / 2;
      let locY = height / 2;
      if (mouseIsPressed) {
          w = true
      } else {
        w = false
      }
      stroke(255);
      sphere(20)
      fill(0)
      if (w==true) {
        pointLight(250, 250, 250, locX, locY, 50);
        sphere(20);
        fill(255)
      }
    }
  }
  