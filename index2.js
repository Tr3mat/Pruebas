var carrito = [];

function agregarProducto() {
	var producto = document.getElementById("producto").value;
	var precio = parseInt(document.getElementById("precio").value);
	var cantidad = parseInt(document.getElementById("cantidad").value);
	var subtotal = precio * cantidad;
	var productoExistente = false;

	for (var i = 0; i < carrito.length; i++) {
		if (carrito[i].producto === producto) {
			carrito[i].cantidad += cantidad;
			carrito[i].subtotal += subtotal;
			productoExistente = true;
			break;
		}
	}

	if (!productoExistente) {
		carrito.push({producto: producto, precio: precio, cantidad: cantidad, subtotal: subtotal});
	}

	mostrarCarrito();
}

function eliminarProducto(index) {
	carrito.splice(index, 1);
	mostrarCarrito();
}

function mostrarCarrito() {
	var tabla = document.getElementById("tabla");
	var total = 0;

	tabla.innerHTML = "<tr><th>Producto</th><th>Precio</th><th>Cantidad</th><th>Subtotal</th><th>Acciones</th></tr>";

	for (var i = 0; i < carrito.length; i++) {
		var fila = "<tr><td>" + carrito[i].producto + "</td><td>" + carrito[i].precio + "</td><td>" + carrito[i].cantidad + "</td><td>" + carrito[i].subtotal + "</td><td><button onclick='eliminarProducto(" + i + ")'>Eliminar</button></td></tr>";
		tabla.innerHTML += fila;
		total += carrito[i].subtotal;
	}

	document.getElementById("total").innerHTML = total;
}