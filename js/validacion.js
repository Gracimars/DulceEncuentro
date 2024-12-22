// Obtener el formulario
const formulario = document.getElementById("miFormulario");

// Escuchar el evento submit
formulario.addEventListener("submit", (event) => {
  // Prevenir el envío del formulario si hay errores
  event.preventDefault();

  // Obtener los valores de los campos
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Referencias a los mensajes de error
  const errorNombre = document.getElementById("errorNombre");
  const errorEmail = document.getElementById("errorEmail");
  const errorMensaje = document.getElementById("errorMensaje");

  // Inicializar validación general
  let formularioValido = true;

  // Validar nombre
  if (nombre === "") {
    errorNombre.textContent = "El nombre es obligatorio.";
    errorNombre.classList.remove("d-none");
    formularioValido = false;
  } else if (nombre.length < 3) {
    errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
    errorNombre.classList.remove("d-none");
    formularioValido = false;
  } else {
    errorNombre.classList.add("d-none");
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorEmail.textContent = "El email no tiene un formato válido.";
    errorEmail.classList.remove("d-none");
    formularioValido = false;
  } else {
    errorEmail.classList.add("d-none");
  }

  // Validar mensaje
  if (mensaje === "") {
    errorMensaje.textContent = "El mensaje es obligatorio.";
    errorMensaje.classList.remove("d-none");
    formularioValido = false;
  } else if (mensaje.length < 10) {
    errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
    errorMensaje.classList.remove("d-none");
    formularioValido = false;
  } else {
    errorMensaje.classList.add("d-none");
  }

  // Si el formulario es válido
  if (formularioValido) {
    alert("Formulario enviado correctamente.");

    // Crear un objeto literal para los datos del formulario
    const formularioContacto = {
      nombre: nombre,
      email: email,
      mensaje: mensaje,
    };

    // Simulación del envío al backend
    console.log("Datos enviados al backend:", formularioContacto);

    // Limpiar el formulario
    formulario.reset();
  }
});
