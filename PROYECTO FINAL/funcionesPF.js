
let restauranteElegido = 0;
let platoElegido = 0 ;
let bebidaElegida = 0 ;
let pedidoHastaAhora = 0 ;

do {
    elegirRestaurante()
    primerValidacion(platoElegido)
    sumarPlatos(platoElegido)
    
    elegirBebida()
    segundaValidacion(bebidaElegida)
    sumarBebidas(bebidaElegida)

    pregunta = prompt("Desea comprar algo mas?\ns/n")
} while (pregunta != "n");

alert("Usted debe pagar " + pedidoHastaAhora)



function primerValidacion(dato){
    if(isNaN(dato) || dato > 3  ){
        alert("debe ingresar un numero segun la opcion deseada")
        elegirPlato()
    }
}

function segundaValidacion(dato) {
    if(isNaN(dato) || dato > 5){
        alert("debe ingresar un numero segun la opcion deseada")
        elegirBebida()
    }
}

function elegirRestaurante(){
    alert("Elija uno de los siguientes Restaurantes")
    restauranteElegido = prompt("1-Comida Peruna \n 2-Comida Armenia \n 3-Comida Croata \n 4-Comida Italiana \n 5-Comida Argentina")
    switch (restauranteElegido) {
        case "1":
            elegirPlatoPeruano()
            return platoElegido
        case "2":
            elegirPlatoArmenio()
            return platoElegido
       case "3":
            elegirPlatoCroata()
            return platoElegido
        case "4":
            elegirPlatoItaliano()
            return platoElegido
    case "5":
            elegirPlatoArgentino()
            return platoElegido
    default:
    return 0
    }
}

function elegirPlatoPeruano() {
    alert("Elija uno de los siguientes platos:")
    platoElegido = prompt("1-Causa Limena\n 2-Cevichenn\n 3-Chaufa")
    return platoElegido 
}

function elegirPlatoArmenio() {
    alert("Elija uno de los siguientes platos:")
    platoElegido = prompt("1-Chiken \n 2-Hummus\n 3-Falafel")
    return platoElegido 
}

function elegirPlatoCroata() {
    alert("Elija uno de los siguientes platos:")
    platoElegido = prompt("1-Ensalada de Pulpo \n 2-Kvarner \n 3-Trufas")
    return platoElegido 
}

function elegirPlatoItaliano() {
    alert("Elija uno de los siguientes platos:")
    platoElegido = prompt("1-Lasania\n 2-Spagetti\n 3-Bola de arroz Italiana")
    return platoElegido 
}


function elegirPlatoArgentino() {
    alert("Elija uno de los siguientes platos:")
    platoElegido = prompt("1-Parrilla Clasica \n 2-Locro\n 3-Empanadas")
    return platoElegido 
}

function elegirBebida() {
    alert("con que bebida desea acompañar su plato ")
    bebidaElegida = prompt("1-CocaCola \n 2-SevenUp \n 3-Cerveza \n 4-Tonica \n 5-Agua")
    return bebidaElegida
}

function sumarPlatos(platoElegido){
    switch (platoElegido) {
        case "1":
            return pedidoHastaAhora = pedidoHastaAhora + 1250
        case "2": 
            return pedidoHastaAhora = pedidoHastaAhora + 900
        case "3":
            return pedidoHastaAhora = pedidoHastaAhora + 850
        default:
            return 0
            break;
    }
}

function sumarBebidas(bebidaElegida) {
    switch (bebidaElegida) {
        case "1":
            return pedidoHastaAhora = pedidoHastaAhora + 300
            break;
        case "2": 
            return pedidoHastaAhora = pedidoHastaAhora + 300
            break;
        case "3":
            return pedidoHastaAhora = pedidoHastaAhora + 400
            break;
        case "4":
            return pedidoHastaAhora = pedidoHastaAhora + 300
            break;
        case "5": 
            return pedidoHastaAhora = pedidoHastaAhora + 100
        default:
            return 0
            break;
    }
}
