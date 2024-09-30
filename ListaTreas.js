// Seleccionar el campo de entrada, el boton agregar y la lista de tareas
var nuevaTareaInput = document.getElementById("nuevaTarea")
var agregarbtn = document.getElementById("agregarbtn")
var listarTareas = document.getElementById("listarTareas")

// Agregar un evento al boton de agregar para escuchar los clics
agregarbtn.addEventListener('click', function(){
    // Obtener el texto ingresado en el campo de nueva tarea
    var textoTarea = nuevaTareaInput.value;

    // Verificamos que el campo no este vacio
    if(textoTarea !== ''){
        // Creamos un elemento 'li' para la tarea
        var nuevaTarea = document.getElementById('li')
        nuevaTarea.classList.add('tarea')

        // creamos un span para contener el texto de la tarea
        var spanTexto = document.getElementById('span')
        spanTexto.textContent = textoTarea;
        nuevaTarea.appendChild(spanTexto)

        // creamos un div para los botenes
        var divBotones = document.createElement('div')

        // Creamos un boton para eliminar la tarea
        var eliminarbtn = document.createElement('button')
        eliminarbtn.classList.add('eliminarBtn')
        eliminarbtn.textContent = 'Eliminar'

        // Evento para eliminar tarea
        eliminarbtn.addEventListener('click', function(){
            listarTareas.removeChild(nuevaTarea);
        })

        // Evento para modificr la tarea
        modificarBtn.addEventListener('click', function(){
            // Verificar si la tarea esta en modo edicion
            if(modificarBtn.textContent === "Modificar"){
                modificarBtn.textContent = "Guardar"

                // Convertir el contenido de la tarea en un campo de texto editable
                var inputModificacion = document.createElement('input');
                inputModificacion.type = 'text';
                inputModificacion.value = spanTexto.textContent;
                nuevaTarea.replaceChild(inputModificacion, spanTexto)
            } else {
                modificarBtn.textContent = 'Modificar'

                // Recuperamos el valor del campo de texto editable
                var nuevoTexto = nuevaTarea.firstChild.value;

                // Actualizar el texto del span
                spanTexto.textContent = nuevoTexto;

                // Reemplazar el cmapo de entrada por el nuevo texto
                nuevaTarea.replaceChild(spanTexto)
            }
        })
    }
})