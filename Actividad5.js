let palabra = prompt("ingresa tu palabra")
let letrasOriginal = palabra.split("");
let CadenaInvertidaOriginal = letrasOriginal.reverse().join("")
let PalabraMinuscula = palabra.toLowerCase() ;
let letras = PalabraMinuscula.split(""); // letras = ["H", "o", "l", "a"]
let CadenaInvertida = letras.reverse().join("")

if(CadenaInvertida == PalabraMinuscula){
    alert(`la palabra ${palabra} es palindroma porque se lee igual al reves ${CadenaInvertidaOriginal}`)
} else{
    alert(`la palabra ${palabra} no es palindroma porque no se lee igual al reves ${CadenaInvertidaOriginal}`)
}