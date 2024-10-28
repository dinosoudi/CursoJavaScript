'use strict'

/**
 * utilizando un bucle, mostrar la suma y la media de los numeros 
 * introducidos hasta introducir un numero negativo y ahí mostrar el resultado
 */

// declaran las variables
var suma = 0;
var media;
var numero;
var contador = 0;
var repite = true;

// recaudan los numeros y se hace la suma
do{
    numero = parseInt( prompt("introduce un numero positivo: ", 0) );

    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma = suma + numero;
        contador += 1;
    }else{
        repite = false;
    }
    
}while(repite);

//se saca el promedio o media
media = suma / contador;
alert("el valor de la suma es: " + suma + " y el promedio es: " + media);

