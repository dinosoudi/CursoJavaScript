'use strict'

/**
 * Algoritmo con funciones que realice:
 * 1) pedir 6 numeros por pantalla y guardarlos en un array
 * 2) Mostrar el array en el cuerpo del html y en la consola
 * 3) Ordenar el array de menor a mayor
 * 4) Invertir el orden del array y mostrarlo
 * 5) mostrar el numero n de elementos del array
 * 6) Buscar un valor introducido por el usuario y si lo encuentrar dar su posicion-indice
 */

function PedirNumeros(){
    // declaracion de variables
    var valor;
    var arreglo = [];
    var contador = 0;

    // agregar 6 numeros al array
    do{
        

        valor = parseInt( prompt("dame un numero para agregarlo al arreglo",0) );

        if (isNaN(valor)){
            alert("Introduce un numero valido del 0 al 9");
        }else{
            arreglo.push(valor);
            console.log("indice y valor ingresado: " + contador + " - " + valor);
            contador++;
        }

    }while(contador < 6);
    
    return arreglo;
}

function imprimeArray(arreglo, nombreArreglo = "") {
    document.write("<h2>El arreglo " + nombreArreglo + " es: </br></h2>");

    document.write("<ul>");
    arreglo.forEach((element) => {
       document.write("<li>" + element + "</li>")
    });
    document.write("</ul>");
}

function ordenarArreglo(arreglo) {
    return arreglo.sort();
}

function InvertirArreglo(arreglo){
    return arreglo.reverse();
}

function imprimeTamañoArreglo(params) {
    document.write("El length del arreglo es: "+ params.length + ", es decir del indice 0 al " + (params.length - 1) + "</br>");
}

function BuscarValor(arreglo) {
    var valor;
    var posicion;

    do{
        valor = parseInt( prompt("dame un numero para buscarlo en el arreglo",0) );

        if (isNaN(valor)){
            alert("Introduce un numero valido");
        }else{
            alert("Valor introducido valido");
        }
    }while(isNaN(valor));

    //buscar valor en el arreglo y dar el indice si lo encuentra
    posicion = arreglo.findIndex(numero => numero == valor);
    if (posicion != -1) {
        document.write("Valor " + valor + " encontrado en el indice: " + posicion + "</br>");
    } else {
        document.write("Error, valor no encontrado en arreglo. Indice: "+ posicion + "</br>");
    }
}

var arreglo1 = [];
var arreglo2 = [];
var arreglo3 = [];

arreglo1 = PedirNumeros(); imprimeArray(arreglo1, "recibido");
arreglo1 = ordenarArreglo(arreglo1); imprimeArray(arreglo1, "ordenado-sort()");
arreglo1 = InvertirArreglo(arreglo1); imprimeArray(arreglo1, "invertido-reverse()");
imprimeTamañoArreglo(arreglo1);
BuscarValor(arreglo1); imprimeArray(arreglo1, "donde se busca el valor");
