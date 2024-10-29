'use strict'

// pedir 2 numeros, decir mayor, menor y si son iguales
// solucionar que sean numeros los valores entrantes y no letras porque da error

// se declaran las variables
var num1;
var num2;
var iguales;
var mayor;
var menor;

// pide 2 numeros 
do{
    num1 = parseInt( prompt('Dame el primer numero: ',0) );
    num2 = parseInt( prompt('Dame el segundo numero: ',0) );
}while(isNaN(num1) || isNaN(num2));

// imprime si son iguales
if (num1 == num2){
    alert("los numeros son iguales: " + num1 + " y " + num2);
    iguales = true;
} else{
    alert("los numeros son diferentes: " + num1 + " y " + num2)
    iguales = false;
}

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

// debugger