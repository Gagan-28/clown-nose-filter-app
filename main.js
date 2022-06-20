noseX = 0;
noseY = 0;

function preload()
{
    clownNose = loadImage("dlpng_com_Clown_Nose_Png_(101+_images_in_Collection)_Page_2_6780768.png");
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw()
{
    image(video, 0, 0, 300, 300);
    image(clownNose, noseX-15, noseY-15, 30, 30);

}
function take_snapshot()
{
    save("filter_image.png");
}
function modelLoaded()
{
    console.log("Pose net is loaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX+", noseY = "+noseY);
    }
}