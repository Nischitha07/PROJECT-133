status = " ";
objects = [ ];
function preload()
{
initial_img4 = loadImage('laptop2.jpg');
}
function setup()
{
canvas = createCanvas(400,300);
canvas.center();
object_detector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status_btn").innerHTML = "Status : Detecting Objects";
}
function draw()
{
image(initial_img4 ,0,0,400,300);
if (status != " ")
{ 
    for(var i = 0;i<objects.length;i++)
    {
    document.getElementById("status_btn").innerHTML = "Status : Objects Detected";
    fill('navy');
    noFill();
    stroke('navy');
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
    object_detector.detect(initial_img4 , gotResults);
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