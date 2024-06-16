// saveUser.js

function saveUser() {
    // Obtener los valores del formulario
    var apellido = document.getElementById("apellido").value;
    var nombre = document.getElementById("nombre").value;
    var documento = document.getElementById("documento").value;
    var telefono = document.getElementById("telefono").value;
    var fechaNacimiento = document.getElementById("release-date").value;
    var email = document.getElementById("email").value;
    var pais = document.getElementById("pais").value;
    var password = document.getElementById("password").value;

    // Crear una nueva fila en la tabla
    var table = document.getElementById("list-table-event").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);

    // Insertar celdas con los valores del usuario
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);

    cell1.innerHTML = nombre;
    cell2.innerHTML = apellido;
    cell3.innerHTML = fechaNacimiento;
    cell4.innerHTML = documento;
    cell5.innerHTML = telefono;
    cell6.innerHTML = email;
    cell7.innerHTML = pais;
    cell8.innerHTML = password;

    // Crear los iconos de editar y eliminar
    var editIcon = document.createElement("img");
    editIcon.src = "/Static/Imagenes/editar2.png";
    editIcon.onclick = function() {
        // Obtener los valores actuales de la fila
        var currentRow = this.parentNode.parentNode;
        var currentNombre = currentRow.cells[0].innerHTML;
        var currentApellido = currentRow.cells[1].innerHTML;
        var currentFechaNacimiento = currentRow.cells[2].innerHTML;
        var currentDocumento = currentRow.cells[3].innerHTML;
        var currentTelefono = currentRow.cells[4].innerHTML;
        var currentEmail = currentRow.cells[5].innerHTML;
        var currentPais = currentRow.cells[6].innerHTML;
        var currentPassword = currentRow.cells[7].innerHTML;

        // Reemplazar los valores con campos de entrada de texto
        currentRow.cells[0].innerHTML = '<input type="text" value="' + currentNombre + '">';
        currentRow.cells[1].innerHTML = '<input type="text" value="' + currentApellido + '">';
        currentRow.cells[2].innerHTML = '<input type="text" value="' + currentFechaNacimiento + '">';
        currentRow.cells[3].innerHTML = '<input type="text" value="' + currentDocumento + '">';
        currentRow.cells[4].innerHTML = '<input type="text" value="' + currentTelefono + '">';
        currentRow.cells[5].innerHTML = '<input type="text" value="' + currentEmail + '">';
        currentRow.cells[6].innerHTML = '<input type="text" value="' + currentPais + '">';
        currentRow.cells[7].innerHTML = '<input type="text" value="' + currentPassword + '">';

        // Cambiar el ícono de editar por un botón de guardar
        var originalContent = cell9.innerHTML;

        cell9.innerHTML = '';
        var saveButton = document.createElement("button");
        saveButton.className = "btn-save";
        saveButton.innerHTML = "Guardar";
        saveButton.onclick = function() {
            // Obtener los valores actualizados
            var updatedNombre = currentRow.cells[0].querySelector("input").value;
            var updatedApellido = currentRow.cells[1].querySelector("input").value;
            var updatedFechaNacimiento = currentRow.cells[2].querySelector("input").value;
            var updatedDocumento = currentRow.cells[3].querySelector("input").value;
            var updatedTelefono = currentRow.cells[4].querySelector("input").value;
            var updatedEmail = currentRow.cells[5].querySelector("input").value;
            var updatedPais = currentRow.cells[6].querySelector("input").value;
            var updatedPassword = currentRow.cells[7].querySelector("input").value;

            // Actualizar los valores en la fila
            currentRow.cells[0].innerHTML = updatedNombre;
            currentRow.cells[1].innerHTML = updatedApellido;
            currentRow.cells[2].innerHTML = updatedFechaNacimiento;
            currentRow.cells[3].innerHTML = updatedDocumento;
            currentRow.cells[4].innerHTML = updatedTelefono;
            currentRow.cells[5].innerHTML = updatedEmail;
            currentRow.cells[6].innerHTML = updatedPais;
            currentRow.cells[7].innerHTML = updatedPassword;

            // Restaurar el contenido original de la celda de acciones
            cell9.innerHTML = '';
            cell9.appendChild(editIcon);
            cell9.appendChild(deleteIcon);
        };

        currentRow.cells[8].appendChild(saveButton);
    };

    var deleteIcon = document.createElement("img");
    deleteIcon.src = "/Static/Imagenes/bin_trash_delete_remove_recycle_icon_146878.png";
    deleteIcon.onclick = function() {
        // Aquí puedes agregar la lógica para eliminar el usuario
        var row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);
    };

    // Limpiar la celda de acciones antes de agregar los iconos
    cell9.innerHTML = '';
    // Agregar los iconos a la celda de acciones
    cell9.appendChild(editIcon);
    cell9.appendChild(deleteIcon);

    // Limpiar los campos de entrada
    document.getElementById("apellido").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("documento").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("release-date").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pais").value = "";
    document.getElementById("password").value = "";
}
