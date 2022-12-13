rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;


function preload() {
    ball_touch_paddle = loadSound("ball_touch_paddel.wav");
    missed = loadSound("missed.wav");
}

function setup() {
	canvas = createCanvas(700, 600);
    canvas.parent('canvas');


	video = createCapture(VIDEO);
	video.size(700, 600);
    video.hide();


	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Posenet is Initialized!');
  }
  
  function gotPoses(results)
  {
	if(results.length > 0)
	{
		console.log(results);
	rigthWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
    scoreRightWrist = results[0].pose.keypoints[0].score;
    console.log(scoreRightWrist);

	 }
  }

function startGame()
{
    
}

