canvas=document.getElementById("micanvas");
ctx=canvas.getContext("2d");
roverwidth=100;
roverheight=90;
roverx=10;
rovery=10;
imagenfondo="mars.jpg";
imagenrover="rover.png";
function agregar(){
    etiquetaimagenfondo=new Image();
    etiquetaimagenfondo.onload=cargarfondo;
    etiquetaimagenfondo.src=imagenfondo;
    etiquetaimagenrover=new Image();
    etiquetaimagenrover.onload=cargarrover;
    etiquetaimagenrover.src=imagenrover;
}
function cargarfondo(){
    ctx.drawImage(etiquetaimagenfondo,0,0,canvas.width,canvas.height);
}
function cargarrover(){
    ctx.drawImage(etiquetaimagenrover,roverx,rovery,roverwidth,roverheight);
}
window.addEventListener("keydown",miteclado);
function miteclado(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("arriba");
    }
    if(keyPressed=='40'){
        down();
        console.log("abajo");
    }
    if(keyPressed=='37'){
        left();
        console.log("izquierda");
    }
    if(keyPressed=='39'){
        right();
        console.log("derecha");
    }
}