
alert("¡Bienvenidos al Galpón Bebidas!");

function pagina() {
    let repeat = true;
    let ciclo = true;
    let totalCompra = 0;
    const carrito = [];

    while(repeat) {
        let bienvenida = prompt("Ingrese su nombre y apellido: ").toUpperCase().trim();
        
        if(bienvenida !== null && bienvenida !== "" && isNaN(bienvenida)) {
            alert("¡Bienvenido " + bienvenida + "!");
            repeat = false;
        } else {
            alert("¡Ingresaste mal los datos. Vuelve a intentarlo!");
        }
    }

    while(ciclo) {
        let edad = parseInt(prompt("Ingrese su edad: "));
        if(edad >= 18) {
            alert("Eres mayor de edad, puedes comprar bebidas");
            alert("¡A continuación nuestra lista de precios!");
            ciclo = false;
        } else if(edad !== null && isNaN(edad)) {
            alert("Ingresaste mal la edad, vuelve a intentarlo");
        } else {
            alert("Eres menor de edad, no puedes comprar bebidas");
            return;
        }
    }

    const Producto = function(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    };

    let producto1 = new Producto("FERNET", 12000, 6);
    let producto2 = new Producto("SMIRNOFF", 7000, 12);
    let producto3 = new Producto("WHISKY", 10700, 4);
    let producto4 = new Producto("GANCIA", 4500, 10);

    const lista = [producto1, producto2, producto3, producto4];

    let todosLosProductos = lista.map((Producto) => Producto.nombre + " " + "$" + Producto.precio);
    alert(todosLosProductos.join(" - "));

    function buscarYAgregarProducto() {
        let palabraClave = prompt("Ingrese la bebida que desea comprar: ").toUpperCase().trim();
        let productosEncontrados = lista.filter((x) => x.nombre.toUpperCase() === palabraClave);

        if (productosEncontrados.length > 0) {
            let productoEncontrado = productosEncontrados[0];
            carrito.push(productoEncontrado);
            totalCompra += productoEncontrado.precio;
            alert("Has agregado " + productoEncontrado.nombre + " a tu carrito.");
        } else {
            alert("No hay ninguna coincidencia con " + palabraClave);
        }
    }

    buscarYAgregarProducto();

    let respuesta = prompt("¿Desea comprar otra bebida? (SI/NO)").toUpperCase().trim();
    while(respuesta === "SI") {
        buscarYAgregarProducto();
        respuesta = prompt("¿Desea comprar otra bebida? (SI/NO)").toUpperCase().trim();
    }


    let resultadoTotal = lista.find(() => true); // Obtener el resultado de la compra total
    if (resultadoTotal) {
        alert("El resultado total de tu compra es: $" + totalCompra);
    } else {
        alert("No has realizado ninguna compra.");
    }

    alert("Muchas gracias por su compra!")
}

pagina();
