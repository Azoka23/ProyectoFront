document.addEventListener('DOMContentLoaded', function () {
    // Obtener el elemento select
    var selectEvent = document.getElementById('event');

    // Obtener todos los elementos de evento musical
    var eventosMusicales = document.querySelectorAll('.evento-musical .evento');

    // Obtener todos los elementos de evento de teatro
    var eventosTeatro = document.querySelectorAll('.evento-teatro .evento');

    // Escuchar el cambio en el select
    selectEvent.addEventListener('change', function () {
        // Obtener el valor seleccionado
        var selectedValue = selectEvent.value;

        // Mostrar u ocultar los eventos musicales según la opción seleccionada
        if (selectedValue === 'evento1' || selectedValue === 'evento3') {
            eventosMusicales.forEach(function (evento) {
                evento.style.display = 'block'; // Mostrar el evento musical
            });
        } else {
            eventosMusicales.forEach(function (evento) {
                evento.style.display = 'none'; // Ocultar el evento musical
            });
        }

        // Mostrar u ocultar los eventos de teatro según la opción seleccionada
        if (selectedValue === 'evento2' || selectedValue === 'evento3') {
            eventosTeatro.forEach(function (evento) {
                evento.style.display = 'block'; // Mostrar el evento de teatro
            });
        } else {
            eventosTeatro.forEach(function (evento) {
                evento.style.display = 'none'; // Ocultar el evento de teatro
            });
        }
    });
});
