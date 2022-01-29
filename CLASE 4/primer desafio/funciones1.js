

let platoElegido = 0 ;
let bebidaElegida = 0 ;
let pedidoHastaAhora = 0 ;



do {
    elegirPlato()
    primerValidacion(platoElegido)
    sumarPlatos(platoElegido)
    
    elegirBebida()
    segundaValidacion(bebidaElegida)
    sumarBebidas(bebidaElegida)

    pregunta = prompt("Desea comprar algo mas?\ns/n")
} while (pregunta != "n");

alert("Usted debe pagar " + pedidoHastaAhora)



function primerValidacion(dato){
    if(isNaN(dato) || dato > 5  ){
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

function elegirPlato(){
    alert("Elija uno de los siguientes platos disponibles")
    platoElegido = prompt("1-Asado \n 2-Zorrentinos \n 3-Paella \n 4-Sushi \n 5-Ceviche")
    return platoElegido
}

function elegirBebida() {
    alert("con que bebida desea acompañar su plato ")
    bebidaElegida = prompt("1-Agua \n 2-Jugo \n 3-CocaCola \n 4-SevenUp \n 5-Vino")
    return bebidaElegida
}

function sumarPlatos(platoElegido){
    switch (platoElegido) {
        case "1":
            return pedidoHastaAhora = pedidoHastaAhora + 1250
            break;
        case "2": 
            return pedidoHastaAhora = pedidoHastaAhora + 750
            break;
        case "3":
            return pedidoHastaAhora = pedidoHastaAhora + 850
            break;
        case "4":
            return pedidoHastaAhora = pedidoHastaAhora + 900
            break;
        case "5": 
            return pedidoHastaAhora = pedidoHastaAhora + 800
        default:
            return 0
            break;
    }
}

function sumarBebidas(bebidaElegida) {
    switch (bebidaElegida) {
        case "1":
            return pedidoHastaAhora = pedidoHastaAhora + 200
            break;
        case "2": 
            return pedidoHastaAhora = pedidoHastaAhora + 300
            break;
        case "3":
            return pedidoHastaAhora = pedidoHastaAhora + 350
            break;
        case "4":
            return pedidoHastaAhora = pedidoHastaAhora + 350
            break;
        case "5": 
            return pedidoHastaAhora = pedidoHastaAhora + 500
        default:
            return 0
            break;
    }
}
