'use strict'

document.addEventListener('DOMContentLoaded', function(){
    console.log("Dom cargado");
    
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = "none";
    
    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional (recargando la página)
        console.log("submit capturado");

        var name = document.querySelector('#nombre').value; 
        var apell = document.querySelector('#apellido').value;
        var edad = document.querySelector("#edad").value;

        if(name.trim() == null || name.trim().length == 0){
            alert("nombre no valido");
            return false;
        }
        if(apell.trim() == null || apell.trim().length == 0){
            alert("apellido no valido");
            return false;
        }
        if(edad == null || edad <= 0){
            alert("edad no valido");
            return false;
        }

        box_dashed.style.display = "block";
        
        var p_nombre = document.querySelector('#p_nombre span')
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

      

        p_nombre.innerHTML = name;
        p_apellidos.innerHTML = apell;
        p_edad.innerHTML = edad;



        /**
        var arregloFormulario = [name, apell, edad];
        for(var indice in arregloFormulario){
            var parrafo = document.createElement("p");
            parrafo.append(arregloFormulario[indice]);
            box_dashed.append(parrafo);
        }
        */
    });
});