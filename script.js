const form = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // evita recarga de página

    // Capturamos valores
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const edad = document.getElementById("edad").value.trim();

    // Limpiar mensajes anteriores
    mensaje.textContent = "";
    document.getElementById("error-nombre").textContent = "";
    document.getElementById("error-correo").textContent = "";
    document.getElementById("error-edad").textContent = "";

    let formValido = true;

    // Validaciones
    if (!nombre) {
        document.getElementById("error-nombre").textContent = "El nombre es obligatorio";
        formValido = false;
    }

    if (!correo) {
        document.getElementById("error-correo").textContent = "El correo es obligatorio";
        formValido = false;
    } else if (!validarCorreo(correo)) {
        document.getElementById("error-correo").textContent = "Formato de correo inválido";
        formValido = false;
    }

    // Validación de edad con mensaje debajo del input
    if (!edad) {
        document.getElementById("error-edad").textContent = "La edad es obligatoria";
        formValido = false;
    } else if (isNaN(edad) || Number(edad) <= 18) {
        document.getElementById("error-edad").textContent = "Debes ser mayor de 18 años";
        formValido = false;
    }

    // Si todo es correcto
    if (formValido) {
        mensaje.textContent = `¡Registro exitoso! Bienvenido, ${nombre}`;
        mensaje.className = "exito";
        form.reset();
    }
});

// Función simple para validar correo
function validarCorreo(correo) {
    const re = /\S+@\S+\.\S+/;
    return re.test(correo);
}

// Opcional: quitar error de edad mientras se escribe
document.getElementById("edad").addEventListener("input", function () {
    document.getElementById("error-edad").textContent = "";
});