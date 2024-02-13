/*let producto,tarjeta;//Declaración de variables

const productos = [
    {
        nombre: "TV Sony 46 pulgadas",
        valor: 3500000,
        imagen: "./img/tv50pulgadas.jpg"

    },
    {
        nombre: "Celular Samsung S24 Ultra",
        valor: 5500000,
        imagen: "./img/samsungS24.jpeg"

    },
    {
        nombre: "Computador Acer 15 pulgadas",
        valor: 4600000,
        imagen: "./img/acer15.jpeg"

    },
    {
        nombre: "Audifonos Bose",
        valor: 2400000,
        imagen: "./img/boseHeadset.jpeg"

    },

];

const medioDePago = [
    {
        tarjetaNombre: "Tarjeta Falabella",
        descuento: 20
    },
    {
        tarjetaNombre: "Tarjeta Tuya",
        descuento: 30
    },
    {
        tarjetaNombre: "Tarjeta Davivienda",
        descuento: 25
    },
    {
        tarjetaNombre: "Tarjeta Scotiabank",
        descuento: 10
    },

]
class Producto{
    constructor(nombreProducto,valorProducto,imagenProducto){
        this.nombreProducto = nombreProducto;
        this.valorProducto = valorProducto;
        this.imagenProducto = imagenProducto;
    }

}

class Tarjeta{
    constructor(nombreTarjeta,descuentoTarjeta){
        this.nombreTarjeta = nombreTarjeta;
        this.descuentoTarjeta = descuentoTarjeta;
    }
}




function elegirMedioDePago(){// funcion para mostrar el menu para elegir el medio de pago a usar para cotizar el descuento
        let mensajeMediodePago= "por favor eliga uno de nuestros medios pago:\n ";
        medioDePago.forEach((medioPago,indice)=>{    
        mensajeMediodePago +=  (indice+1)+". "+medioPago.tarjetaNombre+"\n";    
        });
      let opcionTarjeta = prompt(mensajeMediodePago);
       if (opcionTarjeta >= 0 && opcionTarjeta <= medioDePago.length) {
            tarjeta = new Tarjeta(medioDePago[opcionTarjeta-1].tarjetaNombre,medioDePago[opcionTarjeta-1].descuento); 
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

/*Menu principal que contiene los productos disponibles para ser seleccionados y va llamando en cada opción las distintas funciones
para seleccionar el medio de pago aplicar el descuento y aplicar el cupon de descuento y mostrar el checkout al usuario
*/
/*let mensajeMenu= "Bienvenido, por favor eliga uno de nuestros productos\n Ingrese la opción que desea: \n";
productos.forEach((product,indice)=>{    
    mensajeMenu +=  (indice+1)+". "+product.nombre+"\n";    
});

    let opcion = prompt(mensajeMenu+" 5. Salir\n");
     producto = new Producto(productos[opcion-1].nombre,parseInt(productos[opcion-1].valor,productos[opcion-1].imagen))
     console.log("Producto Seleccionado: "+producto.nombreProducto+". Valor: $"+producto.valorProducto);
     elegirMedioDePago();
     calcularValorDescuento();
    aplicarCupon();*/





    
    

    


