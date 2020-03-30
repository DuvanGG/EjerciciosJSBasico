let OpcionMenu = prompt("Ingresa el la opcion deseada para ver en pantalla : \n 1) Numeros del 1 al 100 \n 2) Numeros del 101 al 200 ");
switch (OpcionMenu) {
    case "1":
        for(i=1; i<=100; i++){
            document.write(i + "<br>");
        }
        break;
    case "2":
        for(i=101; i<=200; i++){
            document.write(i + "<br>");
        }
        break;
    default: 
        alert("No es una opcion correcta");
        break;
}