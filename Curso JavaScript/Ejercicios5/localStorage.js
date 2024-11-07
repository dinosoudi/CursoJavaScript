'use strict'

/**
 * Hacer un formulario que agregue peliculas a el local storage, los muestre en pantalla y pueda borrar peliculas del local storage
 */

var formulario = document.querySelector("#peliculas");
formulario.addEventListener("submit", function(event){
    // event.preventDefault();
    var pelicula = document.querySelector("#nombre").value;

    if(pelicula.length >= 1){
        localStorage.setItem(pelicula, pelicula);
    }
});

var ul = document.querySelector('#ListaPeliculas');
for (var i in localStorage) {

     if(typeof localStorage[i] == 'string'){
        var li = document.createElement('li');
        li.append(localStorage[i]);
        ul.append(li);
    }     
}

var formularioBorrar = document.querySelector('#borrarPeliculas');
formularioBorrar.addEventListener('submit',function(){
    var peli = document.querySelector('#borrar').value;
    
    if(peli.length >= 1){
        localStorage.removeItem(peli);
    } 
});