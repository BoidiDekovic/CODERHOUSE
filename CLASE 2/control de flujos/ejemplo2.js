let numero = prompt("ingrese un numero: ")
parseInt(numero);
if (numero > 100) {
    alert("el numero ingresado es mayor a 100")    
}

/************************************************/

let palabra = prompt("Ingrese una palabra")

if (palabra == "Hola") {
    console.log("la palabra ingresada es un Hola")
}

/******************************************/

let nro = Number(prompt("Ingrese un numero:"))
if (nro >=10 && nro <= 50 ) {
    alert("El numero que ingreso esta entre 10 y 50")
}else{
    console.log("el numero ingresado no esta dentro del rango 10 .. 50")
}