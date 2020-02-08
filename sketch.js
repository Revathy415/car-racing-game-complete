var canvas,backgroundImg;
var gameState=0;
var playerCount;
var distance=0;
var allPlayers;

var database;
var form,player,game;
var cars,car1,car2,car3,car4;
var track,car1_img,car2_img,car3_img,car4_img;
function preload()
{
    //to upload image of the car, track,ground.
    track=loadImage("images/track.jpg");
    car1_img=loadImage("images/car1.png");
    car2_img=loadImage("images/car2.png");
    car3_img=loadImage("images/car3.png");
    car4_img=loadImage("images/car4.png");
    ground=loadImage("images/ground.png");
   bg=loadImage("images/background_for_form.gif");
    


}
function setup(){
    canvas=createCanvas(displayWidth-200,displayHeight-200);
    database=firebase.database();
game=new Game();
game.getState();
game.start();
}
function draw()
{
if(playerCount===4)
{
    game.update(1);

}
if (gameState===1)
{
    clear ();
    game.play();
}
//to display the gamestate on the database
if(gameState===2)
{
    //the game end
    game.end();
}
}
