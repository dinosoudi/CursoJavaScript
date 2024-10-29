'use strict'

/**
 * decir la tabla de multiplicar de un numero en el html
 */

//variables
var numero;

// valida el numero
do {
    numero = parseInt( prompt("dame un numero: ", 0) );
} while(isNaN(numero));
document.write("<h1>Tabla del numero  "+ numero + " </h1>");

// imprime su tabla de multiplicar
for(var i = 1; i <= 10; i++){
    document.write(numero + " x " + i + " = " + parseInt(numero*i) + "<br>");
}