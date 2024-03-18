document.addEventListener("DOMContentLoaded",function(){

    function agregarAlCarrito(producto){
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        const productoExistente = carrito.find(item => item.id === producto.id);

        if(productoExistente){
            productoExistente.cantidad+=1;
        }else {
            carrito.push({id: producto.id, nombre: producto.nombre, imagen: producto.imagen, precio: producto.valor, cantidad: 1})
        }
        Toastify({
            text: "Producto agregado al carrito",
            duration: 1000,
            className: "info",
            style: {
                background: "linear-gradient(to right, #d48723, #d48723)",
            }
        }).showToast();
        localStorage.setItem("carrito",JSON.stringify(carrito));
        
    }

    async function traerProductos(){
        try{
            const responseProductos = await fetch("https://61f81623783c1d0017c445b9.mockapi.io/api/v1/productos")
            const productos = await responseProductos.json();
            console.log(productos);
            return productos
            
        }
        catch(error){
            Swal.fire({
                title: 'Error',
                text: 'No hay productos disponibles, vuelva mas tarde',
                icon: 'error',
                confirmButtonText: 'Volver'
               })
        }
    };

    async function mostrarProductos(){
        try{
            
            const mostrarProductos = document.getElementById('cardContainer');
            const productos = await traerProductos()
            
            
            productos.forEach(producto => {
                const cardDiv = document.createElement("div");
                cardDiv.classList.add("card");
                const imagen = document.createElement("img");
                imagen.src = producto.imagen;
                const nombreH6 = document.createElement("h6");
                nombreH6.textContent = producto.nombre;
                const precioP = document.createElement("p");
                precioP.textContent = `$${new Intl.NumberFormat('es-CO').format(producto.valor)}`;
                const agregarBtn = document.createElement("button");
                agregarBtn.textContent = "Añadir al carrito";
                agregarBtn.addEventListener('click',() =>{
                    agregarAlCarrito(producto);
                    
                })
            
                cardDiv.appendChild(imagen);
                cardDiv.appendChild(nombreH6);
                cardDiv.appendChild(precioP);
                cardDiv.appendChild(agregarBtn);
                mostrarProductos.appendChild(cardDiv);
                    

            })
        }
        catch(error){
            Swal.fire({
                title: 'Error',
                text: 'No hay productos disponibles, vuelva mas tarde',
                icon: 'error',
                confirmButtonText: 'Volver'
               })
        }
    };
  
    const carritoBtn = document.getElementById('carritoBtn');
    carritoBtn.addEventListener('click', function(){
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        if (carrito.length < 1){
           //alert("No ha elegido ningun producto");
           Swal.fire({
            title: 'Carrito vacio',
            text: 'Aun no ha elegido ningun producto',
            icon: 'error',
            confirmButtonText: 'Volver'
           })
           
        } else {
            window.location.href = './mediosDePago.html'
        }
    })
    mostrarProductos();

});





    
    

    


