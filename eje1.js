/* 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”. */
function beauty(answer) {
    if (answer == "si"){
        console.log("Ciertamente");
    }
    else{
        console.log("No te creo")
    }
}
var answer = prompt("¿Eres bellisimo/a?")
beauty(answer)
/*2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”. */
function entre2(numero) {
    if (numero % 2 == 0) {
        console.log(numero + " " + "x número es divisible entre 2");
    }
    else{
        console.log(numero + " núm no es divisible entre 2 " )
    }
}
var numero = prompt("Ingresa un número")
entre2(numero)

/* 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert. */
function par(num) {
    if (num % 2 == 0) {
        alert("El numero: " + num + " " + "es par");
    }
    else{
        alert("El numero: " + num + " " + "es impar" )
    }
}
var num = prompt("Ingresa un número")
par(num)

/* 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”. */

function ganador(num_cliente) {
    if (num_cliente == 1000) {
        console.log("Ganaste un premio");
    }
    else{
        console.log("Lo sentimos, sigue participando" )
    }
}
var num_cliente = prompt("Ingresa un número")
ganador(num_cliente)

/* 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales. */
function menorQue(a,b){
    if(a > b && a != b){
        console.log(b + " es menor que " + a)
    }
    else{
        console.log(a + " es menor que " + b)
    }
}
var a = Number(prompt("ingresa un numero"))
var b = Number(prompt("ingresa otro numero"))
menorQue(a,b);

/* 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales. */ 

function mayorQue(x,y,z){
    if(x > y && x > z){
        console.log(x + " es el numero mayor")
    } else if(y > z && y > x) {
        console.log(y + " es el numero mayor")

    } else if(z > x && z > y){
        console.log(z + " es el numero mayor")
    } else{
        console.log( "Hay numeros iguales ")
    }
}
var x = Number(prompt("ingresa un numero"))
var y = Number(prompt("ingresa otro numero"))
var z = Number(prompt("ingresa otro numero"))
mayorQue(x,y,z);

/* 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje. */
function diaSemana(dia) {
    if (dia == "Lunes"){
        console.log("Hoy es inicio de semana buena suerte");
    } else if (dia == "Viernes"){
        console.log("Hoy se acabo tu semana diviertete!")
    } else if (dia == "Sábado"){
        console.log("Es fin de semana haz algo diferente")
    } else if (dia == "Domingo"){
        console.log("Disfruta este día de descanso")
    }
    else{
        console.log("no te rindas ya falta menos para el fin de semana")
    }
}
var dia = prompt("Ingresa el día de la semana: ").toLowerCase
diaSemana(dia)

/* 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10. */ 
var numero = Number(prompt("Ingresa un numero entre 1 y 10: "))

function numeroRango(numero) {
    if (numero >= 1 && numero <= 10) {
        if(numero <6 ) { 
            console.log("Reprobado")
        }else if(numero >=6 && numero <=8 ) {
            console.log("Regular")
        } else if(numero == 9){
            console.log("bien")
        } else if(numero == 10){
            console.log("excelente")
        }
    }
    else{
        alert("Error")
    }
}
numeroRango(numero)

/* 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping. */ 
