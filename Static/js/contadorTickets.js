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

    // Aquí puedes agregar la lógica para guardar la venta en la base de datos
    guardarVentaEnBaseDeDatos(cantidadTickets); // Debes implementar esta función
});

// Función para guardar la venta en la base de datos
function guardarVentaEnBaseDeDatos(cantidadTickets) {
    // Aquí debes realizar una petición HTTP (por ejemplo, con fetch) para enviar los datos de la venta a tu servidor
    // En el servidor, debes procesar esta información y guardarla en la base de datos
    // Puedes enviar la cantidad de tickets vendidos y otros detalles relevantes de la venta
}
