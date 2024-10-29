'use strict'

/**
 * que nos diga si un numero es par o impar
 */

// variables
var numero;

// pide un numero valido
do{
    numero = parseInt( prompt('Dame un numero: ', 0) );
}while( isNaN(numero) );

// decir si es par o impar
if( numero % 2 === 0){
    alert(" el numero " + numero + " es par");
}else{
    alert(" el numero " + numero + " es impar");
}