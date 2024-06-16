document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ticket-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe
        console.log('Formulario enviado'); // Verificar que el evento se activa

        // Obtener la información del formulario
        const metodoPago = document.getElementById('metodo-pago').value;
        const cantidadTickets = parseInt(document.getElementById('quantity').value);
        const costoUnitario = 50; // Supongamos que cada ticket cuesta $50

        console.log(`Método de Pago: ${metodoPago}`);
        console.log(`Cantidad de Tickets: ${cantidadTickets}`);
        
        // Calcular el costo total
        const costoTotal = cantidadTickets * costoUnitario;
        console.log(`Costo Total: $${costoTotal}`);

        // Obtener el evento seleccionado y la fecha
        const eventoSeleccionado = document.getElementById('evento').value;
        const fechaSeleccionada = "2024-05-20"; // Reemplaza con la lógica adecuada para obtener la fecha

        console.log(`Evento Seleccionado: ${eventoSeleccionado}`);
        console.log(`Fecha Seleccionada: ${fechaSeleccionada}`);

        // Verificar si los elementos existen antes de tratar de acceder a ellos
        const eventoSeleccionadoElement = document.getElementById('evento-seleccionado');
        const fechaSeleccionadaElement = document.getElementById('fecha-seleccionada');
        const cantidadTicketsElement = document.getElementById('cantidad-tickets');
        const costoTotalElement = document.getElementById('costo-total');
        const detalleCompraElement = document.getElementById('detalle-compra');

        if (eventoSeleccionadoElement && fechaSeleccionadaElement && cantidadTicketsElement && costoTotalElement && detalleCompraElement) {
            // Mostrar el detalle de la compra
            eventoSeleccionadoElement.textContent = eventoSeleccionado;
            fechaSeleccionadaElement.textContent = fechaSeleccionada;
            cantidadTicketsElement.textContent = cantidadTickets;
            costoTotalElement.textContent = `$${costoTotal}`;

            // Mostrar el detalle de la compra
            detalleCompraElement.style.display = 'block';
        } else {
            console.error('Uno o más elementos del DOM no existen.');
        }
    });
});
