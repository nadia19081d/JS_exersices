/* 
function vacunacion(edad, embarazo,lugar){

if (edad >= 18 && lugar == "Norte" ){
    console.log("Te puedes vacunar")
} else if (edad >= 18 && embarazo >9){
    console.log("te puedes vacunar")
} 
else if (edad >=30) { 
    console.log("te puedes vacunar")
}
else {
    console.log("no te puedes vacunar")
} 
}
var edad = Number(prompt("ingresa edad"));
var embarazo = Number(prompt("ingresa semanas de gestacion si aplica"));
var lugar = prompt("ingresa lugar eje norte, sur, etc.");
vacunacion(edad, embarazo, lugar)
*/

/*Eje 2 de la clase */  

function mascotas(){
    let nombre = prompt("¿Cómo te llamas?")
    let perros = Number(prompt("¿Cuantos perros tienes?")); 
    let gatos = Number(prompt("¿Cuantos gatos tienes?")); 
    let suma = perros + gatos;
    
    return nombre + " tiene " + perros + " perros y " + gatos + " gatos" + " en total tiene " + suma + " mascotas"
}
console.log(mascotas())