document.getElementById('register-form').addEventListener('submit', function(event) {
    var form = event.target;
    var inputs = form.querySelectorAll('input, select');

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            event.preventDefault(); // Detiene el envío del formulario
            var fieldName = inputs[i].getAttribute('placeholder') || inputs[i].getAttribute('id');
            alert('Debes completar el campo: ' + fieldName);
            return;
        }
    }

    // Verificar si el checkbox de términos y condiciones está marcado
    var termsCheckbox = document.getElementById('terms-checkbox');
    if (!termsCheckbox.checked) {
        event.preventDefault(); // Detiene el envío del formulario
        alert('Debes aceptar los términos y condiciones para continuar.');
        return;
    }
    // Redirigir a la página guardaForm.html después de la validación exitosa
    window.location.href = "/Templates/guardaForm.html";
});
