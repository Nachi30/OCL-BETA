class Default{
    constructor(px, py){
        this.x = px;
        this.y = py;
    }
        
        
    move(delta, speedx, speedy){
            this.x+=speedx * delta / 1000;
            this.y+=speedy * delta / 1000;
    }
    
}

