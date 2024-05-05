 /*script para mostar la fecha actualizada*/

    /* Obtener el elemento donde se mostrará la fecha */
     var fechaElement = document.getElementById('fecha');
    
    // Obtener la fecha actual
    var fechaActual = new Date();
    
    // Formatear la fecha en formato legible
     var opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
     var fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFecha);
    
    // Mostrar la fecha en el elemento HTML
     fechaElement.textContent = fechaFormateada;


   