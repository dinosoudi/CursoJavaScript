'use strict'

// pedir 2 numeros, decir mayor, menor y si son iguales

// se dan los 2 numeros
var num1 = parseInt( prompt('Dame el primer numero: ',0) );
var num2 = parseInt( prompt('Dame el segundo numero: ',0) );
var iguales;
var mayor;
var menor;

// imprime si son iguales
if (num1 == num2){
    console.log("son iguales");
    alert("los numeros son iguales");
    iguales = true;
} else{
    console.log("son diferentes");
    alert("los numeros son diferentes")
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