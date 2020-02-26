let eyeSpacing = 35;
let eyeMotion = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(233, 207,236);
  
  eyeMotion = constrain(map(mouseX, 0, width, -5, 5), -5, 5);
  
  //noStroke();
  fill(100,100,60);
  console.log("x: " + mouseX + ", y: " + mouseY);

  //longhair
  fill(130,90,0);
  push();
    rect(125, 160, 150, 170);
  pop();
  
  //dress
  fill(149, 200, 216);
  triangle(202, 257, 104, 400, 297, 400);
  
  fill(223, 185, 151);
  ellipse(width/2, height/2, 160,200);
  
  //hair
  fill(130,90,0);
  push();
    translate(width/2-20,148);
    rotate(-PI/8);
    arc(0,0,155,90,PI,PI*.01); 
  pop(); 
  push();
    translate(width/2+58,155);
    rotate(PI*.4);
    arc(0,0,90,35,PI*1.02,15*PI/8); 
  pop();
  
  
  //eyes
  push();
    fill(255);
    translate(0,175);
    //eye on left
    push();
      translate(width/2-eyeSpacing, 0);
      ellipse(0, 0, 30, 20);
      push();
        translate(eyeMotion,0);
        fill(112,156,60);
        ellipse(0,0,15,15);
        push();
          fill(0);
          ellipse(0,0,5,5);
        pop();
      pop();
    pop();
  
    //eye on right
    push();
      translate(width/2+eyeSpacing, 0);
      ellipse(0, 0, 30, 20);
      push();
        translate(eyeMotion,0);
        fill(112,156,60);
        ellipse(0,0,15,15);
        push();
          fill(0);
          ellipse(0,0,5,5);
        pop();
      pop();
    pop();
  pop();
  
  
}