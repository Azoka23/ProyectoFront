// document.getElementById('register-form').addEventListener('submit', function(event) {
//     var form = event.target;
//     var inputs = form.querySelectorAll('input, select');

//     for (var i = 0; i < inputs.length; i++) {
//         if (inputs[i].value.trim() === '') {
//             event.preventDefault(); // Detiene el envío del formulario
//             var fieldName = inputs[i].getAttribute('placeholder') || inputs[i].getAttribute('id');
//             alert('Debes completar el campo: ' + fieldName);
//             return ;
//         }
//     }

    // Verificar si el checkbox de términos y condiciones está marcado
//    

document.getElementById('register-form').addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    var form = event.target;
    var inputs = form.querySelectorAll('input, select');

    // Limpiar todos los mensajes de error al intentar enviar el formulario
    var errorFields = form.querySelectorAll('.error-message');
    errorFields.forEach(function(errorField) {
        errorField.textContent = ""; // Limpiar el contenido del mensaje de error
    });

    var errorFound = false;

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.value.trim() === '') {
            var fieldName = input.getAttribute('placeholder') || input.getAttribute('id');
            var errorField = document.getElementById('error-' + input.getAttribute('id'));
            errorField.textContent = 'Debes completar el campo: ' + fieldName;
            errorFound = true; 
        }
    }

    // Verificar si el checkbox de términos y condiciones está marcado
    var termsCheckbox = document.getElementById('terms-checkbox');
    if (!termsCheckbox.checked) {
        var errorField = document.getElementById('error-message');
        errorField.textContent = 'Debes aceptar los términos y condiciones para continuar.';
        errorFound = true; 
    }
    
    if (!errorFound) {
        
        form.submit();
    }
});
