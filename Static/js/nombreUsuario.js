// Función para mostrar el nombre de usuario y el icono en la página homeGrid.html
function mostrarUsuario() {
    // Obtener el nombre de usuario validado del almacenamiento local
    var usuarioValidado = localStorage.getItem('usuarioValidado');
    // Verificar si hay un usuario validado
    if (usuarioValidado) {
        // Mostrar el nombre de usuario en el elemento con el id 'nombre-usuario'
        document.getElementById('nombre-usuario').textContent = usuarioValidado;
        // Mostrar el icono de usuario en el elemento con el id 'icono-usuario'
        document.getElementById('icono-usuario').classList.remove('hidden');
    }
}

// Llamar a la función mostrarUsuario al cargar la página homeGrid.html
window.onload = function(){
mostrarUsuario();

};