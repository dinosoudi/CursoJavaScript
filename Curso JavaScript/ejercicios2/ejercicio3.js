'use strict'

/**
 * hacer un programa que muestre todos los numeros entre 2 numero introducidos por el usuario
 */

// se declaran las variables
var num1;
var num2;
var iguales;
var mayor;
var menor;

// pide 2 numeros validos
do{
    num1 = parseInt( prompt('Dame el primer numero: ',0) );
    num2 = parseInt( prompt('Dame el segundo numero: ',0) );

    if (num1 == num2){
        iguales = true;
    } else{
        iguales = false;
    }

}while(isNaN(num1) || isNaN(num2) || iguales);

// imprime cual es mayor y menor si no son iguales
if(!iguales){
    if(num1>num2){
        mayor = num1;
        menor = num2;
    }else{
        mayor = num2;
        menor = num1;
    }
    alert("El numero mayor es: " + mayor + " y el menor es: " + menor);
}

// imprime los numeros de en medio
console.log("Los numeros de enmedio entre " + menor + " y " + mayor +" son:");

for (var i=menor + 1; i<mayor;i++){
    console.log(i);
}