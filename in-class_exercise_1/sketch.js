// declare variables here


function setup() {
  // put setup code here --> this runs once upon launch

  createCanvas(500, 500);
  background(0);

  // draw ellipse
 ellipse(100, 100, 80, 80);
}
let myVariable = 2;

function setup(){
  console.log("myVariable is " + myVariable);
  myVariable = 4;
  console.log("now myVariable is " + myVariable);
}

function draw() {
  // put drawing code here --> this loops every frame
}


// write custom functions here
