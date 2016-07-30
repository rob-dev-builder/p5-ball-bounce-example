var balls = []

function mousePressed(){
  for (var i =0; i < balls.length; i++){

     if (balls[i].clicked()==true){
       console.log('true');
       balls.splice(i,1)
     }
     else if (balls[i].clicked()==false) {
       console.log('false');
     }
 }
}

function setup() {
  createCanvas(600,600);
   for (var i =0; i < 100; i++){
    balls[i] = new Ball();
   }
}

function draw() {
   background(10,20,30);
    for (var i =0; i < balls.length; i++){
     balls[i].display();
     balls[i].move();
     balls[i].checkEdge();
   }
}
