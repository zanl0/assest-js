let menu = [
    { nombre: "Hamburguesa", precio: 10 },
    { nombre: "Pizza", precio: 12 },
    { nombre: "Ensalada", precio: 8 },
    { nombre: "Sopa", precio: 6 },
    // Agrega más elementos según el menú que quieras ofrecer
];

let pedido = [];
let totalPedido = 0;

function agregarAlPedido() {
    let opcion = document.getElementById("opcion").value;
    let item = menu.find(elemento => elemento.nombre.toLowerCase() === opcion.toLowerCase());

    if (item) {
        pedido.push(item);
        totalPedido += item.precio;
        actualizarPedido();
    } else {
        alert("Lo siento, ese artículo no está en el menú.");
    }

    document.getElementById("opcion").value = ""; // Limpiar el input después de agregar al pedido
}

function pagar() {
    if (pedido.length === 0) {
        alert("No has seleccionado ningún artículo.");
    } else {
        alert(`El total a pagar es: $${totalPedido}`);
        // Aquí podrías enviar el pedido a un servidor, guardar la información, etc.
        reiniciarPedido();
    }
}

function actualizarPedido() {
    let pedidoHTML = "<h2>Pedido:</h2>";
    pedido.forEach(item => {
        pedidoHTML += `<p>${item.nombre} - $${item.precio}</p>`;
    });
    document.getElementById("pedido").innerHTML = pedidoHTML;

    document.getElementById("total").textContent = `Total: $${totalPedido}`;
}

function reiniciarPedido() {
    pedido = [];
    totalPedido = 0;
    actualizarPedido();
}
