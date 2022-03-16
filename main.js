function startClassification() 
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classfier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PR9Uqd10k/model.json', modelReady);
}

function modelReady() {
    classfier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('dog') 
    img1 = document.getElementById('cow')
    img2 = document.getElementById('tiger')
    img3 = document.getElementById('cat')

    if (results[0].label == "cat") {
      img.src = 'cat-animation.gif';
      img1.src = 'Dog.png';
      img2.src = 'Cow.png';
      img3.src = 'Tiger.png';
    } else if (results[0].label == "dog") {
      img.src = 'Cat.png';
      img1.src = 'dog-animation.gif';
      img2.src = 'Tiger.png';
      img3.src = 'Cow.png';
    } else if (results[0].label == "tiger") {
      img.src = 'Dog.png';
      img1.src = 'Cat.png';
      img2.src = 'tiger-animation.gif';
      img3.src = 'Cow.png';
    }else{
      img.src = 'Dog.png';
      img1.src = 'Cat.png';
      img2.src = 'Tiger.png';
      img3.src = 'cow-animation.gif';
    }
  }
}