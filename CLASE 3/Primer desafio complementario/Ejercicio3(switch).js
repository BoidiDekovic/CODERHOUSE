alert("A continuacion ingrese la operacion que desea realizar")

let opcion = Number(prompt("1-Suma           2-Resta           3-Multiplicacion"))
let contador = 1
let cantidadDeNumeros = 0

switch (opcion) {
    case 1:
        let s = prompt("cuantos numeros quiere sumar?")
        let suma = 0
        while(contador <= s){
            let numeroASumar = Number(prompt("Ingrese un numero"))
            suma = suma + numeroASumar
            contador++
        }
        console.log("la suma de los numeros dados da : " + suma)
        alert("la suma de los numeros da: "+ suma)
    break;
    
    case 2: 
        let r = Number(prompt("cuantos numeros quiere restar?")) - 1
        let resta = Number(prompt("ingrese un numero"))
        while(contador <= r){
            let numeroARestar = Number(prompt("Ingrese un numero"))
            resta = resta - numeroARestar
            contador++
        }
        console.log("la resta de los numeros dados da: " + resta)
        alert("la resta de los numeros dados: "+ resta)
    break;

    case 3:

        let m = prompt("cuantos numeros quiere multiplicar?")
        let multiplicacion = 1
        while(contador <= m){
            let numeroAMultiplicar = Number(prompt("Ingrese un numero"))
            multiplicacion = multiplicacion * numeroAMultiplicar
            contador++
        }
        console.log("la multiplicacion de los numeros dados da: " + multiplicacion)
        alert("la multiplicacion de los numeros dados da: "+ multiplicacion)
    break;

    default:
        break;
}