alert("A continuacion ingrese la operacion que desea realizar")

let opcion = Number(prompt("1-Suma           2-Resta           3-Multiplicacion"))
let contador = 1
let cantidadDeNumeros = parseInt(0)

while(isNaN(opcion) || opcion > 3 ){
    alert("Error, ingrese un numero que corresponda a una de las operaciones disponibles ")
    opcion = parseInt(prompt("1-Suma           2-Resta           3-Multiplicacion"))
}

switch (opcion) {
    case 1:
        let s = Number(prompt("cuantos numeros quiere sumar?"))
        while(isNaN(s) || s == ""){
            alert("Error, debe ingresar un numero")
            s = Number(prompt("cuantos numeros quiere sumar?"))
        }
        let suma = parseInt(0)
        while(contador <= s){
            let numeroASumar = Number(prompt("Ingrese un numero"))
            if(isNaN(numeroASumar) || numeroASumar == ""){
                alert("Error, ingrese un numero nuevamente")
            }else{
            suma = suma + numeroASumar
            contador++
            }  
        }
        console.log("la suma de los numeros dados da : " + suma)
        alert("la suma de los numeros da: "+ suma)
     
    break;
    
    case 2: 
        let r = Number(prompt("cuantos numeros quiere restar?"))-1
        while(isNaN(r) || r == "" ){
            alert("Error, debe ingresar un numero")
            r = Number(prompt("cuantos numeros quiere restar?"))-1 
        }
        let resta = Number(prompt("Ingrese un numero"))
        if(isNaN(resta) || resta == ""){
            alert("Error, debe ingresar un numero nuevamente")
        }else{
        while(contador <= r){
            let numeroARestar = Number(prompt("Ingrese un numero"))
            if(isNaN(numeroARestar) || numeroARestar == ""){
                alert("Error, debe ingresar un numero nuevamente")
            }else{
            resta = resta - numeroARestar
            contador++
            }
        }
    }
        console.log("la resta de los numeros dados da: " + resta)
        alert("la resta de los numeros dados: "+ resta)
    break;

    case 3:

        let m = Number(prompt("cuantos numeros quiere multiplicar?"))
        while(isNaN(m) || m == ""){
            alert("Error, debe ingresar un numero")
            m = Number(prompt("cuantos numeros quiere multiplicar?"))
        }
        let multiplicacion = parseInt(1)
        while(contador <= m){
            let numeroAMultiplicar = Number(prompt("Ingrese un numero"))
            if(isNaN(numeroAMultiplicar)|| numeroAMultiplicar == ""){
                alert("Error, ingrese un numero nuevamente")
            }else{
            
            multiplicacion = multiplicacion * numeroAMultiplicar
            contador++
        }
    }
        console.log("la multiplicacion de los numeros dados da: " + multiplicacion)
        alert("la multiplicacion de los numeros dados da: "+ multiplicacion)
    break;

    default:
        break;
}