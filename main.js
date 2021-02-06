song=""
leftWristX=0
leftWristY=0
rightWristY=0
rightWristX=0

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas= createCanvas(500,400)
    canvas.center()

    video= createCapture(VIDEO)
    video.hide()

    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)

}

function modelLoaded(){
    console.log("Model Loaded!!!!")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x
        leftWristY=results[0].pose.leftWrist.y
        console.log("Left WristX=" + leftWristX + "Left WristY=" + leftWristY)

        rightWristX=results[0].pose.rightWrist.x
        rightWristY=results[0].pose.rightWrist.y
        console.log("Right WristX=" + rightWristX + "Right WristY=" + rightWristY)

    }
}

function draw(){
    image(video,0,0,500,400)
}

function playButton(){
    song.play()
    song.setVolume(0.4)
    song.rate(2.5)
 }

 function stopButton(){
     song.stop()
 }
