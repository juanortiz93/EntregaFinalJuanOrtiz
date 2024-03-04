document.addEventListener("DOMContentLoaded",function(){
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let tarjeta;//Declaración de variables

// array para guardar los productos que se van a mostrar en e-commerce
const productos = [
    {
        id: 1,
        nombre: "TV Sony 46 pulgadas",
        valor: 3500000,
        imagen: "./img/tv50pulgadas.jpg"

    },
    {
        id: 2,
        nombre: "iPhone 15 Pro Max",
        valor: 6550000,
        imagen: "./img/iphone15promax.jpg"

    },
    {
        id: 3,
        nombre: "Celular Samsung S24 Ultra",
        valor: 5500000,
        imagen: "./img/samsungS24.jpeg"

    },
    {
        id: 4,
        nombre: "Computador Acer 15 pulgadas",
        valor: 4600000,
        imagen: "./img/acer15.jpeg"

    },
    {
        id: 5,
        nombre: "Audifonos Bose",
        valor: 2400000,
        imagen: "./img/boseHeadset.jpeg"

    },
    {
        id: 7,
        nombre: "Audifonos Sony Wh 1000xm5",
        valor: 1700000,
        imagen: "./img/sony1000m5.jpg"

    },
    {
        id: 7,
        nombre: "Xbox Series X",
        valor: 2600000,
        imagen: "./img/xboxx.png"

    },
    {
        id: 8,
        nombre: "Play Statation 5",
        valor: 3100000,
        imagen: "./img/play5.jpg"

    },
    {
        id: 9,
        nombre: "Parlante JBL Flip 6 Bluetooth",
        valor: 800000,
        imagen: "./img/jbl.jpg"

    },
    {
        id: 10,
        nombre: "Barra de Sonido HW-C450",
        valor: 1200000,
        imagen: "./img/BarraSonido.jpg"

    },
   


];

function agregarAlCarrito(producto){
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const productoExistente = carrito.find(item => item.id === producto.id);

    if(productoExistente){
        productoExistente.cantidad+=1;
    }else {
        carrito.push({id: producto.id, nombre: producto.nombre, imagen: producto.imagen, precio: producto.valor, cantidad: 1})
    }
    localStorage.setItem("carrito",JSON.stringify(carrito));
    
}

   
    const mostrarProductos = document.getElementById('cardContainer');
   
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
              

    });

    const carritoBtn = document.getElementById('carritoBtn');
    carritoBtn.addEventListener('click', function(){
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        if (carrito.length < 1){
           alert("No ha elegido ningun producto");
           
        } else {
            window.location.href = './mediosDePago.html'
        }
    })
  

});





    
    

    


