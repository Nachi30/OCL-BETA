function physics(){
        this.checkCollide = function(x, y, x2, y2, ancho1, largo1, ancho2, largo2){
            collision = null;
            if (x < x2 + ancho1 &&
                x + ancho1 > x2 &&
                y < y2 + largo2 &&
                largo1 + y > y2) {
                    collision = true
                    return collision;
         }
    }
}
