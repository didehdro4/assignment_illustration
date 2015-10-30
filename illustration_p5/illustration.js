// illustration.js
var backgroundImg;
var playerImg;
var playerImage;
var ballImg;
var cloudImg;
var secondCloudImg;
var crowdImg;
var crowdHandsImg;
var goalImg;
var bluefwImg;
var greenfwImg;
var pinkfwImg;

var score = 0; // main score
var lastScore = 0; // used for the fireworks
var kicked = 0;
var animationTimer = 0;

var cloudX = -100;
var secondCloudX = 600;

function preload() {
	backgroundImg = loadImage("images/background.png");
	playerImg = loadImage("images/Player(before).png");
	playerImage = loadImage("images/Player(after).png");
	ballImg = loadImage("images/ball.png");
	cloudImg = loadImage("images/cloud.png");
	secondCloudImg = loadImage("images/cloud2.png");
	crowdImg = loadImage("images/crowd.png");
	crowdHandsImg = loadImage("images/crowd cheering.png");
	goalImg = loadImage("images/goal.png");
	bluefwImg = loadImage("images/bluefw.png");
	greenfwImg = loadImage("images/greenfw.png");
	pinkfwImg = loadImage("images/pinkfw.png");
 }

function setup() {
	createCanvas(800, 600);
}

function draw() {
	image(backgroundImg, 0, 0);

	// draw goal
	image(goalImg, 555, 320);

	// move the clouds
	cloudX -= 0.6;
	if (cloudX < -200) {
		  cloudX = 800;
	}
	image(cloudImg, cloudX, 60);

	secondCloudX -= 0.4;
	if (secondCloudX < -200) {
		secondCloudX = 800;
	}
	image(secondCloudImg, secondCloudX, 35);


	// draw Player
	if (mouseX < 100) {
		image(playerImg, mouseX-75, 370)
	}

	if (mouseIsPressed) {
		if (mouseX > 100) {
			image(playerImage, 45, 355)
		}
	}


	// draw ball
	if (mouseX > 105) {
		if (mouseIsPressed) {
			// if the ball near the Player
			if (mouseX < 200) {
				// consider the ball kicked
				kicked = 1;
			}
			if (mouseX >= 105) {
				var ballX = mouseX
				var ballY = mouseY
			}
			if (mouseX > 540 && mouseX < 700 &&
				mouseY > 330 && mouseY < 480){
				var ballX = 665
				var ballY = 430
			}
		}else {
		var ballX=105
		var ballY=475}
			image(ballImg, ballX, ballY)
	}
		if (mouseX < 105){
		var ballX=105
		var ballY=475
	}
	image(ballImg, ballX, ballY)

	// draw crowd
	image(crowdImg, 10, 217);

	// score
	if (ballX > 540 && ballX < 700 &&
		ballY > 330 && ballY < 480)	{


		// if the ball hits the net
		if (kicked == 1) {
			// count as a score
			score++;
			// the "kicked" variable ensures that the score doesn't
			//get counted more than once
		}

		// set to 0 so that the score won't get counted again
		kicked = 0;
	}

	// draw fireworks
	// see if the recent score changed from the previous one
	if (lastScore < score) {
		if (ballX > 540 && ballX < 700 && ballY > 330 && ballY < 480)	{
			// this is an animation with a timer
			if (animationTimer % 40 < 10) {

				image(bluefwImg, 80, 88)
			} else if (animationTimer % 40 < 20) {

				image(bluefwImg, 80, 88)
				image(greenfwImg, 330, 98)
			} else if (animationTimer % 40 < 30) {

				image(bluefwImg, 80, 88)
				image(greenfwImg, 330, 98)
				image(pinkfwImg, 620, 76)
			}

			// animate crowd
			if (animationTimer % 40 > 0 && animationTimer % 40 < 30) {
				image(crowdHandsImg, 5.5, 250);
			} else {
				image(crowdImg, 10, 217);
			}

			animationTimer ++;

			// if the animation reaches its end
			if (animationTimer > 300) {
				// set the timer to 0 so it can continue the next time
				animationTimer = 0;

				//set the last score as the current score
				lastScore = score;
			}

			if (!mouseIsPressed) {
				animationTimer = 0;
				lastScore = score;
			}
		}
	}

	// draw score
	textSize(32);
	text(score, 10, 30);

	console.log(animationTimer)


}
