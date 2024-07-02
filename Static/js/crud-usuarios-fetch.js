const BASEURL = 'http://127.0.0.1:5000';

/**
 * Función para realizar una petición fetch con JSON.
 * @param {string} url - La URL a la que se realizará la petición.
 * @param {string} method - El método HTTP a usar (GET, POST, PUT, DELETE, etc.).
 * @param {Object} [data=null] - Los datos a enviar en el cuerpo de la petición.
 * @returns {Promise<Object>} - Una promesa que resuelve con la respuesta en formato JSON.
 */
async function fetchData(url, method, data = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : null
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        alert('Ocurrió un error al realizar la solicitud.');
        throw error;
    }
}





/**
 * Función para obtener todos los usuarios.
 */
async function fetchUsers() {
    try {
        const users = await fetchData(`${BASEURL}/api/usuarios/`, 'GET');
        const tableBody = document.getElementById('tbody-table-users');
        if (tableBody) {
            tableBody.innerHTML = '';

            users.forEach(user => {
                const fechaNacimientoFormateada = convertirFechaCompleta(user.fecha_nacimiento);

                const row = `
                    <tr>
                        <td>${user.nombre}</td>
                        <td>${user.apellido}</td>
                        <td>${fechaNacimientoFormateada}</td>
                        <td>${user.documento}</td>
                        <td>${user.telefono}</td>
                        <td>${user.email}</td>
                        <td>${user.pais_origen}</td>
                        <td>${user.password}</td>
                       <td>
    <button onclick="editUser(${user.id_usuario})">
        <img src="/Static/Imagenes/editar2.png" alt="Editar" style="width:20px;height:20px;">
    </button>
    <button onclick="deleteUser(${user.id_usuario})">
        <img src="/Static/Imagenes/bin_trash_delete_remove_recycle_icon_146878.png" alt="Eliminar" style="width:20px;height:20px;">
    </button>
</td>

                    </tr>
                `;
                tableBody.insertAdjacentHTML('beforeend', row);
            });
        }
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

/**
 * Función para guardar un usuario (crear o actualizar).
 */
async function saveUser() {
    const idUsuario = document.querySelector('#id-usuario') ? document.querySelector('#id-usuario').value : null;
    const apellido = document.querySelector('#apellido').value;
    const nombre = document.querySelector('#nombre').value;
    const documento = document.querySelector('#documento').value;
    const telefono = document.querySelector('#telefono').value;
    const fechaNacimiento = document.querySelector('#fecha-nacimiento').value;
    const email = document.querySelector('#email').value;
    const paisOrigen = document.querySelector('#pais-origen').value;
    const password = document.querySelector('#password').value;

    if (!apellido || !nombre || !documento || !telefono || !fechaNacimiento || !email || !paisOrigen || !password) {
        alert('Por favor completa todos los campos.');
        return;
    }

    const userData = {
        apellido,
        nombre,
        documento,
        telefono,
        fecha_nacimiento: fechaNacimiento,
        email,
        pais_origen: paisOrigen,
        password
    };

    try {
        if (idUsuario) {
            // Si hay un ID, actualizamos el usuario
            await fetchData(`${BASEURL}/api/usuarios/${idUsuario}`, 'PUT', userData);
        } else {
            // Si no hay ID, creamos un nuevo usuario
            await fetchData(`${BASEURL}/api/usuarios/`, 'POST', userData);
        }

        // Resetear el formulario después de guardar
        if (document.querySelector('#form-user')) {
            document.querySelector('#form-user').reset();
        }
        // Actualizar la lista de usuarios
        if (document.getElementById('tbody-table-users')) {
            fetchUsers();
        }
    } catch (error) {
        console.error('Error saving user:', error);
    }
}



async function deleteUser(id) {
    // Usa SweetAlert para confirmar la eliminación
    const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!',
        cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
        try {
            await fetchData(`${BASEURL}/api/usuarios/${id}`, 'DELETE');
            fetchUsers();
            Swal.fire(
                'Eliminado!',
                'El usuario ha sido eliminado.',
                'success'
            );
        } catch (error) {
            console.error('Error deleting user:', error);
            Swal.fire(
                'Error!',
                'Hubo un problema al eliminar el usuario.',
                'error'
            );
        }
    }
}


/**
 * Función para editar un usuario.
 */
async function editUser(id) {
    try {
        const user = await fetchData(`${BASEURL}/api/usuarios/${id}`, 'GET');
        const fechaNacimientoFormateada = convertirFechaCompleta(user.fecha_nacimiento);
        document.querySelector('#id-usuario').value = user.id_usuario;
        document.querySelector('#apellido').value = user.apellido;
        document.querySelector('#nombre').value = user.nombre;
        document.querySelector('#documento').value = user.documento;
        document.querySelector('#telefono').value = user.telefono;
        document.querySelector('#fecha-nacimiento').value = fechaNacimientoFormateada;
        document.querySelector('#email').value = user.email;
        document.querySelector('#pais-origen').value = user.pais_origen;
        document.querySelector('#password').value = user.password;
    } catch (error) {
        console.error('Error editing user:', error);
    }
}

// Inicializa la lista de usuarios al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Verifica si estamos en la página que contiene la tabla de usuarios
    if (document.getElementById('tbody-table-users')) {
        fetchUsers();
    }
    // Verifica si estamos en la página de registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            // Obtener valores de los campos del formulario
            const apellido = document.getElementById('apellido').value;
            const nombre = document.getElementById('nombre').value;
            const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
            const documento = document.getElementById('documento').value;
            const telefono = document.getElementById('telefono').value;
            const email = document.getElementById('email').value;
            const pais = document.getElementById('pais-origen').value;
            const password = document.getElementById('password').value;

            // Validar que los campos no estén vacíos
            if (!apellido || !nombre || !fechaNacimiento || !documento || !telefono || !email || !pais || !password) {
                alert('Por favor complete todos los campos.');
                return;
            }

            // Objeto con los datos del usuario a enviar al backend
            const userData = {
                apellido: apellido,
                nombre: nombre,
                fecha_nacimiento: fechaNacimiento,
                documento: documento,
                telefono: telefono,
                email: email,
                pais_origen: pais,
                password: password
            };

            try {
                await fetchData(`${BASEURL}/api/usuarios/`, 'POST', userData);
                alert('Registro exitoso');
                window.location.href = '/index.html'; // Redirigir al usuario a la página de inicio
            } catch (error) {
                console.error('Error al registrar usuario:', error);
                alert('Error al registrar usuario');
            }
        });
    }
});

/**
 * Función para buscar un usuario por ID o Nombre.
 */
async function searchUser() {
    const query = document.getElementById('search-input').value;

    // Validar que el campo de búsqueda no esté vacío
    if (!query) {
        alert('Por favor ingresa un ID o Nombre para buscar.');
        return;
    }

    // Intentar buscar por ID
    if (!isNaN(query)) {
        try {
            const user = await fetchData(`${BASEURL}/api/usuarios/${query}`, 'GET');
            displayUser(user);
        } catch (error) {
            console.error('Error fetching user by ID:', error);
        }
    } else {
        // Buscar por nombre
        try {
            const users = await fetchData(`${BASEURL}/api/usuarios/nombre?nombre=${query}`, 'GET');
            displayUsers(users);
        } catch (error) {
            console.error('Error fetching users by name:', error);
        }
    }
}

/**
 * Función para mostrar un único usuario en la tabla.
 */
function displayUser(user) {
    const tableBody = document.getElementById('tbody-table-users');
    if (tableBody) {
        tableBody.innerHTML = '';

        const row = `
            <tr>
                <td>${user.nombre}</td>
                <td>${user.apellido}</td>
                <td>${user.fecha_nacimiento}</td>
                <td>${user.documento}</td>
                <td>${user.telefono}</td>
                <td>${user.email}</td>
                <td>${user.pais_origen}</td>
                <td>${user.password}</td>
                <td>
                    <button onclick="editUser(${user.id_usuario})">Editar</button>
                    <button onclick="deleteUser(${user.id_usuario})">Eliminar</button>
                </td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    }
}

/**
 * Función para mostrar múltiples usuarios en la tabla.
 */
function displayUsers(users) {
    const tableBody = document.getElementById('tbody-table-users');
    if (tableBody) {
        tableBody.innerHTML = '';

        users.forEach(user => {
            const row = `
                <tr>
                    <td>${user.nombre}</td>
                    <td>${user.apellido}</td>
                    <td>${user.fecha_nacimiento}</td>
                    <td>${user.documento}</td>
                    <td>${user.telefono}</td>
                    <td>${user.email}</td>
                    <td>${user.pais_origen}</td>
                    <td>${user.password}</td>
                    <td>
                        <button onclick="editUser(${user.id_usuario})">Editar</button>
                        <button onclick="deleteUser(${user.id_usuario})">Eliminar</button>
                    </td>
                </tr>
            `;
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    }
}

// Función para convertir fecha de formato completo a YYYY-MM-DD
function convertirFechaCompleta(fechaCompleta) {
    const fecha = new Date(fechaCompleta);
    const year = fecha.getFullYear();
    const month = ('0' + (fecha.getMonth() + 1)).slice(-2); // Obtener mes (agregar 1 porque enero es 0)
    const day = ('0' + (fecha.getDate()+1)).slice(-2); // Obtener día

    // Construir la fecha en formato YYYY-MM-DD
    const fechaFormateada = `${year}-${month}-${day}`;
    return fechaFormateada;
}

