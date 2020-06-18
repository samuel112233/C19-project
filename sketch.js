const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform;

var player;
var sling;
var box;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,382,1200,30);
    ground2 = new Ground(1000,180,300,30);
    
    player = new Player(230,109,20,30);
    sling = new Chain(player.body,{x:200,y:100})
    //Ground1 first layer of boxes
    box1 = new Box(900,348,20,20);
    box2 = new Box(901,348,20,20);
    box3 = new Box(902,348,20,20);
    box4 = new Box(903,348,20,20);
    box5 = new Box(904,348,20,20);
    box6 = new Box(905,348,20,20);
    box7 = new Box(906,348,20,20);
    box8 = new Box(907,348,20,20);
    box9 = new Box(908,348,20,20);
    //Ground1 second layer of boxes
    box10 = new Box(901,340,20,20);
    box11 = new Box(902,340,20,20);
    box12 = new Box(903,340,20,20);
    box13 = new Box(904,340,20,20);
    box14 = new Box(905,340,20,20);
    box15 = new Box(906,340,20,20);
    box16 = new Box(907,340,20,20);
    //Ground1 third layer of boxes
    box17 = new Box(902,332,20,20);
    box18 = new Box(903,332,20,20);
    box19 = new Box(904,332,20,20);
    box20 = new Box(905,332,20,20);
    box21 = new Box(906,332,20,20);
    //Ground1 third layer of boxes
    box22 = new Box(903,338,20,20);
    box23 = new Box(904,338,20,20);
    box24 = new Box(905,338,20,20);
    //Ground1 fifth layer of boxes
    box25 = new Box(904,338,20,20);



    //Ground2 first layer of boxes
    box26 = new Box(1010,150,20,20);
    box27 = new Box(1002,150,20,20);
    box28 = new Box(1003,150,20,20);
    box29 = new Box(1004,150,20,20);
    box30 = new Box(1005,150,20,20);
    //Ground2 second layer of boxes
    box31 = new Box(1002,158,20,20);
    box32 = new Box(1003,158,20,20);
    box33 = new Box(1004,158,20,20);
    //Ground2 third layer of boxes
    box34 = new Box(1003,166,20,20);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    

    player.display();

     ground.display();
     ground2.display();
     sling.display();
     sling.color="brown"
    //Ground1 first layer of boxes
     box1.display();
     box1.color="red"
     box2.display();
     box2.color="yellow"
     box3.display();
     box3.color="green"
     box4.display();
     box4.color="blue"
     box5.display();
     box5.color="pink"
     box6.display();
     box6.color="orange"
     box7.display();
     box7.color="purple"
     box8.display();
     box8.color="red"
     box9.display();
     box9.color="yellow"
    //Ground1 second layer of boxes
     box10.display();
     box10.color="green"
     box11.display();
     box11.color="purple"
     box12.display();
     box12.color="red"
     box13.display();
     box13.color="yellow"
     box14.display();
     box14.color="pink"
     box15.display();
     box15.color="blue"
     box16.display();
     box16.color="orange"
    //Ground1 third layer of boxes
     box17.display();
     box17.color="blue"
     box18.display();
     box18.color="pink"
     box19.display();
     box19.color="red"
     box20.display();
     box20.color="green"
     box21.display();
     box21.color="orange"
     //Ground1 fourth layer of boxes
     box22.display();
     box22.color="orange"
     box23.display();
     box23.color="green"
     box24.display();
     box24.color="yellow"
     //Ground1 fifth layer of boxes
     box25.display();
     box25.color="red"


     //Ground2 first layer of boxes
     box26.display();
     box26.color="orange"
     box27.display();
     box27.color="red"
     box28.display();
     box28.color="blue"
     box29.display();
     box29.color="yellow"
     box30.display();
     box30.color="green"
    //Ground2 second layer of boxes
     box31.display();
     box31.color="pink"
     box32.display();
     box32.color="purple"
     box33.display();
     box33.color="red"
     //Ground2 third layer of boxes
     box34.display();
     box34.color="yellow"
     
    }
function mouseDragged(){
    Matter.Body.setPosition(player.body,{x:mouseX,y:mouseY})
}