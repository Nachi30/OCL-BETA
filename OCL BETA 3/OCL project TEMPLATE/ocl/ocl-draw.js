function draw(){
    this.drAnimation = (image, sx, sy, swidth, sheight, x, y, width, height, quantity) =>{
        ctx.drawImage(image, sx, sy, swidth, sheight, x, y, width, height)

    }
    this.drSprite = (image, x, y) =>{
        ctx.drawImage(image, x, y)

    }

    this.drCRect = (x, y, ancho, largo, color) =>{
        ctx.fillStyle = color;
        ctx.fillRect(x, y, ancho, largo);

    }

}
