// declare variables here


function setup() {
  // put setup code here --> this runs once upon launch

  createCanvas(500, 500);
  background(0);


}

var x=0
var y=200
var diameter =50
function draw() {
  // // draw ellipse
 ellipse(x, y, diameter, diameter);
 x=x+1;

}


// write custom functions here
