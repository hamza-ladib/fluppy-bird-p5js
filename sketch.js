let player;
let pipes=[];
let y=20;
let w=window.innerWidth;
let h=500;
let x=w;
let marg=60;
let test=marg;
let gap;
let health=300;
let score=0;
function setup() {
  createCanvas(w,h+80);

   player=new Player(w/2,y,30);
   pipes.push(new Pipe(200,x));
  
}
function draw() {
  background(220);
   /*******************/
   stroke ("black");
   strokeWeight (4);
   line(0,h+2,w,h+2)
   noStroke();
   
   //rect()
   /**************** */
  player.show();
  player.update();
  for(let i=0;i<pipes.length;i++){
    pipes[i].show();
    pipes[i].update();
    if(player.lose(pipes[i])) health-=5;
  }
  /****** delete a pipe if its out of the screen and adding another one**/

for(let i=pipes.length-1;i>=0;i--){
  if(pipes[i].x<-pipes[i].w){
  pipes.splice(i,1);
  }
}
  if(frameCount%20==0){
    gap=random(-20,20)+pipes[pipes.length-1].topHeight;
  pipes.push(new Pipe(gap,w));
  score++;
  }
  textSize(25);
  fill("tomato");
  rect(50,h+48,health,10);
  fill("black");
  text("hp:",50,h+44);
  fill("black");
  text("score: "+score,w/2+50,h+44);
  if(health==0){
    alert('you lose');
    noLoop();
  }
}
function keyPressed() {
 if(keyCode==32){
   player.vilocity=0;
   player.y-=10;     
 }

}