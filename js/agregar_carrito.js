document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar todos los botones con la clase "btn-agregar"
  const botonesAgregar = document.querySelectorAll(".btn-agregar");
  console.log(botonesAgregar);

  // Agregar evento "click" a cada botón
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", (event) => {
      event.preventDefault();

      // Obtener datos del producto
      const nombre = boton.getAttribute("data-nombre");
      const precio = boton.getAttribute("data-precio");
      console.log(nombre, precio);

      // Obtener el carrito actual de localStorage o inicializarlo como vacío
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

      // Crear un objeto con los datos del producto
      const producto = { nombre, precio };

      // Agregar el producto al carrito
      carrito.push(producto);

      // Guardar el carrito actualizado en localStorage
      localStorage.setItem("carrito", JSON.stringify(carrito));

      // Confirmación en consola (puedes agregar una alerta si lo prefieres)
      console.log(`${nombre} agregado al carrito.`);

      // Crear y mostrar el mensaje de confirmación
      let mensaje = document.createElement("small");
      mensaje.textContent = "Producto agregado exitosamente";
      mensaje.style.color = "white";
      mensaje.style.display = "block"; // Asegura que sea visible
      mensaje.style.marginTop = "5px";

      // Insertar el mensaje después del botón
      boton.parentNode.appendChild(mensaje);

      // Eliminar el mensaje después de 3 segundos
      setTimeout(() => {
        mensaje.remove();
      }, 3000);
    });
  });
});
