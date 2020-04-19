
// Since PeasyCam is only for Java, this instead uses p5.EasyCam,
// which is based on PeasyCam but is made for p5.js.
// It can be found here: https://github.com/freshfork/p5.EasyCam

// A significant difference from the Processing version is that p5.js
// does not have the PShape object, so we cannot use that to store the
// geometry along with its texture and so on. Instead, we have to apply
// the texture image every time through draw(), right before drawing
// the sphere that the texture should be applied to.
//
// Luckily, this is not difficult - we simply have to make the Planet
// store the chosen texture image instead of the shape that uses it,
// and instead of replacing the call to sphere() with a call to shape()
// we add a call to texture() right before the sphere() call.

let cam
let room
let wallTexture
let floorTexture
function preload() {
  wallTexture = loadImage('data/wall.jpg');
  floorTexture = loadImage('data/floor.png')
}

function setup() {
  let canvas = createCanvas(600, 600, WEBGL);
  canvas.elt.oncontextmenu = () => false;

  cam = createEasyCam({ distance: 500 });
  room = new Room(wallTexture, floorTexture);
}

function draw() {
  background('#000');
  noStroke();
  room.show();
}
