function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video =  createCapture(VIDEO);
    video.size(300, 300);
}


function check(){
    classifier.classify( gotResults);
  
  
  function gotResults(error, results){
    if (error) {
      console.error(error);
    } else 
  
      document.getElementById("o").innerHTML = 'Object - '+ results[0].label;
      document.getElementById("a").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
}}

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
    check()
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/auTNByZXs/model.json', modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
  


 