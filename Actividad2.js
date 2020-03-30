let intentos = 10;
let NumAdivinar = Math.floor(Math.random() * 50);

alert("Debes adivinar el numero de 0 a 50");

let NumJugador = prompt("Ingresa tu numero");

while (NumAdivinar != NumJugador && intentos > 1) {
    if (NumAdivinar > NumJugador){
        alert("Tu numero es menor");
    }else{
        alert("Tu numero es mayor");
    }
    intentos = intentos -1 ;
    alert("Te quedan " + intentos + " intentos");
    NumJugador = prompt("Ingresa tu numero");
}

let IntentosUtilizados = 11 - intentos;

if(NumAdivinar == NumJugador){
    alert("Correcto, utilizaste " + IntentosUtilizados + " intentos");
}else{
    alert("El numero a adivinar era: " + NumAdivinar);
}