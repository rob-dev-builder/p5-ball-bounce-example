var balls = [];

function mousePressed() {
    for (var i = 0; i < balls.length; i++) {
        if (balls[i].clicked() == true) {
            //balls.splice(i, 1)
            balls[i].xSpeed = balls[i].xSpeed * -1;

        } else if (balls[i].clicked() == false) {

        }
    }
}

function collision_Dectection() {
    for (var i = 0; i < balls.length; i++) {
        for (var j = 0; j < balls.length; j++) {

            if (balls[i] == balls[j]) {}
            // if comparing a ball with itself, do nothing

            else if (balls[i] != balls[j]) {
                var d = dist(balls[i].x, balls[i].y, balls[j].x, balls[j].y);

                line(balls[i].x, balls[i].y, balls[j].x, balls[j].y);

                var ballradius = balls[i].radius + balls[j].radius;
                var trueDist = d - ballradius;
                console.log("distance from edges = " + trueDist);

                if (trueDist <= 2)
                {
                   console.log('Collision detected')
                    balls[i].xSpeed = balls[i].xSpeed * -1;
                    balls[i].ySpeed = balls[i].ySpeed * -1;

                    balls[j].xSpeed = balls[j].xSpeed * -1;
                    balls[j].ySpeed = balls[j].ySpeed * -1;

                  //  console.log(balls[i].xSpeed)
                  //  console.log(balls[i].ySpeed)

                  //  console.log(balls[j].xSpeed)
                  //  console.log(balls[j].ySpeed)
                }
                else if(trueDist >= 3)
                {

                }

            }

        }

    }

}

function setup() {
  //  frameRate(0.9);
    createCanvas(400, 400);
    for (var i = 0; i < 3; i++) {
        balls[i] = new Ball();
    }
}

function draw() {
    background(255, 255, 30);
    for (var i = 0; i < balls.length; i++) {
        balls[i].displayBall();
        balls[i].moveBall();
        balls[i].checkEdge();
        collision_Dectection();
    }
}
