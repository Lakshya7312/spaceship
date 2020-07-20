class Form {
    constructor() {
        this.title = createSprite(displayWidth/2-90, 100, 1, 2);
        this.start = createSprite(displayWidth/2-90, displayHeight/2-50, 1, 2);
    }

    display() {
    this.title.addImage("start", start);
    this.start.addImage("play", play);

    if(mousePressedOver(start)){
        gameState = 1;
    }
    
  }
    
}