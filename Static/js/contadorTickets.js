// Suponiendo que tengas una variable ticketsVendidos que almacena el número actual de tickets vendidos
let ticketsVendidos = 0; // Ejemplo de valor inicial

// Función para actualizar el contador de tickets vendidos
function actualizarContadorTickets() {
    const contadorTickets = document.getElementById('numero-tickets');
    contadorTickets.textContent = ticketsVendidos;
}

// Llama a la función para actualizar el contador al cargar la página
actualizarContadorTickets();

// Agrega un listener al formulario para capturar el evento de compra
const formularioCompra = document.getElementById('ticket-form');
formularioCompra.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario

    // Obtiene la cantidad de tickets seleccionados en el formulario
    const cantidadTickets = parseInt(document.getElementById('quantity').value);

    // Incrementa el contador de tickets vendidos según la cantidad seleccionada
    ticketsVendidos += cantidadTickets;

    // Actualiza el contador de tickets vendidos
    actualizarContadorTickets();
     // Restablece el valor del campo de cantidad de tickets a cero
     document.getElementById('quantity').value = '0';
});
