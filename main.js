song=""
scoreLeftWrist=0
scoreRightWrist=0
leftWristX=0
leftWristY=0
rightWristY=0
rightWristX=0

function preload(){
    song = loadSound("EGO.mp3");
}

function setup(){
    canvas= createCanvas(600,500)
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

        scoreLeftWrist=results[0].pose.keypoints[9].score
        console.log('scoreLeftWrist=' + scoreLeftWrist) 

        scoreRightWrist=results[0].pose.keypoints[10].score
        console.log('scoreRightWrist=' + scoreRightWrist) 

        leftWristX=results[0].pose.leftWrist.x
        leftWristY=results[0].pose.leftWrist.y
        console.log("Left WristX=" + leftWristX + "Left WristY=" + leftWristY)

        rightWristX=results[0].pose.rightWrist.x
        rightWristY=results[0].pose.rightWrist.y
        console.log("Right WristX=" + rightWristX + "Right WristY=" + rightWristY)

    }
}

function draw(){
    image(video,0,0,600,500);
    fill('#fa0000');
    stroke('#fa0000');
    if(scoreRightWrist > 0.2 ){
        circle(rightWristX,rightWristY,20)
        if(rightWristY > 0 && rightWristY <= 100){
            document.getElementById('speed').innerHTML="Speed= 0.5x"
            song.rate(0.5)
        }
        else if(rightWristY > 100 && rightWristY <= 200){
            document.getElementById('speed').innerHTML="Speed= 1x"
            song.rate(1)
        }
        else if(rightWristY > 200 && rightWristY <= 300){
            document.getElementById('speed').innerHTML="Speed= 1.5x"
            song.rate(1.5)
        }
        else if(rightWristY > 300 && rightWristY <= 400){
            document.getElementById('speed').innerHTML="Speed= 2x"
            song.rate(2)
        }
        else if(rightWristY > 400 && rightWristY <= 500){
            document.getElementById('speed').innerHTML="Speed= 2.5x"
            song.rate(2.5)
        }
    }
    

    if(scoreLeftWrist > 0.2){
    circle(leftWristX,leftWristY,20);
    number= Number(leftWristY);
    number= toFixed(0);
    volume= number/500;

    document.getElementById("volumeh4").innerHTML='Volume:' + volume;
    song.setVolume(volume);
    console.log('volume=' + volume)
    }
}

function playButton(){
    song.play()
    song.setVolume(0.4)
    song.rate(1)
 }

 function stopButton(){
     song.stop()
 }
