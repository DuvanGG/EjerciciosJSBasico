alert("El resultado se muestra por consola :)")
let TamañoLista = prompt("Cuantos numeros vas a ingresar");
let numeros = [];
let pares = 0 ;
let impares = 0 ;

for(i = 0; i<TamañoLista; i++){
    let ListaNumeros = prompt("Ingresa tu lista de numeros") ;
    numeros.push(ListaNumeros); 
    if(numeros[i]%2 == 0){ // 2%2 ->identificar si es par
        pares = pares + 1
    }else{
        impares = impares + 1 
    }
}

let PorcentajePares = 100 * pares /(numeros.length) 
let PorcentajeImpares = 100 * impares /(numeros.length)
let total = numeros.length+1 / 1 ;
console.log("El porcentaje de numeros pares es: " + PorcentajePares + "%")
console.log("El porcentaje de numeros impares es: " + PorcentajeImpares + "%")