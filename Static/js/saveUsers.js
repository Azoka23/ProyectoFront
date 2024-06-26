// Archivo: Static/Js/saveUsers.js

import { createUser } from './crud-usuarios-fetch.js';
import Swal from 'sweetalert2';

async function saveUser(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

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
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor complete todos los campos.'
        });
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
        const data = await createUser(userData);

        if (data.message === 'Usuario creado exitosamente') {
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: 'El usuario ha sido registrado correctamente.'
            }).then(() => {
                window.location.href = '/index.html'; // Redirigir al usuario a la página de inicio
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error al registrar el usuario.'
            });
        }
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al conectar con el servidor.'
        });
    }
}

document.getElementById('registerForm').addEventListener('submit', saveUser);
