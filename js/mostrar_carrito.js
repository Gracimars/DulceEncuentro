document.addEventListener("DOMContentLoaded", () => {
  const tablaCarrito = document.getElementById("tablaCarrito");
  const totalCarrito = document.getElementById("totalCarrito");
  const confirmarCompra = document.getElementById("confirmarCompra");

  // Obtener carrito del localStorage o inicializar como vacío
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Renderizar el carrito
  const renderizarCarrito = () => {
    // Limpiar tabla
    tablaCarrito.innerHTML = "";

    // Mostrar mensaje si el carrito está vacío
    if (carrito.length === 0) {
      tablaCarrito.innerHTML =
        "<tr><td colspan='3'>El carrito está vacío.</td></tr>";
      totalCarrito.textContent = "0.00";
      return;
    }

    // Agregar filas dinámicas para cada producto
    carrito.forEach((producto, index) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td>
          <button class="btn-danger" data-index="${index}">Eliminar</button>
        </td>
      `;
      // Añadir la fila a la tabla
      tablaCarrito.appendChild(fila);

      // Seleccionar el botón y aplicar estilos directamente
      const boton = fila.querySelector(".btn-danger");
      boton.style.backgroundColor = "#198754"; // Color de fondo verde
      boton.style.color = "var(--color-white)"; // Color del texto (blanco, desde CSS variables)
      boton.style.border = "none"; // Opcional, elimina el borde
      boton.style.padding = "5px 10px"; // Añade algo de espacio interno
      boton.style.borderRadius = "5px"; // Esquinas redondeadas, opcional
      boton.style.cursor = "pointer"; // Cambiar el cursor al pasar sobre el botón
    });

    // Calcular y mostrar el total
    calcularTotal();
  };

  // Calcular el total del carrito
  const calcularTotal = () => {
    const total = carrito.reduce(
      (suma, producto) => suma + parseFloat(producto.precio),
      0
    );
    totalCarrito.textContent = total.toFixed(2);
  };

  // Eliminar un producto del carrito
  tablaCarrito.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-danger")) {
      const index = event.target.getAttribute("data-index");

      // Confirmar eliminación (opcional)
      if (confirm("¿Deseas eliminar este producto del carrito?")) {
        carrito.splice(index, 1); // Eliminar producto
        localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizar localStorage
        renderizarCarrito(); // Volver a renderizar
      }
    }
  });

  // Confirmar la compra
  confirmarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      alert(
        "El carrito está vacío. Agrega productos antes de confirmar la compra."
      );
      return;
    }

    if (confirm("¿Estás seguro de confirmar la compra?")) {
      // Aquí puedes enviar los datos del carrito a un servidor o procesar la compra
      alert("¡Gracias por tu compra! Tu pedido ha sido confirmado.");

      // Vaciar el carrito
      carrito.length = 0; // Vacía el array
      localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualiza el localStorage
      renderizarCarrito(); // Vuelve a renderizar la tabla
    }
  });

  // Renderizar carrito al cargar la página
  renderizarCarrito();
});
