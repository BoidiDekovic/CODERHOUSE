
//ingresar 10 numeros por pantalla e imprimir la suma de los ultimos 5 valores ingresados
alert("a continuacion ingrese 10 numeros")
alert("Se sumaran los ultimos 5 numeros que ingrese.")

let suma = 0
for (let counter = 1; counter <= 10; counter++) {
    let numero = Number(prompt(counter + " - ingrese un numero"))
    if (counter > 5) {
       suma = suma + numero
    }
}

alert("la suma de los ultimos 5 numeros ingresados es: " + suma)
console.log("la suma de los ultimos 5 numeros ingresados es: " + suma)