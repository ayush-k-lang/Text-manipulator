var leftWristX=0;
var leftWristY=0;
var rightWristX=0;
var rightWristY=0;

function preload() {

}

function setup() {
canvas=createCanvas(600,600);
canvas.position(1200,300);
video=createCapture(VIDEO);
video.position(200,300);
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotPoses);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mJFyhqp9n/model.json",modelloaded);
}

function draw() {
    classifier.classify(video,gotResults);
    textSize(location);
    fill("yellow");
    text("Ayush",300,300);
}

function modelloaded(){
    console.log("Model is Loaded");
}

function gotResults(error,results){
    if(error){
console.error(error);
    }
    else{
console.log(results);
    }
}

function gotPoses(result){
        console.log(result);
        if (results.length>0){
            console.log(results);
            leftWristX=results[0].pose.leftWrist.x;
            leftWristY=results[0].pose.leftWrist.y;
            rightWristX=results[0].pose.rightWrist.x;
            rightWristY=results[0].pose.rightWrist.y;
            console.log("Left Wrist"+ leftWristX+leftWristY);
            console.log("Right Wrist"+ rightWristX+rightWristY);
            }

            leftWrist=leftWristX-leftWristY;
            rightWrist=rightWristX-rightWristY;
            location=leftWrist-rightWrist;
        }

