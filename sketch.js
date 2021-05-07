//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;
var ampm;
var datetime;


async function gettime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    datetime = responseJSON.datetime;
    console.log();    
    hour = datetime.slice(11,13);
    if(hour>=04 && hour<=06){
        bg = "sunrise3.png"
    }
    else{
        bg = "sunset11.png"
    }
    backgroundImg = loadImage(bg)
   
}



function preload() {
    // create getBackgroundImg( ) here\
    gettime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    //engine = Engine.create();
    //world = engine.world;

}

function draw(){

  // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }

   // Engine.update(engine);

   //  write code to display time in correct format here
    if(hour<12 && hour>0){
        ampm = "AM"
    }
    else{
        ampm = "PM"
    };
    textSize(35);
    text("TIME : " + hour + ampm,50,50);
}
