console.log("Bienvenido, por favor eliga uno de nuestros productos\n 1. TV Sony 46 pulgadas\n 2. Celular Samsung S24\n 3. Computador Acer 15 pulgadas\n 4. Audifonos Bose\n 5. Salir");
let producto= "",valor= 0,tarjeta,descuento;

function elegirMedioDePago(){
    console.log("1. Tarjeta Falabella\n 2. Tarjeta Tuya\n 3. Otro medio de pago");

    let opcionTarjeta = prompt("Eliga el medio de pago: ");
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

function calcularValorDescuento(){
    let valorConDescuento= parseInt(valor-(valor*(descuento/100)));
    console.log("Checkout\n Producto: "+producto+"\n Medio de pago: "+tarjeta+"\n Valor: $"+valor+"\n Descuento: "+descuento+"%\n Valor Total: $"+valorConDescuento);
}

function CalcularDescuentoCupon(descuentoCupon,cadenaCupon){
    valorConDescuento = parseInt(valor-(valor*((descuento+descuentoCupon)/100)));
    console.log("Checkout\n Producto: "+producto+"\n Medio de pago: "+tarjeta+"\n Valor: $"+valor+"\n Cupon: "+cadenaCupon+"\n Descuento: "+parseInt(descuento+descuentoCupon)+"%\n Valor Total: $"+valorConDescuento);
}

function aplicarCupon(){
    let cupon = prompt("¿Tiene un cupón de descuento? (SI/NO)");
    if(cupon == "SI"){
        cadenaCupon = prompt("Ingrese el cupón de descuento por favor: ");
        if(cadenaCupon === "DESCUENTOENERO"){
            CalcularDescuentoCupon(20,"DESCUENTOENERO");

        }
        else if(cadenaCupon === "DESCUENTO10"){
            CalcularDescuentoCupon(10,"DESCUENTO10");
        }
        else if(cadenaCupon === "DESCUENTO5"){
            CalcularDescuentoCupon(5,"DESCUENTO5");
        }
    }
    else  {
        calcularValorDescuento();
        console.log("Gracias, vuelva pronto");


    }
    }


let opcion = prompt("Ingrese la opción que desea: ");
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
        console.log("Gracias, vuelva pronto")
        break;
}

