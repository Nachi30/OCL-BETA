//VARIABLES
var canvas;
var ctx;


//Manejando eventos
function events(dt){
    //Moviendo al jugador



}

function borraCanvas(){
	canvas.width = 640;
	canvas.height = 480;
	
}
//FUNCIONES PRINCIPALES DE CANVASPP
function app_load(){
    //Importamos los recursos, declaramos algunas variables, etc :v
    canvas = document.getElementById("viewport")
    ctx = canvas.getContext("2d")

}


function logic(delta){
    //Actualizamos nuestro juego
    events(delta);
  
}
function graphic(){
    //Aquí va todo lo que halla que mostrar
    //Antes de dibujar :
    //Hay que refrescar el canvas con la función "borraCanvas"
    borraCanvas();
    

}

