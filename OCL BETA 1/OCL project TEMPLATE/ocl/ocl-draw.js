function draw(){

    this.drSprite = (image, x, y) =>{
        ctx.drawImage(image, x, y)

    }

    this.drCRect = (x, y, ancho, largo, color) =>{
        ctx.fillStyle = color;
        ctx.fillRect(x, y, ancho, largo);

    }

}
