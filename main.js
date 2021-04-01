videoImage=""
status=""
sliderV= ""

function preload(){
    videoImage= createVideo('video.mp4')
    videoImage.hide()

}

function setup(){
canvas= createCanvas(300,300)
canvas.position(500,230)

}

function draw(){
    image(videoImage, 0 , 0 , 300, 300)
}

function start(){
objectDetector= ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML="Status: Detecting Objects."
}

function sliDer(){
    sliderV=document.getElementById("slider").value
    videoImage.volume(sliderV)
}

function modelLoaded(){
console.log("Model Loaded!!")
status= "true"
videoImage.loop()
videoImage.speed(1)
videoImage.volume(0)
}



