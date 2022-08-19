function Player(x,y,w){
  
    this.x=x;
    this.y=y;
    this.w=w;
    this.speed=0.05; 
    this.vilocity=0;
    let img = loadImage("./images/bird.png",this.x,this.y);
    this.show=()=>{
   image(img,this.x, this.y,this.w,this.w);
    }
    this.update=()=>{
      this.vilocity+=this.speed;
      this.y+=this.vilocity;
    }
    this.lose=(pipe)=>{
  return this.x >pipe.x && this.x< pipe.x+pipe.w &&(
this.y+this.w/1.5 < pipe.topHeight || this.y+this.w/1.5> pipe.bottomY)
    }
  }