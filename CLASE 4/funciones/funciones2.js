let monto = prompt("ingresar el monto")
let cuotas = prompt("en cuantas cuotas desea pagar?")


calcularCuotas(monto)

function calcularCuotas(monto) {
    resultado = monto / cuotas
    return alert("cada cuota sera de: " + resultado)
}



