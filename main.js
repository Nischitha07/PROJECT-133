status = " ";
objects = [ ];
function preload()
{
initial_img6 = loadImage('bed.jpg');
}
function setup()
{
canvas = createCanvas(450,300);
canvas.center();
object_detector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status_btn").innerHTML = "Status : Detecting Objects";
}
function draw()
{
image(initial_img6 ,0,0,450,300);
if (status != " ")
{ 
    for(var i = 0;i<objects.length;i++)
    {
    document.getElementById("status_btn").innerHTML = "Status : Objects Detected";
    fill("purple");
    noFill();
    stroke('purple');
    accuracy = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + accuracy + " % " , objects[i].x,objects[i].y);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
}
function modelLoaded()
{
    console.log("coco intialized");
    status = true;
    object_detector.detect(initial_img6 , gotResults);
}
function gotResults(error , results)
{ if(error)
    {
    console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
function btn_back()
{
    window.location = "index.html";
}