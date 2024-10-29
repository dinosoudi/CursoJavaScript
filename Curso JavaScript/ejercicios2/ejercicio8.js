'use strict'

/**
 * calculadora que hace la suma, resta, multiplciacion y division de 2 numeros
 */

// declaracion de variables
var numero1;
var numero2;
var iguales;

//validacion del numero
do {
    numero1 = parseInt( prompt("Dame el primer numero: ", 1) );
    numero2 = parseInt( prompt("Dame el segundo numero: ", 1) );
} while (isNaN(numero1) || isNaN(numero2) || (numero1*numero2 === 0));
document.write("<h1> calculadora de los numeros: " + numero1 + " y " + numero2 + "</h1>");

//verifica si son iguales
if(numero1 == numero2){
    iguales = true;
}else{
    iguales = false;
}

// multiplica, divide, resta y suma
if(iguales){
    document.write("multiplicacion " + numero1*numero2 + "<br>");
    document.write("division " + (numero1/numero2) + "<br>");
    document.write("resta " +  (numero2-numero1) + "<br>");
    document.write("suma: " + (numero1+numero2) + "<br>");
}else{
    document.write("multiplicacion: " + numero1*numero2 + "<br>");
    document.write("division de " + numero1 + " entre " + numero2 +" es: " + (numero1/numero2) + "<br>");
    document.write("division de " + numero2 + " entre " + numero1 +" es: " + (numero2/numero1) + "<br>");
    document.write("resta de " + numero1 + " menos " + numero2 +" es: " + (numero1-numero2) + "<br>");
    document.write("resta de " + numero2 + " menos " + numero1 +" es: " + (numero2-numero1) + "<br>");
    document.write("suma: " + (numero1+numero2) + "<br>");
}

