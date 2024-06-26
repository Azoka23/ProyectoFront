// Función para validar el inicio de sesión
function validarInicioSesion(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener los valores de usuario y contraseña del formulario
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();

    // Verificar que se hayan ingresado valores válidos
    if (username === '' || password === '') {
        alert('Por favor, ingresa un nombre de usuario y una contraseña válidos.');
        return;
    }

    // Redireccionar según el usuario y la contraseña ingresados
    if (username === 'Fran' && password === '1234') {
        // Redirigir a homeWork.html
        window.location.href = '/homeWork.html';
    } else if (username === 'messi' && password === '10') {
        // Redirigir a crud-usuarios.html
        window.location.href = '/templates/crud-usuarios.html';
    } else {
        // Usuario o contraseña incorrectos
        alert('Usuario o contraseña incorrectos');
        // Limpiar los campos de usuario y contraseña si es necesario
        usernameInput.value = '';
        passwordInput.value = '';
    }
}

// Obtener el formulario de inicio de sesión al cargar el DOM
window.onload = function() {
    // Obtener el formulario de inicio de sesión
    var loginForm = document.getElementById('login-form');

    // Verificar si el formulario se encontró correctamente antes de agregar el evento
    if (loginForm) {
        // Agregar un evento de escucha para el envío del formulario
        loginForm.addEventListener('submit', validarInicioSesion);
    } else {
        console.error('No se encontró el formulario de inicio de sesión.');
    }
}
