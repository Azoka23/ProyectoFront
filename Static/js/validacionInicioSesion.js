// Función para validar el inicio de sesión
function validarInicioSesion(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // console.log('Iniciando validación de inicio de sesión...');

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

    // Supongamos que el usuario y la contraseña válidos son 'usuario' y 'contraseña'
    if (username === 'Fran' && password === '1234') {
        // Usuario y contraseña válidos
        // alert('Inicio de sesión exitoso');

        // Almacenar información del usuario en el almacenamiento local
        localStorage.setItem('usuarioValidado','Bienvenido ' + username);

        // Mostrar el nombre de usuario y el icono
        var nombreUsuarioElement = document.getElementById('nombre-usuario');
        if (nombreUsuarioElement) {
            nombreUsuarioElement.textContent =  username;
        }

        var iconoUsuarioElement = document.getElementById('icono-usuario');
        if (iconoUsuarioElement) {
            iconoUsuarioElement.classList.remove('hidden');
        }

        // Ocultar el botón de inicio de sesión
        var botonContainer = document.querySelector('.boton-container');
        if (botonContainer) {
            botonContainer.style.display = 'none';
        }

        // Redireccionar a la página principal (homeGrid.html)
        window.location.href = '/homeWork.html';
    } else {
        // Usuario o contraseña incorrectos
        alert('Usuario o contraseña incorrectos');
        // Limpiar los campos de usuario y contraseña
        // ...
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
