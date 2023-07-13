/* 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array. */
function aleatorio(inferior, superior) {
	var numPosibilidades = superior - inferior;
	var aleatorio = Math.random() * (numPosibilidades + 1);
	aleatorio = Math.floor(aleatorio);
	return inferior + aleatorio;
}
var array = [];
for (var i = 0; i <10; i++){
	array.push(aleatorio(1,100));

}

/* 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado. */

let str = prompt("Ingresa una lista separada por comas");
let arr = str.split(','); 
console.log(arr);


/* 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo. */

var array = [10,40,30,20,15,5];
function menorArray(array){
	var ordenado = [];
	while ( array.length > 0){
		var menor = array[0];
		for(var i=0; i<array.length; i++){
		if(array[i] < menor){
				menor = array[i];  
		}
    
	} 
	ordenado.push(menor);
	array.splice(array.indexOf(menor),1);
			
}  
return ordenado
}

console.log(menorArray(array))
