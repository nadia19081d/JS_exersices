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