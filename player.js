function Player(x,y,w){
  
    this.x=x;
    this.y=y;
    this.w=w;
    this.speed=0.05; 
    this.vilocity=0;
    let img = loadImage("./images/bird.png",this.x,this.y);
    console.log(img,img._pixelsState);
    this.show=()=>{
   image(img,this.x, this.y,this.w,this.w);
    }
    this.update=()=>{
      this.vilocity+=this.speed;
      this.y+=this.vilocity;
    }
  }