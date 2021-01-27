function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PXt8NGE5X/model.json',model_loaded);
}

function model_loaded(){
    console.log("model_loaded");
}


function draw()
{
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
    
    }

    function gotResult(error, results){
        if(error)
        {
            console.error(error);
        }
        else{
            document.getElementById("result_object_name").innerHTML=results[0].label;
            document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
        }
    }