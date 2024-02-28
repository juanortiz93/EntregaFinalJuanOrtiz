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
        id: 6,
        nombre: "TV Prueba 46 pulgadas",
        valor: 3550000,
        imagen: "./img/tv50pulgadas.jpg"

    },
    {
        id: 2,
        nombre: "Celular Samsung S24 Ultra",
        valor: 5500000,
        imagen: "./img/samsungS24.jpeg"

    },
    {
        id: 3,
        nombre: "Computador Acer 15 pulgadas",
        valor: 4600000,
        imagen: "./img/acer15.jpeg"

    },
    {
        id: 4,
        nombre: "Audifonos Bose",
        valor: 2400000,
        imagen: "./img/boseHeadset.jpeg"

    },

];
// array con medios de pago disponibles
const medioDePago = [
    {
        id: 1,
        tarjetaNombre: "Tarjeta Falabella",
        descuento: 20
    },
    {
        id: 2,
        tarjetaNombre: "Tarjeta Tuya",
        descuento: 30
    },
    {
        id: 3,
        tarjetaNombre: "Tarjeta Davivienda",
        descuento: 25
    },
    {
        id: 4,
        tarjetaNombre: "Tarjeta Scotiabank",
        descuento: 10
    },

]

//clase para albergar el producto elegido en un objeto
class Producto{
    constructor(id,nombreProducto,valorProducto,imagenProducto){
        this.id = id;
        this.nombreProducto = nombreProducto;
        this.valorProducto = valorProducto;
        this.imagenProducto = imagenProducto;
    }

}
// clase para albergar el medio de pago elegido por el usuario
class Tarjeta{
    constructor(id,nombreTarjeta,descuentoTarjeta){
        this.id = id;
        this.nombreTarjeta = nombreTarjeta;
        this.descuentoTarjeta = descuentoTarjeta;
    }
}




function elegirMedioDePago(){// funcion para mostrar el menu para elegir el medio de pago a usar para cotizar el descuento por medio de un foreach
        let mensajeMediodePago= "por favor eliga uno de nuestros medios pago:\n ";
        medioDePago.forEach((medioPago)=>{    
        mensajeMediodePago +=  (medioPago.id)+". "+medioPago.tarjetaNombre+"\n";    
        });
      let opcionTarjeta = prompt(mensajeMediodePago);
       if (opcionTarjeta >= 0 && opcionTarjeta <= medioDePago.length) {
            tarjeta = new Tarjeta(medioDePago[opcionTarjeta-1].tarjetaNombre,medioDePago[opcionTarjeta-1].descuento); // instancia del objeto para guardar el medio de pago elegido
       } else if ( opcionTarjeta > medioDePago.length){
        console.warn("Opción Invalida, por favor ingrese un numero valido:")
       } else {
        console.warn("Opción Invalida, por favor ingrese un numero valido:")
       }
            
         
}

function aplicarIVA(valor){
    let iva = valor*0.19;
    return iva;
}

function calcularValorDescuento(){// funcion para calcular el valor del producto con base en el descuento seleccionado 
    let valorConDescuento= parseInt(producto.valorProducto-(producto.valorProducto*(tarjeta.descuentoTarjeta/100)));
    let subtotal = valorConDescuento-aplicarIVA(valorConDescuento);
    console.log("Checkout\n Producto: "+producto.nombreProducto+"\n Medio de pago: "+tarjeta.nombreTarjeta+"\n Valor: $"+producto.valorProducto+"\n Descuento: "+tarjeta.descuentoTarjeta+"%\n Subtotal: $"+subtotal+"\n IVA: $"+aplicarIVA(valorConDescuento)+"\n Valor Total: $"+valorConDescuento);
}

function CalcularDescuentoCupon(descuentoCupon,cadenaCupon){//funcion para calcular el nuevo valor de acuerdo al cupon de descuento aplicado
    valorConDescuento = parseInt(producto.valorProducto-(producto.valorProducto*((tarjeta.descuentoTarjeta+descuentoCupon)/100)));
    let subtotal = valorConDescuento-aplicarIVA(valorConDescuento);
    console.log("Checkout\n Producto: "+producto.nombreProducto+"\n Medio de pago: "+tarjeta.nombreTarjeta+"\n Valor: $"+producto.valorProducto+"\n Cupon: "+cadenaCupon+"\n Descuento: "+parseInt(tarjeta.descuentoTarjeta+descuentoCupon)+"%\n Subtotal: $"+subtotal+"\n IVA: $"+aplicarIVA(valorConDescuento)+"\n Valor Total: $"+valorConDescuento);
}

function aplicarCupon(){// funcion para aplicar el descuento de acuerdo al cupon seleccionado si el usuario dice SI o NO
    let cupon = prompt("¿Tiene un cupón de descuento? (SI/NO)");
    if(cupon == "SI"){
        cadenaCupon = prompt("Ingrese el cupón de descuento por favor: ");
        if(cadenaCupon === "DESCUENTOENERO"){
            CalcularDescuentoCupon(20,"DESCUENTOENERO");
            alert("Gracias, vuelva pronto");

        }
        else if(cadenaCupon === "DESCUENTO10"){
            CalcularDescuentoCupon(10,"DESCUENTO10");
            alert("Gracias, vuelva pronto");
        }
        else if(cadenaCupon === "DESCUENTO5"){
            CalcularDescuentoCupon(5,"DESCUENTO5");
            alert("Gracias, vuelva pronto");
        }
        else{
            console.warn("Codigo de descuento invalido");
            calcularValorDescuento();
        }
    }
    else  {
        calcularValorDescuento();
        alert("Gracias, vuelva pronto");


    }
    }

/*Menu principal que contiene los productos disponibles para ser seleccionados por medio de un foreachy va llamando en cada opción las distintas funciones
para seleccionar el medio de pago aplicar el descuento y aplicar el cupon de descuento y mostrar el checkout al usuario
*/
//let mensajeMenu= "Bienvenido, por favor eliga uno de nuestros productos\n Ingrese la opción que desea: \n";
//productos.forEach((product,indice)=>{    
    //mensajeMenu +=  (indice+1)+". "+product.nombre+"\n";    
//});


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

    //let opcion = prompt(mensajeMenu+" 5. Salir\n");
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
            window.location.href = './pages/mediosDePago.html'
        }
    })
     //producto = new Producto(productos[opcion-1].nombre,parseInt(productos[opcion-1].valor,productos[opcion-1].imagen))
     //console.log("Producto Seleccionado: "+producto.nombreProducto+". Valor: $"+producto.valorProducto);
     //elegirMedioDePago();
     //calcularValorDescuento();
    //aplicarCupon();


});





    
    

    


