function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1EAHwy1dC/model.json", modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_red = Math.floor(Math.random()*255)+1;
        random_number_blue = Math.floor(Math.random()*255)+1;
        random_number_green = Math.floor(Math.random()*255)+1;
        document.getElementById("Hearing").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("Accuracy").innerHTML = "Accuracy - " + results[0].confidence;
        document.getElementById("Hearing").style.color = "rgb("+random_number_red+","+random_number_blue+","+random_number_green+")";
        document.getElementById("Accuracy").style.color = "rgb("+random_number_red+","+random_number_blue+","+random_number_green+")";
        img1 = document.getElementById("img1");
        img2 = document.getElementById("img2");
        img3 = document.getElementById("img3");
        img4 = document.getElementById("img4");
        if(results[0].label == "Clap"){
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(results[0].label == "Stomp"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
        else if(results[0].label == "Scream"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(results[0].label == "Wee"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        }
    }
}
