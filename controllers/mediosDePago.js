document.addEventListener("DOMContentLoaded",function(){
    let  medioDePago ;
   
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
        Toastify({
            text: "Producto eliminado del carrito",
            duration: 2000,
            className: "info",
            style: {
                background: "linear-gradient(to right, #DABA28, #DABA28)",
            }
        }).showToast();
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito();
    }

 
    function mostrarCarrito(){
        mostrarProductos.innerHTML = "<h3>Carrito de compras</h3>";
        carrito.forEach(producto => {
                const cardDiv = document.createElement("div");
                cardDiv.classList.add("cardCarrito");
                const descripcionProducto = document.createElement('div');
                descripcionProducto.classList.add('elementoProducto');
                const imagen = document.createElement("img");
                imagen.src = producto.imagen;
                const nombreH6 = document.createElement("p");
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
                descripcionProducto.appendChild(nombreH6);
                descripcionProducto.appendChild(precioP);
                descripcionProducto.appendChild(cantidad);
                cardDiv.appendChild(descripcionProducto);
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

        let totales = [{"subtotal": subtotal,"iva": iva,"total": total}];

        localStorage.setItem("total",JSON.stringify(totales));


    }

    function actualizarCarrito() {
        carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        //total = JSON.parse(localStorage.getItem("total")) || [];
        if(carrito.length === 0){
            window.location.href = './index.html';
            
        }else {
            mostrarProductos.innerHTML = "";
            mostrarTotal.innerHTML = "<h3>Detalle del Producto</h3>";

            mostrarCarrito();
            calcularTotal();
        }
                
    }

    async function traerMediosDePago(){
        try{
            const responseMediosDePago = await fetch("https://61f81623783c1d0017c445b9.mockapi.io/api/v1/medioDePago")
            medioDePago = await responseMediosDePago.json();
            console.log(medioDePago);
            return medioDePago
        }catch(error){
            Swal.fire({
                title: 'Error',
                text: 'No hay medios de pago disponibles, vuelva mas tarde',
                icon: 'error',
                confirmButtonText: 'Volver'
            })
        }    
    }
 
    async function generarFormMediosdePago() {
        
        medioDePago = await traerMediosDePago();   

        const formularioMedioPago = document.getElementById("form-medios-pago");

        medioDePago.forEach(opcion => {
            const label = document.createElement("label");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "medio-pago";
            radio.value = opcion.id;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(`${opcion.tarjetaNombre} - ${opcion.descuento}%`));

            formularioMedioPago.appendChild(label);
        });

        const botonContinuar = document.createElement("button");
        botonContinuar.type = "button";
        botonContinuar.textContent = "Continuar";
        botonContinuar.addEventListener("click", guardarMedioPago);
        formularioMedioPago.appendChild(botonContinuar);

        
    };

    function guardarMedioPago() {
        const radios = document.querySelectorAll('input[name="medio-pago"]');
        let medioPagoSeleccionado;

        radios.forEach(radio => {
        if (radio.checked) {
            medioPagoSeleccionado = radio.value;
        }
        });
        const medioDePagoElegido = medioDePago.find(medioPago => medioPago.id == medioPagoSeleccionado);
        if (medioDePagoElegido) {

        localStorage.setItem('medioDePagoElegido',JSON.stringify(medioDePagoElegido));
        window.location.href = './checkout.html';
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Aun no ha elegido un medio de pago',
                icon: 'error',
                confirmButtonText: 'Volver'
            })
        }
    }

    mostrarCarrito();
    calcularTotal();
    generarFormMediosdePago();

});