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
        eventosMusicales.forEach(function (evento) {
            evento.style.border = '2px solid #780000'; // Restaurar el borde original
            if (selectedValue === 'evento1' || selectedValue === 'evento3') {
                evento.style.display = 'block'; // Mostrar el evento musical
            } else {
                evento.style.display = 'none'; // Ocultar el evento musical
            }
        });

        // Mostrar u ocultar los eventos de teatro según la opción seleccionada
        eventosTeatro.forEach(function (evento) {
            evento.style.border = '2px solid #780000'; // Restaurar el borde original
            if (selectedValue === 'evento2' || selectedValue === 'evento3') {
                evento.style.display = 'block'; // Mostrar el evento de teatro
            } else {
                evento.style.display = 'none'; // Ocultar el evento de teatro
            }
        });
    });

    // Escuchar el clic en cualquier evento
    document.querySelectorAll('.evento').forEach(function (evento) {
        evento.addEventListener('click', function () {
            // Resaltar el evento seleccionado
            evento.style.border = '2px solid #457B9D';

            // Obtener la información del evento seleccionado
            var infoEvento = evento.querySelector('h3').textContent + ' - ' + evento.querySelector('p').textContent;

            // Almacenar la información del evento en sessionStorage
            sessionStorage.setItem('eventoSeleccionado', infoEvento);

            // Deseleccionar el evento si ya estaba seleccionado
            if (evento.classList.contains('selected')) {
                evento.classList.remove('selected');
                // Restaurar el borde original
                evento.style.border = '2px solid #780000';
            } else {
                // Marcar el evento como seleccionado
                evento.classList.add('selected');
            }
        });
    });
});
