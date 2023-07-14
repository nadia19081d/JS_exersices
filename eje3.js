
// 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

var num = Number(prompt("Ingresa un número"))
var i = 1; 
while (i <= num) { 
    if(i % 5 ==0 ){ 
        console.log(i)
    }
    i++
}
// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

var num = Number(prompt("Ingresa un número entre 1 y 50"))
var num2 = Number(prompt("Ingresa un número entre 1 y 50"))
function loteria(num,num2){
    var i = 1; 
    while (i < 50) { 
        if(i== num || i== num2){
            console.log(i + " Loteria") 
        } else{
        console.log(i)
        }
        i++   
    }
}
console.log(loteria(num,num2))

// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
var num = Number(prompt("Ingresa un número")) 
array = []

    while ( num !=0) { 
        array.push(num)
        num = Number(prompt("Ingresa un número"))
        
        }
    console.log(array)


// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.
var cadena = prompt("Ingresa letras o palabras")
var array =[]

    while ( cadena !="") { 
        array.push(cadena)
        cadena = prompt("Ingresa letras o palabras")
        }
    console.log("Concatenación: " + array.join())
// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

var diaSemana = (prompt("Ingresa un día de la semana")).toLowerCase

while (diaSemana !="domingo"){
    
    switch (diaSemana){
        case "lunes":
        alert("Es lunes");
        break;
        case "martes":
        alert("Es Martes");
        break;
        case "miercoles":
        alert("Es Miercoles");
        break;
        case "jueves":
        alert("Es Jueves");
        break;
        case "viernes":
        alert("Es Viernes");
        break;
        case "sabado":
        alert("Es Sabado");
        break;
    
    }
    diaSemana = prompt("Ingresa un día de la semana");
}
console.log("Ve a descansar")
*/