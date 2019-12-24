//VARIABLES
var canvas;
var ctx;



//Manejando eventos
function events(delta){
    /*Se manejan los controles, es decir se detecta cuando
    una tecla es presionada, o se hace un click con el mouse.
    */



}

function borraCanvas(){
	canvas.width = 640;
	canvas.height = 480;
	
}
//FUNCIONES PRINCIPALES DE OCL
function app_load(){
    //Se cargan algunos de los elementos del juego
    canvas = document.getElementById("viewport")
    ctx = canvas.getContext("2d")
    
}


function logic(delta){
    /*Es en esta función donde se determina el funcionamiento
       constante del juego...
    */
  
    events(delta);

}
function graphic(){
    //Aquí va todo lo que halla que mostrar
    //Antes de dibujar :
    //Hay que refrescar el canvas con la función "borraCanvas"
    borraCanvas();


}

