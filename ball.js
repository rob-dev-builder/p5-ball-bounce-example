function Ball() { // Constructor

    this.diameter = 100; // ball diameter
    this.radius = (this.diameter / 2) // radius of ball

    this.xSpeed = random(-2, 2); // Speed
    this.ySpeed = random(-2, 2); // Speed

    // select random location on screen to place ball
     this.x = random(this.diameter, (width - this.diameter));
     this.y = random(this.diameter, (height - this.diameter));

    // Set a random colour for ball
    this.colourR = random(0, 255);
    this.colourG = random(0, 255);
    this.colourB = random(0, 255);


this.changeColour = function() {
    this.colourR = random(0, 255);
    this.colourG = random(0, 255);
    this.colourB = random(0, 255);
}

this.clicked = function() {

    var d = dist(this.x, this.y, mouseX, mouseY);

    if (d < this.radius) { // return true if mouse cursor inside ball
        return true;
    } else if (d > this.radius) { // return false of mouse cursor is not inside ball
        return false;
    }
}

this.displayBall = function() {
    fill(this.colourR, this.colourB, this.colourG);
    ellipse(this.x, this.y, this.diameter, this.diameter);
}

this.moveBall = function() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
}

this.checkEdge = function() {

    // if ball edge hits left or right side of box
    if (((this.x + this.radius) > width) || ((this.x - this.radius) < 0)) {
        // invert the number for x direction. This sends ball in opisite direction.
        this.xSpeed = this.xSpeed * -1;
        this.changeColour();

    } else {}

    // if ball edge hits top or bottom of box
    if (((this.y + this.radius) > height) || ((this.y - this.radius) < 0)) {
        // invert the number for x direction. This sends ball in opisite direction.
        this.ySpeed = this.ySpeed * -1;
        this.changeColour();

    } else {}
}

}
