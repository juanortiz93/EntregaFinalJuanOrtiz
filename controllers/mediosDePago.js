document.addEventListener("DOMContentLoaded",function(){
 let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
 
 const mostrarProductos = document.getElementById('info-producto');
 mostrarProductos.innerHTML = "";
 const mostrarTotal = document.getElementById('totalPago')

 function removerDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoExistente = carrito.find(producto => producto.id === id);

    if(productoExistente){
        if(productoExistente.cantidad > 1){
            productoExistente.cantidad-=1;
        } else {
            carrito = carrito.filter(producto => producto.id !== id);
        }
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
  }

 
function mostrarCarrito(){
    carrito.forEach(producto => {
        const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            const imagen = document.createElement("img");
            imagen.src = `.${producto.imagen}`;
            const nombreH6 = document.createElement("h6");
            nombreH6.textContent = producto.nombre;
            const precioP = document.createElement("p");
            precioP.textContent = `$${new Intl.NumberFormat('es-CO').format(producto.precio)}`;
            const cantidad = document.createElement("p");
            cantidad.textContent = `Cantidad ${producto.cantidad}`;
            const removerBtn = document.createElement("button");
            removerBtn.textContent = "Remover";
            removerBtn.addEventListener('click',() =>{
                removerDelCarrito(producto.id); 
                
            })
            cardDiv.appendChild(imagen);
            cardDiv.appendChild(nombreH6);
            cardDiv.appendChild(precioP);
            cardDiv.appendChild(cantidad);
            cardDiv.appendChild(removerBtn);
            mostrarProductos.appendChild(cardDiv);
        
     });


}
 
function calcularTotal(){
    let subtotal = 0;
    let iva = 0;
    let total = 0;
    

    carrito.forEach(producto => {
        iva += (producto.precio*producto.cantidad*0.19);
        subtotal += producto.precio*producto.cantidad*0.81;
        total += producto.precio*producto.cantidad;
    })
    
    const valorSubtotal = document.createElement("p");
    valorSubtotal.textContent = `Subtotal: $${new Intl.NumberFormat('es-CO').format(subtotal)}`;
    const valorIVA = document.createElement('p');
    valorIVA.textContent = `IVA: $${new Intl.NumberFormat('es-CO').format(iva)}`;
    const valorTotal = document.createElement('p');
    valorTotal.textContent = `Total: $${new Intl.NumberFormat('es-CO').format(total)}`

    mostrarTotal.appendChild(valorSubtotal);
    mostrarTotal.appendChild(valorIVA);
    mostrarTotal.appendChild(valorTotal);

    let totales = [valorSubtotal,valorIVA,valorTotal]

    //localStorage.setItem("total",totales.array);


}

 function actualizarCarrito() {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    //total = JSON.parse(localStorage.getItem("total")) || [];
    if(carrito.length === 0){
        window.location.href = '../index.html';
        
    }else {
        mostrarProductos.innerHTML = "";
        mostrarTotal.innerHTML = "<h3>Detalle del Producto</h3>";

        mostrarCarrito();
        calcularTotal();
    }
   
    
    
 }
 mostrarCarrito();
 calcularTotal();


});