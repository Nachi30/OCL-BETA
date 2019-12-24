
//LOOP VARS...
fps = 30;
interval = 1000/fps;
lastTime = (new Date()).getTime();
currentTime = 0;
delta = 0;
app_load();



gameLoop = ()=> {
    window.requestAnimationFrame(gameLoop);

    currentTime = (new Date()).getTime();
    delta = (currentTime - lastTime) / 1000;

        logic(delta);

        graphic();

        lastTime = currentTime - (delta % interval);
    }


gameLoop();
