'use strict'

/**
 * decir numeros divisores de un numero introducido por un prompt
 */

// variables
var numero;

// pide un numero valido
do{
    numero = parseInt( prompt('Dame un numero: ', 1) );
}while( isNaN(numero)  || numero <= 0);

// imprime los divisores
console.log("los numeros divisores de " + numero + " son: ");

for(var i = 1; i<=numero; i++){    
    if (numero % i === 0){
        console.log(i);
    }
}