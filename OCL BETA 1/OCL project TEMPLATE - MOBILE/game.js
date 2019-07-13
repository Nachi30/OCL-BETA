//VARIABLES
var canvas;
var ctx;
//FUNCIONES BÁSICAS
function borraCanvas(){
    canvas.width = 640
    canvas.height = 480

}
    

//FUNCIONES PRINCIPALES DE CANVASPP
function app_load(){
    //Importamos los recursos, declaramos algunas variables, etc :v
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    
}

function logic(){
    //Actualizamos nuestro juego :3
  

}
function graphic(){
    //Aquí va todo lo que halla que mostrar
    //Antes de dibujar :
    //Hay que refrescar el canvas con la función "borraCanvas"
    borraCanvas();
   
    
}