document.addEventListener("DOMContentLoaded",function(){
    
    
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let medioDePagoElegido = JSON.parse(localStorage.getItem("medioDePagoElegido")) || [];
    let total = JSON.parse(localStorage.getItem("total")) || [];
    const mostrarProductos = document.getElementById('info-producto-checkout');

    function mostrarCarrito(){
        carrito.forEach(producto => {
                const cardDiv = document.createElement("div");
                cardDiv.classList.add("div-detalle-checkout");
                const descripcionProducto = document.createElement('div');
                descripcionProducto.classList.add('elementoProducto');
                const imagen = document.createElement("img");
                imagen.classList.add('img-checkout');
                imagen.src = `${producto.imagen}`;
                const nombreH6 = document.createElement("p");
                nombreH6.textContent = producto.nombre;
                const precioP = document.createElement("p");
                precioP.textContent = `$${new Intl.NumberFormat('es-CO').format(producto.precio)}`;
                const cantidad = document.createElement("p");
                cantidad.textContent = `Cantidad ${producto.cantidad}`;
                
               
                cardDiv.appendChild(imagen);
                descripcionProducto.appendChild(nombreH6);
                descripcionProducto.appendChild(precioP);
                descripcionProducto.appendChild(cantidad);
                cardDiv.appendChild(descripcionProducto);
                
                mostrarProductos.appendChild(cardDiv);
            
         });
    
    
    }
    function mostrarTotales(){
        const mostrarTotal = document.getElementById('totales')
        
                  
        precioTotal = parseInt(total[0].total);
        const valorTotal = document.createElement('p');
        valorTotal.textContent = `Total: $${new Intl.NumberFormat('es-CO').format(precioTotal)}`
        const tarjetaText = document.createElement('p');
        tarjetaText.textContent = `Medio de pago: ${medioDePagoElegido.tarjetaNombre}`;
        const descuento = parseInt(precioTotal*medioDePagoElegido.descuento/100);
        const labelDescuento = document.createElement('p');
        labelDescuento.textContent =`Descuento: $${new Intl.NumberFormat('es-CO').format(descuento)} - ${medioDePagoElegido.descuento}%`
        const nuevoTotal = precioTotal-descuento;
        const nuevoSubTotal = (nuevoTotal*0.81);
        const valorSubtotal = document.createElement("p");
        valorSubtotal.textContent = `Subtotal: $${new Intl.NumberFormat('es-CO').format(nuevoSubTotal)}`;
        
        const nuevoIva = (nuevoTotal*0.19);
        const valorIVA = document.createElement('p');
        valorIVA.textContent = `IVA: $${new Intl.NumberFormat('es-CO').format(nuevoIva)}`;
        const nuevoValorTotal = document.createElement('p');
        nuevoValorTotal.textContent = `Total: $${new Intl.NumberFormat('es-CO').format(nuevoTotal)}`
        
        const labelCupon = document.createElement('p');
        labelCupon.textContent= 'Ingresa cupón de descuento';
        const labelCuponText = document.createElement("label");
        const cuponText = document.createElement("input");
        cuponText.type = "text";
        cuponText.name = "medio-pago";
        const aplicarCuponBtn = document.createElement('button');
        aplicarCuponBtn.textContent = 'Aplicar';
        aplicarCuponBtn.addEventListener("click",() => {
            if(cuponText.value === ''){
                alert("Por favor ingrese un cupón");
                
            }else if(cuponText.value == 'DESCUENTOENERO'){
                const nuevoTotalCupon = parseInt(precioTotal-(precioTotal*((medioDePagoElegido.descuento+20)/100)));
                valorSubtotal.textContent = `Subtotal: $${new Intl.NumberFormat('es-CO').format(nuevoTotalCupon*0.81)}`;
                valorIVA.textContent = `IVA: $${new Intl.NumberFormat('es-CO').format(nuevoTotalCupon*0.19)}`;
                nuevoValorTotal.textContent = `Total: $${new Intl.NumberFormat('es-CO').format(nuevoTotalCupon)} - Descuento 20%`;
  
            }
            else if(cuponText.value === 'DESCUENTO10'){
                const nuevoTotalCupon = parseInt(precioTotal-(precioTotal*((medioDePagoElegido.descuento+10)/100)));
                valorSubtotal.textContent = `Subtotal: $${new Intl.NumberFormat('es-CO').format(nuevoTotalCupon*0.81)}`;
                valorIVA.textContent = `IVA: $${new Intl.NumberFormat('es-CO').format(nuevoTotalCupon*0.19)}`;
                nuevoValorTotal.textContent = `Total: $${new Intl.NumberFormat('es-CO').format(nuevoTotalCupon)} - Descuento 10%`
                
                        
            }
            else if(cuponText.value === 'DESCUENTO5'){
                const nuevoTotalCupon = parseInt(precioTotal-(precioTotal*((medioDePagoElegido.descuento+5)/100)));
                valorSubtotal.textContent = `Subtotal: $${new Intl.NumberFormat('es-CO').format(nuevoTotalCupon*0.81)}`;
                valorIVA.textContent = `IVA: $${new Intl.NumberFormat('es-CO').format(nuevoTotalCupon*0.19)}`;
                nuevoValorTotal.textContent = `Total: $${new Intl.NumberFormat('es-CO').format(nuevoTotalCupon)} - Descuento 5%` 
                
                      
            }
            else{
                alert("Cupón de descuento invalido");
                
            }
        });

        const finalizarBtn = document.createElement('button');
        finalizarBtn.textContent = 'Finalizar Compra';
        finalizarBtn.addEventListener('click',() =>{
            alert("Muchas gracias por su compra, vuelva pronto");
            window.location.href = './index.html';
            localStorage.clear();
        });
            
       

        
        mostrarTotal.appendChild(valorTotal);
        mostrarTotal.appendChild(tarjetaText);
        mostrarTotal.appendChild(labelDescuento);
        mostrarTotal.appendChild(valorSubtotal);
        mostrarTotal.appendChild(valorIVA);
        mostrarTotal.appendChild(labelCupon);
        labelCuponText.appendChild(cuponText);
        mostrarTotal.appendChild(labelCuponText);
        mostrarTotal.appendChild(aplicarCuponBtn);
        mostrarTotal.appendChild(nuevoValorTotal);
        mostrarTotal.appendChild(finalizarBtn);

    }
    function calcularValorDescuento(descuento){
        nuevoTotal = parseInt(nuevoTotal-(nuevoTotal*((descuento)/100)));
        


        

        
    };
mostrarCarrito();
mostrarTotales();
});

