let player;
let pipes=[];
let y=20;
let w=window.innerWidth;
let h=500;
let x=w/2;
let marg=60;
let test=marg;
let gap;
function setup() {
  createCanvas(w,h);
   player=new Player(20,y,30);
   pipes.push(new Pipe(200,x,w));
   for(let i=0;i<10;i++){
     gap=random([-4,4])+pipes[pipes.length-1].topHeight;
    pipes.push(new Pipe(gap,x+test,w));
  test+=marg;
   }
}
function draw() {
  background(220);
  player.show();
  player.update();
  for(let i=0;i<pipes.length;i++){
    pipes[i].show();
    pipes[i].update();
  }

}
function keyPressed() {
 if(keyCode==32){
   player.vilocity=0;
   player.y-=10;     
 }
}