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
	if (mouseIsPressed)
	{
		if (mouseX < 100)
			image(playerImg, mouseX-80, 370)
		if (mouseX > 100)
			image(playerImage, 30, 355)
		}

	// draw ball
	if (mouseX > 105)
	{if (mouseIsPressed) {
		if (mouseX >= 105){
			var ballX = mouseX
			var ballY = mouseY
		}
			if (mouseX >= 665){
				var ballX = 665
				var ballY = 430
			}
		}
		else{
		var ballX=105
		var ballY=475}
			image(ballImg, ballX, ballY)
	}
		if (mouseX < 105){
		var ballX=105
		var ballY=475}
			image(ballImg, ballX, ballY)


	// draw crowd
	image(crowdImg, 10, 217);
	if (ballX > 640) {
		image(crowdHandsImg, 5.5, 250)
	}

	// draw fireworks
	if (ballX > 640)	{
		image(bluefwImg, 80, 88)
		image(greenfwImg, 330, 98)
		image(pinkfwImg, 620, 76)
	}


}
