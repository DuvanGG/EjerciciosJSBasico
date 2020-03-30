let Nombres = prompt("Ingresa el listado de nombres");
let vacio = "" ;
let ArregloNombres = [""] ;
let pasos = 1 ;
ArregloNombres.push(Nombres) ;
while (Nombres != vacio ) {
    for(i = 0; i<pasos; i++){
        if(Nombres == ArregloNombres[i]){
            alert("nombre ya ingresado") ;
        
        }else{
            ArregloNombres.push(Nombres) ;
        }
        
    }
    Nombres = prompt("Ingresa el listado de nombres") ;
    pasos = pasos + 1 ;
}
// console.log(ArregloNombres) //repite los nombres
ArregloNombres.sort() ;
let ArregloSinRepetir = new Set(ArregloNombres) ;//Elimina los datos que se repiten
console.log(ArregloSinRepetir) ;