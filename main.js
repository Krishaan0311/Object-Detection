img = "";
status = "";
objects = [];

function preload() {
  img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoaded() {
  console.log("Model loaded");
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if(error) {
    console.log(error);
  }
  console.log(results);
  object = results;
}

function draw() {
    image(img, 0, 0, 600, 500);
    if(status != "") {
      for(i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status: Object detected";

        fill("#ff0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + "  " + percent + "%", objects[i].x +15, objects[i].y +15);
        noFill();
        stroke("#ff0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
    fill("#32ad3a");
    text("Dog", 45, 70);
    noFill();
    stroke("#32ad3a");
    rect(30, 50, 300, 400);
    fill("#ff0000");
    text("Cat", 320, 100);
    noFill();
    stroke("#ff0000");
    rect(290, 80, 300, 300);
    fill('#3471eb');
    text("Bowl", 250, 380);
    noFill();
    stroke('#3471eb');
    rect(230, 350, 150, 135);
}