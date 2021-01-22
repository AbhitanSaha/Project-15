Webcam.set({
    width:500,
    height:300,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured-img' src='"+data_uri+"'/>"
    });
}
console.log('ml5.version',ml5.version);
classifier= ml5.imageClassier('https://teachablemachine.withgoogle.com/models/OR1LHUS0G/model.json',modelLoaded);