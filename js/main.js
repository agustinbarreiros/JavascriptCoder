let jugador1 = prompt("Ingrese nombre jugador 1")
let jugador2 = prompt("Ingrese nombre jugador 2")


let cartasJugador1 = 0
let cartasJugador2 = 0


function estado(){
    console.log( jugador1 + " tiene " + cartasJugador1 + " cartas")
    console.log( jugador2 + " tiene " + cartasJugador2 + " cartas")
}


let turno = 0;

console.log("INICIO DE LA PARTIDA!")


 while(cartasJugador1 < 50 && cartasJugador2 < 50){
    turno+=1;
    function mano(){
        return Math.ceil(Math.random()*10)} 
     let mano1= mano();
     let mano2= mano();
   
     console.log("mano de "+ jugador1 +" = " + mano1)
     console.log("mano de " +jugador2+ " = " + mano2)

if (mano1 > mano2){
    cartasJugador1 += mano1;
    console.log( jugador1 + " suma " + mano1 +  " puntos por tener la mano más alta ")
    estado();
    console.log( "-----------TURNO "+ turno +"-----------")
    document.write("Avanza y suma "+ jugador1)
    document.write('<div class="ganador"><img src="imgs/punto1.jpg"/></div>')
} else if (mano1 == mano2) { 
    console.log("Empate nadie suma cartas")
    console.log( "-----------TURNO "+ turno +"-----------")
}else {
        cartasJugador2 += mano2;
        console.log( jugador2 + " suma " + mano1 +  " puntos por tener la mano más alta ")
        estado();
        console.log("-----------TURNO "+ turno +"-----------")
        document.write("Puntaso para "+ jugador2)
        document.write('<div class="ganador"><img src="imgs/punto2.jpg"/></div>')
       }
      
 }


 if (cartasJugador1>50){
    console.log(jugador1 + " ES EL GANADOR!!! A seguir intentando " + jugador2)
    document.write('<div class="ganador"><img src="imgs/jugador1s.png"/></div>')
 }else{
    console.log(jugador2 + " ES EL GANADOR!!! Suerte para la proxima " + jugador1)
    document.write('<div class="ganador"><img src="imgs/jugador2.webp"/></div>')
 }
 





