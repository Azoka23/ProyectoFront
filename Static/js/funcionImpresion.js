document.getElementById('ticket-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener la información del formulario (código previo...)

    // Mostrar el detalle de la compra (código previo...)

    // Mostrar el detalle de la compra
    const detalleCompra = document.getElementById('detalle-compra');
    detalleCompra.style.display = 'block';

    // Agregar evento de impresión al icono de impresora
    document.getElementById('print-icon').addEventListener('click', function () {
        imprimirDetalleCompra(detalleCompra.innerHTML);
    });
});

// Función para imprimir el detalle de la compra
function imprimirDetalleCompra(detalleHTML) {
    const ventanaImpresion = window.open('', '_blank');
    ventanaImpresion.document.write('<html><head><title>Detalle de Compra</title></head><body>');
    ventanaImpresion.document.write(detalleHTML);
    ventanaImpresion.document.write('</body></html>');
    ventanaImpresion.document.close();
    ventanaImpresion.print();
}
