let NotaParcial1 = Number(prompt("ingresa la nota de tu primer parcial"));
let NotaParcial2 = Number(prompt("ingresa la nota de tu primer parcial"));
let NotaParcial3 = Number(prompt("ingresa la nota de tu primer parcial"));
let ExamenFinal = Number(prompt("ingresa la nota final de tu examen"));
let TrabajoFinal = Number(prompt("ingresa la nota de tu trabajo final"));

let PromedioNotasParciales = ((NotaParcial1+NotaParcial2+NotaParcial3)/3)*0.55
ExamenFinal = ExamenFinal*0.30
TrabajoFinal = TrabajoFinal*0.15
let NotaFinal = PromedioNotasParciales + ExamenFinal + TrabajoFinal ;

document.write(`Tu nota final es: ${NotaFinal.toFixed(2)}`); //toFixed(2)->Decimales que se quieren