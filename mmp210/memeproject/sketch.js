var song;
let eyeSpacing = 35;
let eyeMotion = 0;

function preload(){
  song = loadSound("friend.mp3");
}

function setup() {
  createCanvas(600, 400);
  
  song.play();
}

function draw() {
  background(220);
  
  background(85, 107,47);
 
  eyeMotion = constrain(map(mouseX, 0, width, -5, 5), -5, 5);
 
  //text
  fill(255,255,255);
  textSize(25)
  textFont("Times New Roman")
  text("'When Sully comes in the room to you ", width/8, height/8);
  text("BLASTING to a Toy Story song'", width/5, height/5);
  
  //noStroke();
  fill(100,100,60);
  console.log("x: " + mouseX + ", y: " + mouseY);
 
  //rightarm
   fill(159, 218, 64);
  rect(374, 231, 10, 115);
 
   //righthand
   fill(159, 218, 64);
  ellipse(378, 342, 20, 20);
 
  //leftarm
   fill(159, 218, 64);
  rect(220, 246, 10, 100);
 
  //microphone
   fill(10, 30, 20);
  rect(215, 310, 18, 55);
   fill(169, 169, 169);
  ellipse(224, 367, 30, 30);
 
  //rightleg
   fill(159, 218, 64);
  rect(318, 285, 10, 400);
 
  //leftleg
   fill(159, 218, 64);
  rect(277, 290, 10, 400);
 
  //head
   fill(159, 218, 64);
  ellipse(width/2, height/2, 190,200);
 
  //eye
  push();
    fill(255);
    translate(35,175);
    //middle eye
    push();
      translate(width/2-eyeSpacing, 0);
      ellipse(0, 0, 65, 70);
      push();
        translate(eyeMotion,0);
        fill(112,156,60);
        ellipse(0,0,30,30);
        push();
          fill(0);
          ellipse(0,0,15,15);
        pop();
      pop();
    pop();
  pop();
 
  //mouth
  line(285, 247, 317, 246);
 
 
}