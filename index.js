let producto,valor,tarjeta,descuento;//Declaración de variables

function elegirMedioDePago(){// funcion para mostrar el menu para elegir el medio de pago a usar para cotizar el descuento
      let opcionTarjeta = prompt("1. Tarjeta Falabella\n 2. Tarjeta Tuya\n 3. Otro medio de pago\n Eliga el medio de pago: ");
    switch(parseInt(opcionTarjeta)){
        case 1:
            tarjeta="Tarjeta Falabella";
            descuento= 20;
            break;

        case 2:
            tarjeta="Tarjeta Tuya";
            descuento= 10;
            break;

        case 3:
            tarjeta="Otro medio de pago";
            descuento= 0;
            break;
                
    }
}

function calcularValorDescuento(){// funcion para calcular el valor del producto con base en el descuento seleccionado
    let valorConDescuento= parseInt(valor-(valor*(descuento/100)));
    console.log("Checkout\n Producto: "+producto+"\n Medio de pago: "+tarjeta+"\n Valor: $"+valor+"\n Descuento: "+descuento+"%\n Valor Total: $"+valorConDescuento);
}

function CalcularDescuentoCupon(descuentoCupon,cadenaCupon){//funcion para calcular el nuevo valor de acuerdo al cupon de descuento aplicado
    valorConDescuento = parseInt(valor-(valor*((descuento+descuentoCupon)/100)));
    console.log("Checkout\n Producto: "+producto+"\n Medio de pago: "+tarjeta+"\n Valor: $"+valor+"\n Cupon: "+cadenaCupon+"\n Descuento: "+parseInt(descuento+descuentoCupon)+"%\n Valor Total: $"+valorConDescuento);
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
    else  {2
        calcularValorDescuento();
        alert("Gracias, vuelva pronto");


    }
    }

/*Menu principal que contiene los productos disponibles para ser seleccionados y va llamando en cada opción las distintas funciones
para seleccionar el medio de pago aplicar el descuento y aplicar el cupon de descuento y mostrar el checkout al usuario
*/

    let opcion = prompt("Bienvenido, por favor eliga uno de nuestros productos\n 1. TV Sony 46 pulgadas\n 2. Celular Samsung S24\n 3. Computador Acer 15 pulgadas\n 4. Audifonos Bose\n 5. Salir\n Ingrese la opción que desea: ");
    switch(parseInt(opcion)){
        case 1:
            producto="TV Sony 46 pulgadas";
            valor= 3500000;
            console.log("Producto Seleccionado: "+producto+". Valor: $"+valor);
            elegirMedioDePago();
            calcularValorDescuento();
            aplicarCupon();
            break;

        case 2:
            producto="Celular Samsung S24";
            valor= 5500000;
            console.log("Producto Seleccionado: "+producto+". Valor: $"+valor);
            elegirMedioDePago();
            calcularValorDescuento();
            aplicarCupon();
            break;

        case 3:
            producto="Computador Acer 15 pulgadas";
            valor= 4750000;
            console.log("Producto Seleccionado: "+producto+". Valor: $"+valor);
            elegirMedioDePago();
            calcularValorDescuento();
            aplicarCupon();
            break;
        
        case 4:
            producto="Audifonos Bose";
            valor= 2200000;
            console.log("Producto Seleccionado: "+producto+". Valor: $"+valor);
            elegirMedioDePago();
            calcularValorDescuento();
            aplicarCupon();
            break;

        case 5:
            alert("Gracias, vuelva pronto")
            break;
    }


