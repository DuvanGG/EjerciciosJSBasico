let palabra = prompt("ingresa tu palabra")
let letras = palabra.split("");
let CadenaInvertida = letras.reverse().join("")

document.write("tu palabra al reves es: " + CadenaInvertida + "<br>")
document.write("tiene : " + palabra.length + " caracteres")