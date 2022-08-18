function Pipe(topHeight,x,wscreen){ 
  let hscreen=500;
    this.x=x;
    this.y=0;
    this.w=60;
    this.gap=60;
    this.topHeight=topHeight;
    this.bottomY=topHeight+this.gap;
    this.top = loadImage("./images/top.png");
    this.bot = loadImage("./images/bot.png");
    this.show=()=>{
    image(this.top,this.x, this.y,this.w,this.topHeight);
    image(this.bot,this.x,this.bottomY,this.w,hscreen-topHeight-this.gap);
    }
    this.update=()=>{
      this.x-=1;
    }
  }


  ///////////